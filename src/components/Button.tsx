import { twMerge } from "tailwind-merge";

type ButtonProps = {
  content: string;
  addon?: string;
  href?: string;
  onClick?: () => void;
};

const Button = ({ href, content, addon }: ButtonProps) => {
  return (
    <a
      href={href}
      className={twMerge(
        `text-[1rem] font-semibold rounded-[40px] px-[24px] py-[13px] flex items-center justify-center text-white bg-Purple cursor-pointer`,
        addon
      )}
    >
      {content}
    </a>
  );
};

export default Button;
