import { createContext, useContext, useState, type ReactNode, useCallback, useMemo } from 'react';

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

  const addToLike = useCallback((product: LikeItem) => {
    setLikeItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev;
      }
      return [...prev, product];
    });
  }, []);

  const removeFromLike = useCallback((productId: number) => {
    setLikeItems(prev => prev.filter(item => item.id !== productId));
  }, []);

  const isLiked = useCallback((productId: number) => {
    return likeItems.some(item => item.id === productId);
  }, [likeItems]);


  const contextValue = useMemo(() => ({
    likeItems,
    addToLike,
    removeFromLike,
    isLiked
  }), [likeItems, addToLike, removeFromLike, isLiked]);

  return (
    <LikeContext.Provider value={contextValue}>
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