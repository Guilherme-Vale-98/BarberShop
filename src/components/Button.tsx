interface ButtonProps {
  className?: string;
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  px?: string;
  white?: boolean;
}

const Button = ({ className, href, onClick, children, px, white }: ButtonProps) => {
  const classes = ` ${className || ""}`;

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );


  return renderButton();
};

export default Button;
