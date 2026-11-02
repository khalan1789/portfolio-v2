type Props = {
   description: string;
};

export default function BubbleText({ description }: Props) {
   return (
      <span
         //  key={elementKey}
         className="rounded-2xl bg-card text-primary p-2 mt-2 mr-2 border border-primary lg:mr-3 text-sm font-bold"
      >
         {description}
      </span>
   );
}
