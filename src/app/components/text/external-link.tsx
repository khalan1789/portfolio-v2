type Props = React.PropsWithChildren<{
   href: string;
}>;

export default function ExternalLink({ href, children }: Props) {
   return (
      <a
         href={href}
         target="_blank"
         rel="noopener noreferrer"
         className="font-bold underline"
      >
         {children}
      </a>
   );
}
