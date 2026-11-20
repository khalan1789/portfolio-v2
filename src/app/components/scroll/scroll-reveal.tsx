"use client";

import { useEffect } from "react";
import {
   hasAnimationPlayed,
   rememberAnimationPlayed,
} from "../../../lib/animations/played-animations";
import {
   getWaveDelayMs,
   sortByDocumentOrder,
} from "../../../lib/animations/reveal-wave";

const ANIMATION_SELECTOR = "[data-animate]";
const PLAYED_ATTRIBUTE = "data-played";
const INSTANT_ATTRIBUTE = "data-instant";

function findAnimatedElements(root: Element): HTMLElement[] {
   return [
      ...(root.matches(ANIMATION_SELECTOR) ? [root as HTMLElement] : []),
      ...Array.from(root.querySelectorAll<HTMLElement>(ANIMATION_SELECTOR)),
   ];
}

function markAsPlayed(animatedElement: Element) {
   animatedElement.setAttribute(PLAYED_ATTRIBUTE, "true");
   rememberAnimationPlayed(animatedElement);
}

function showWithoutAnimation(animatedElement: Element) {
   // data-instant coupe la transition : l'état final s'applique d'un coup
   animatedElement.setAttribute(INSTANT_ATTRIBUTE, "true");
   animatedElement.setAttribute(PLAYED_ATTRIBUTE, "true");
}

function registerAnimatedElements(
   root: Element,
   animationObserver: IntersectionObserver,
) {
   findAnimatedElements(root).forEach((animatedElement) => {
      if (animatedElement.hasAttribute(PLAYED_ATTRIBUTE)) return;

      // Déjà vu pendant cette session : état final immédiat, sans animation
      if (hasAnimationPlayed(animatedElement)) {
         showWithoutAnimation(animatedElement);
         return;
      }

      animationObserver.observe(animatedElement);
   });
}

function releaseAnimatedElements(
   root: Element,
   animationObserver: IntersectionObserver,
) {
   findAnimatedElements(root).forEach((animatedElement) => {
      animationObserver.unobserve(animatedElement);
   });
}

export default function ScrollReveal() {
   useEffect(() => {
      const animationObserver = new IntersectionObserver(
         (entries) => {
            const visibleElements = entries
               .filter((entry) => entry.isIntersecting)
               .map((entry) => entry.target)
               .filter(
                  (target): target is HTMLElement =>
                     target instanceof HTMLElement,
               );

            // Ordre du DOM, pour que la vague suive l'ordre d'affichage
            sortByDocumentOrder(visibleElements).forEach((visibleElement) => {
               animationObserver.unobserve(visibleElement);
               visibleElement.style.setProperty(
                  "--animation-delay",
                  `${getWaveDelayMs(visibleElement)}ms`,
               );
               markAsPlayed(visibleElement);
            });
         },
         { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
      );

      registerAnimatedElements(document.body, animationObserver);

      const mutationObserver = new MutationObserver((mutations) => {
         mutations.forEach((mutation) => {
            mutation.removedNodes.forEach((removedNode) => {
               if (removedNode instanceof Element) {
                  releaseAnimatedElements(removedNode, animationObserver);
               }
            });

            mutation.addedNodes.forEach((addedNode) => {
               if (addedNode instanceof Element) {
                  registerAnimatedElements(addedNode, animationObserver);
               }
            });
         });
      });
      mutationObserver.observe(document.body, {
         childList: true,
         subtree: true,
      });

      const handleFocusIn = (event: FocusEvent) => {
         if (!(event.target instanceof Element)) return;

         const animatedAncestor = event.target.closest(ANIMATION_SELECTOR);
         if (!animatedAncestor) return;

         // Au focus clavier, l'élément apparaît sans attendre la vague
         animationObserver.unobserve(animatedAncestor);
         markAsPlayed(animatedAncestor);
      };
      document.addEventListener("focusin", handleFocusIn);

      return () => {
         mutationObserver.disconnect();
         animationObserver.disconnect();
         document.removeEventListener("focusin", handleFocusIn);
      };
   }, []);

   return null;
}
