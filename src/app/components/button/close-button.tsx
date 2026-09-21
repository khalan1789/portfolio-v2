type Props = {
   onClickAction: () => void;
   ariaRoleDescription: string;
};

export default function CloseButton({
   ariaRoleDescription,
   onClickAction,
}: Props) {
   return (
      <button
         className="border border-primary w-5 h5 cursor-pointer text-primary hover:bg-primary hover:text-secondary"
         onClick={onClickAction}
         aria-roledescription={ariaRoleDescription}
      >
         X
      </button>
   );
}
