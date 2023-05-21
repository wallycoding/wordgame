import { AiOutlineLoading } from "react-icons/ai";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
}

const Button = ({ loading, icon, children, ...props }: ButtonProps) => {
  return (
    <button {...props} disabled={loading || props.disabled}>
      {loading ? <AiOutlineLoading size={20} className="animate-spin" /> : icon}
      {children}
    </button>
  );
};

export default Button;
