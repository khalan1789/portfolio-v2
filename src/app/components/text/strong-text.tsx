type Props = React.PropsWithChildren<{
   text: string;
}>;

export default function StrongText({ text }: Props) {
   return <strong>{text}</strong>;
}
