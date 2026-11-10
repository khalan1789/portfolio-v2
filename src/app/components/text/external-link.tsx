type Props = React.PropsWithChildren<{
   href: string;
   ariaLabel: string;
}>;

export default function ExternalLink({ href, children, ariaLabel }: Props) {
   return (
      <a
         href={href}
         target="_blank"
         rel="noopener noreferrer"
         className="font-bold underline"
         aria-label={ariaLabel}
      >
         {children}
      </a>
   );
}
