import { createContext, useContext, useState, type ReactNode } from 'react';

export interface CompareItem {
  id: number;
  name: string;
  price: number;
  img: string;
}

interface CompareContextType {
  compareItems: CompareItem[];
  addToCompare: (product: CompareItem) => void;
  removeFromCompare: (productId: number) => void;
  isCompared: (productId: number) => boolean;
}

const CompareContext = createContext<CompareContextType | undefined>(undefined);

export function CompareProvider({ children }: { children: ReactNode }) {
  const [compareItems, setCompareItems] = useState<CompareItem[]>([]);

  const addToCompare = (product: CompareItem) => {
    setCompareItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev;
      }
      return [...prev, product];
    });
  };

  const removeFromCompare = (productId: number) => {
    setCompareItems(prev => prev.filter(item => item.id !== productId));
  };

  const isCompared = (productId: number) => {
    return compareItems.some(item => item.id === productId);
  };

  return (
    <CompareContext.Provider value={{
      compareItems,
      addToCompare,
      removeFromCompare,
      isCompared
    }}>
      {children}
    </CompareContext.Provider>
  );
}

export const useCompare = () => {
  const context = useContext(CompareContext);
  if (context === undefined) {
    throw new Error('useCompare must be used within a CompareProvider');
  }
  return context;
};