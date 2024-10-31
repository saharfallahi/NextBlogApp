import Button from "./Button";
import SvgComponent from "./SvgComponent";
import { useFormStatus } from "react-dom";

export default function SubmitButton({ children, className, ...props }) {
  const { pending } = useFormStatus();
  return (
    <Button
      {...props}
      disabled={pending}
      className={`flex items-center justify-center gap-x-4 py-4 w-full
        ${className} 
        `}
    >
      {children}
      {pending && <SvgComponent />}
    </Button>
  );
}
