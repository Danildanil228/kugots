import { useCart } from '../../contexts/CartContext';
import { useCompare } from '../../contexts/CompareContext';
import { useLike } from '../../contexts/LikeContext';

interface ActionIconProps {
  type: 'cart' | 'compare' | 'like';
  product?: {
    id: number;
    name: string;
    price: number;
    img: string;
  };
}

export function ActionIcon({ type, product }: ActionIconProps) {
  const { addToCart, removeFromCart, isInCart } = useCart();
  const { addToCompare, removeFromCompare, isCompared } = useCompare();
  const { addToLike, removeFromLike, isLiked } = useLike();
  const getImagePath = (path: string) => path.startsWith('/') ? path : `/${path}`;

  const config = {
    cart: {
      activeIcon: getImagePath("cart.svg"),
      inactiveIcon: getImagePath("CartIcon.svg"),
      isActive: product ? isInCart(product.id) : false,
      toggle: product ? (isInCart(product.id) ? () => removeFromCart(product.id) : () => addToCart(product)) : () => {}
    },
    compare: {
      activeIcon: getImagePath("comp.svg"),
      inactiveIcon: getImagePath("compblack.svg"), 
      isActive: product ? isCompared(product.id) : false,
      toggle: product ? (isCompared(product.id) ? () => removeFromCompare(product.id) : () => addToCompare(product)) : () => {}
    },
    like: {
      activeIcon: getImagePath("Heartblue.svg"),
      inactiveIcon: getImagePath("Heart.svg"),
      isActive: product ? isLiked(product.id) : false,
      toggle: product ? (isLiked(product.id) ? () => removeFromLike(product.id) : () => addToLike(product)) : () => {}
    }
  };

  const { activeIcon, inactiveIcon, isActive, toggle } = config[type];

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggle();
  };

  return (
    <button onClick={handleClick}>
      <div className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200 ease-in-out border ${
        isActive 
          ? 'bg-white border-[#6F73EE]' 
          : 'border-[#EAEBED] hover:bg-[#F4F7FB] hover:border-none'
      }`}>
        <img 
          src={isActive ? activeIcon : inactiveIcon} 
          alt={type} 
        />
      </div>
    </button>
  );
}