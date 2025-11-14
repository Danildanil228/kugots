import { useCompare } from '../../contexts/CompareContext';

interface CompareIconProps {
  product?: {
    id: number;
    name: string;
    price: number;
    img: string;
  };
}

export function CompareIcon({ product }: CompareIconProps) {
  const { addToCompare, removeFromCompare, isCompared } = useCompare();

  const handleToggleCompare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (product) {
      if (isCompared(product.id)) {
        removeFromCompare(product.id);
      } else {
        addToCompare(product);
      }
    }
  };

  const compared = product ? isCompared(product.id) : false;

  return(
    <>
      <button onClick={handleToggleCompare}>
        <div className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200 ease-in-out border ${
          compared 
            ? 'bg-[white] border-[#6F73EE]' 
            : 'border-[#EAEBED] hover:bg-[#F4F7FB] hover:border-none'
        }`}>
          <img 
            src={compared ? "./comp.svg" : "./compblack.svg"} 
            alt={compared ? "Удалить из сравнения" : "Добавить в сравнение"} 
          />
        </div>
      </button>
    </>
  )
}