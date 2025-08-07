import { inter } from "@/app/constants";

interface ButtonProps {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const Button = ({ className, onClick, children, }: ButtonProps) => {
  
  const classes = `w-[191px] text-[14px] text-white transition-all ease-in-out duration-300 h-[50px] border-2 border-themeYellow ${className} ${inter.className} `;

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );


  return renderButton();
};

export default Button;
