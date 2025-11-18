import { AlertDialog } from "@radix-ui/themes";

interface ModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
  maxWidth?: string;
  className?: string;
}

export function Modal({ open, onOpenChange, children, maxWidth = "800px", className = "" }: ModalProps) {
  return (
    <AlertDialog.Root open={open} onOpenChange={onOpenChange}>
      <AlertDialog.Content 
        maxWidth={maxWidth} 
        className={className}
      >
        {children}
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
}

export function ModalClose({ onClick }: { onClick?: () => void }) {
  return (
    <div className='justify-end flex'>
      <AlertDialog.Action>
        <img 
          src='./crest.svg' 
          className='rotate-45 cursor-pointer'
          alt="Закрыть"
          onClick={onClick}
        />
      </AlertDialog.Action>
    </div>
  );
}