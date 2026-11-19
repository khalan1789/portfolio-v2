const playedAnimationKeys = new Set<string>();

function getAnimationKey(animatedElement: Element): string {
   const animationName = animatedElement.getAttribute("data-animate") ?? "";
   const sameNameElements = Array.from(
      document.querySelectorAll(`[data-animate="${animationName}"]`),
   );
   const rankAmongSameName = sameNameElements.indexOf(animatedElement);

   return `${window.location.pathname}|${animationName}|${rankAmongSameName}`;
}

export function hasAnimationPlayed(animatedElement: Element): boolean {
   return playedAnimationKeys.has(getAnimationKey(animatedElement));
}

export function rememberAnimationPlayed(animatedElement: Element): void {
   playedAnimationKeys.add(getAnimationKey(animatedElement));
}
