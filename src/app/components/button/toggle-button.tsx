type Props = {
   label?: string;
   ariaRoleDescription?: string;
   id: string;
   isChecked: boolean;
   toggleAction: () => void;
};

export default function ToggleButton({
   label,
   id,
   isChecked,
   ariaRoleDescription,
   toggleAction,
}: Props) {
   return (
      <div className="flex items-center justify-between mt-4 ">
         {label && (
            <label htmlFor={id} className="align-middle">
               {label}
            </label>
         )}
         <button
            id={id}
            role="switch"
            aria-checked={isChecked}
            onClick={toggleAction}
            className={`
               relative inline-flex h-6 w-11 items-center rounded-full
               transition-colors duration-200 ease-in-out
               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 border
               ${isChecked ? "bg-primary" : "bg-background"}
            ${label && "ml-4"}
        `}
            aria-roledescription={ariaRoleDescription}
         >
            <span
               className={`
            inline-block h-4 w-4 transform rounded-full
            transition-transform duration-200 ease-in-out
            ${isChecked ? "translate-x-6 bg-muted bg-light " : "translate-x-1 bg-typography"}

          `}
            />
         </button>
      </div>
   );
}
