type ButtomProps = {
  label: string;
  onClick: () => void;
};

const Button = ({ label, onClick }: ButtomProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-Red text-white font-redhat-text text-base leading-[125%] tracking-normal font-bold py-4 w-full rounded-full"
    >
      {label}
    </button>
  );
};

export default Button;
