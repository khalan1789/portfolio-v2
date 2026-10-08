type Props = {
   title?: string;
   description: string;
   sizing?: string;
};

export default function Card({ title, description, sizing }: Props) {
   return (
      <div className={`border rounded-xl p-6 bg-card md:p-4 lg:p-6 ${sizing}`}>
         {title && (
            <h3 className="text-primary  text-center text-xl font-bold mb-5 lg:mb-0 xl:text-2xl">
               {title}
            </h3>
         )}
         <p className="text-typography text-md mt-5">{description}</p>
      </div>
   );
}
