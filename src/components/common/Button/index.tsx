import "./index.css";

type ButtonProps = {
  onClick?: () => void; // Optional click handler
  children: React.ReactNode; // Content inside the button
  className?: string; // Optional additional CSS classes
  type?: "button" | "submit" | "reset"; // Optional button type attribute
  disabled?: boolean; // Optional disabled state
  // You can add more props if needed
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className = "",
  type = "button",
  disabled = false,
  ...props
}) => {
  return (
    <button
      type={type}
      className={`btn py-3 px-6 rounded-full bg-[#563ACC] download-txt ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
