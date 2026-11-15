import Image from "next/image";
import Link from "next/link";
type Props = {
   width: number;
   height: number;
   icon: string;
   alt: string;
   href: string;
   ariaLabel: string;
};

export default function MediaIcon({
   width,
   height,
   icon,
   alt,
   href,
   ariaLabel,
}: Props) {
   return (
      <Link
         aria-label={ariaLabel}
         href={href}
         target="_blank"
         rel="noopener noreferrer"
      >
         <Image
            src={icon}
            alt={alt}
            width={width}
            height={height}
            className="color-secondary"
            aria-hidden="true"
         />
      </Link>
   );
}
