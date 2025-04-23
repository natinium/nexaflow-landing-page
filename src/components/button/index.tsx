import { Button as UIButton } from '@/components/ui/button';

interface ButtonProps {
  text?: string;
  icon?: React.ElementType;
  size?: number;
}

const Button = (buttonprops: ButtonProps) => {
  return (
    <UIButton className="flex-block bg-green-500 hover:bg-green-300 hover:cursor-pointer transition-colors duration-400 text-black px-6 py-6 rounded-xl gap-4">
      {buttonprops.text}
      {buttonprops.icon ? (
        <span className="flex items-center justify-center bg-green-300  w-6 h-6 rounded-md">
          {<buttonprops.icon size={buttonprops.size} />}
        </span>
      ) : (
        ''
      )}
    </UIButton>
  );
};

export default Button;
