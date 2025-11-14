import { createContext, useContext, useState, type ReactNode } from 'react';

export interface LikeItem {
  id: number;
  name: string;
  price: number;
  img: string;
}

interface LikeContextType {
  likeItems: LikeItem[];
  addToLike: (product: LikeItem) => void;
  removeFromLike: (productId: number) => void;
  isLiked: (productId: number) => boolean;
}

const LikeContext = createContext<LikeContextType | undefined>(undefined);

export function LikeProvider({ children }: { children: ReactNode }) {
  const [likeItems, setLikeItems] = useState<LikeItem[]>([]);

  const addToLike = (product: LikeItem) => {
    setLikeItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev;
      }
      return [...prev, product];
    });
  };

  const removeFromLike = (productId: number) => {
    setLikeItems(prev => prev.filter(item => item.id !== productId));
  };

  const isLiked = (productId: number) => {
    return likeItems.some(item => item.id === productId);
  };

  return (
    <LikeContext.Provider value={{
      likeItems,
      addToLike,
      removeFromLike,
      isLiked
    }}>
      {children}
    </LikeContext.Provider>
  );
}

export const useLike = () => {
  const context = useContext(LikeContext);
  if (context === undefined) {
    throw new Error('useLike must be used within a LikeProvider');
  }
  return context;
};