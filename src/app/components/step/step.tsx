import "./step.css";
type Props = {
   stepNumber: number;
};

export default function Step({ stepNumber }: Props) {
   return (
      <div className="flex flex-col w-20 justify-center items-center lg:h-20 lg:flex-row lg:w-full">
         <span className="border border-primary rounded-full h-10 w-10 flex justify-center items-center text-primary bg-card">
            {stepNumber}
         </span>
         <div className="step-line">
            <div className="w-[1px] h-full lg:w-full lg:h-[1px] bg-tercary"></div>
         </div>
      </div>
   );
}
