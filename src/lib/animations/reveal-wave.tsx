const STAGGER_STEP_MS = 300;
const MAX_WAVE_RANK = 4;
const WAVE_WINDOW_MS = 150;

type RevealWave = {
   lastRevealTimeMs: number;
   rank: number;
};

// Une vague par groupe : le groupe est le parent direct des éléments animés
const revealWaves = new WeakMap<Element, RevealWave>();

export function getWaveDelayMs(revealedElement: Element): number {
   const groupElement = revealedElement.parentElement;
   if (!groupElement) return 0;

   const currentTimeMs = performance.now();
   const previousWave = revealWaves.get(groupElement);

   let rank = 0;
   if (
      previousWave &&
      currentTimeMs - previousWave.lastRevealTimeMs <= WAVE_WINDOW_MS
   ) {
      rank = Math.min(previousWave.rank + 1, MAX_WAVE_RANK);
   }

   revealWaves.set(groupElement, { lastRevealTimeMs: currentTimeMs, rank });
   return rank * STAGGER_STEP_MS;
}

export function sortByDocumentOrder<T extends Element>(elements: T[]): T[] {
   return [...elements].sort((firstElement, secondElement) =>
      firstElement.compareDocumentPosition(secondElement) &
      Node.DOCUMENT_POSITION_FOLLOWING
         ? -1
         : 1,
   );
}
