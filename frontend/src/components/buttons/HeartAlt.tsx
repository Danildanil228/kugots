import { useLike } from '../../contexts/LikeContext';

interface HeartAltProps {
  product?: {
    id: number;
    name: string;
    price: number;
    img: string;
  };
}

export function HeartAlt({ product }: HeartAltProps) {
  const { addToLike, removeFromLike, isLiked } = useLike();

  const handleToggleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (product) {
      if (isLiked(product.id)) {
        removeFromLike(product.id);
      } else {
        addToLike(product);
      }
    }
  };

  const liked = product ? isLiked(product.id) : false;

  return(
    <>
      <button onClick={handleToggleLike}>
        <div className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200 ease-in-out hover:bg-[#F4F7FB] border border-[#EAEBED] hover:border-none">
          <img src="./Heartblue.svg" alt="" />
        </div>
      </button>
    </>
  )
}