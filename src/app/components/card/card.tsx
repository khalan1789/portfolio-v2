type Props = {
   title?: string;
   description: string;
};

export default function Card({ title, description }: Props) {
   return (
      <div className="flex flex-col justify-center align-center h-55 border rounded-xl text-center p-5 bg-card md:w-80">
         {title && (
            <h3 className="text-primary text-xl font-bold mb-8">{title}</h3>
         )}
         <p className="text-typography">{description}</p>
      </div>
   );
}
