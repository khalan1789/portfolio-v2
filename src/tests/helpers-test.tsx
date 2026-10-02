export function resolveSrc(img: string | { src: string }) {
   return typeof img === "string" ? img : img.src;
}
