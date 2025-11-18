export const formatPrice = (price: number): string => {
  if (!price) return '';
  
  let cleanPrice = price.toString()
    .replace(/[,.]00$/, '')
    .replace(/[^\d,.]/g, '');
  
  cleanPrice = cleanPrice.replace(/[,.]/, '');
  
  return cleanPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

export const getTagColor = (descr: string): string => {
  if (!descr) return 'opacity-0';
  if (descr === 'Хит') return 'bg-[#EE685F]';
  if (descr === 'Новинка') return 'bg-[#75D14A]';
  return 'bg-[#EE685F]';
};