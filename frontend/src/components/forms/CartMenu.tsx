import { useState } from "react";
import { Popover } from "@mui/material";
import { ScrollArea } from "@radix-ui/themes";
import IconButton from '@mui/material/IconButton';
import { useCart } from "../../contexts/CartContext";

export function CartMenu(){
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const { cartItems, removeFromCart, updateQuantity, getTotalPrice, getTotalItems } = useCart();
    
    const open = Boolean(anchorEl);

    const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (event: React.MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();
        setAnchorEl(null);
    };

    const handlePopoverClose = (event: {}, reason: "backdropClick" | "escapeKeyDown") => {
        if (reason === "backdropClick") {
            
            event?.preventDefault?.();
        }
        setAnchorEl(null);
    };

    const formatPrice = (price: number) => {
        if (!price) return '';
        
        let cleanPrice = price.toString()
            .replace(/[,.]00$/, '')
            .replace(/[^\d,.]/g, '');
        
        cleanPrice = cleanPrice.replace(/[,.]/, '');
        
        return cleanPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    };

    return(
        <>
            <button className="cart-icon" onClick={handleOpen}>
                <div className="cart-bg w-30 h-10 flex justify-center items-center gap-2 rounded-[30px] transition-all duration-200 hover:bg-[#F4F7FB] relative">
                    <img src="./cart.svg" alt="Корзина" />
                    Корзина
                    {getTotalItems() > 0 && (
                        <span className="absolute -top-2 -right-2 bg-[#6F73EE] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                            {getTotalItems()}
                        </span>
                    )}
                </div>
            </button>

            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handlePopoverClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                sx={{
                    '& .MuiPopover-paper': {
                        width: 400,
                        borderRadius: '8px',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                        marginTop: '8px'
                    }
                }}
                disableScrollLock={true}
                disableRestoreFocus={true}
            >
                <div className="justify-center grid-cols-1 grid">
                    <div className="flex justify-between w-full bg-[#F4F7FB] p-5">
                        <h2 className="font-semibold">В вашей корзине</h2>
                        <p>{getTotalItems()} товара</p>
                    </div>
                    
                    <div className="w-full">
                        <ScrollArea className="h-auto max-h-[300px]">
                            {cartItems.length === 0 ? (
                                <div className="p-5 text-center text-gray-500">
                                    Корзина пуста
                                </div>
                            ) : (
                                cartItems.map((item) => (
                                    <div key={item.id} className="border-b border-[#EAEBED]">
                                        <div className="p-5 flex justify-between">
                                            <div className="flex items-center gap-4">
                                                <img 
                                                    src={item.img} 
                                                    alt={item.name}
                                                    className="w-12 h-12 object-cover rounded"
                                                />
                                                <div>
                                                    <h2 className="font-semibold text-sm">{item.name}</h2>
                                                    <div className="flex gap-3 items-center mt-1">
                                                        <p className="">{formatPrice(item.price)} ₽</p>
                                                        <div className="flex items-center gap-2">
                                                            <button 
                                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                                className="w-5 h-5 rounded bg-gray-200 flex items-center justify-center text-xs hover:bg-gray-300"
                                                            >
                                                                -
                                                            </button>
                                                            <span className="text-sm">{item.quantity}</span>
                                                            <button 
                                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                                className="w-5 h-5 rounded bg-gray-200 flex items-center justify-center text-xs hover:bg-gray-300"
                                                            >
                                                                +
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <IconButton 
                                                    aria-label="delete"
                                                    onClick={() => removeFromCart(item.id)}
                                                    size="small"
                                                >
                                                    <img src="./Delete.svg" alt="delete" className="w-5 h-5" />
                                                </IconButton>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </ScrollArea>
                    </div>
                    
                    {cartItems.length > 0 && (
                        <div className="flex justify-between w-full p-5 items-center">
                            <div>
                                <p className="text-gray-600">Сумма:</p>
                                <p className="font-semibold text-lg">{formatPrice(getTotalPrice())} ₽</p>
                            </div>
                            <div>
                                <button className="px-[30px] py-2.5 bg-[#6F73EE] text-white rounded-[5px] hover:bg-[#5A5FD8] transition-colors">
                                    Оформить заказ
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </Popover>
        </>
    );
}