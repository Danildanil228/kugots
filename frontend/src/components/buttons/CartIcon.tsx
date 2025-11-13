import { useCart } from '../../contexts/CartContext';

interface CartIconProps {
  product?: {
    id: number;
    name: string;
    price: number;
    img: string;
  };
}

export function CartIcon({ product }: CartIconProps) {
  const { addToCart, isInCart } = useCart();
  const inCart = product ? isInCart(product.id) : false;
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (product) {
      addToCart(product);
      console.log('Товар добавлен в корзину:', product.name);
    }
  };
  
  return(
    <>
      <button onClick={handleAddToCart}>
        <div className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200 ease-in-out border ${
          inCart 
            ? 'bg-[white] border-[#6F73EE]' 
            : 'border-[#EAEBED] hover:bg-[#F4F7FB] hover:border-none'
        }`}>
          <img 
            src={inCart ? "./cart.svg" : "./CartIcon.svg"} 
            alt={inCart ? "Товар в корзине" : "Добавить в корзину"} 
          />
        </div>
      </button>
    </>
  )
}