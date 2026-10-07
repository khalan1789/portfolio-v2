type Props = {
   label: string;
};

export default function CustomSpan({ label }: Props) {
   return <span className="text-primary">{label}</span>;
}
