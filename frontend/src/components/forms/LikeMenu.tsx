import { useState } from "react";
import { Popover } from "@mui/material";
import { ScrollArea } from "@radix-ui/themes";
import IconButton from '@mui/material/IconButton';
import { useLike } from "../../contexts/LikeContext";
import { formatPrice } from '../format';
import { Link } from 'react-router-dom';

export function LikeMenu(){
    const navItems =[
        { patch: '/like', label: 'В ваших избранных'}
    ];
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const { likeItems, removeFromLike } = useLike();
    
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

    return(
        <>
            <button className="heart-icon" onClick={handleOpen}>
                <div className="heart-bg w-10 h-10 flex justify-center items-center gap-2 rounded-[30px] transition-all duration-200 hover:bg-[#F4F7FB] relative">
                    <img src="./Heartblack.svg" alt="Избранное" />
                    {likeItems.length > 0 && (
                        <span className="absolute -top-2 -right-2 bg-[#6F73EE] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                            {likeItems.length}
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
                        <h2 className="font-semibold text-[#6F73EE]">
                            {navItems.map((item) => (
                                    <Link
                                        key={item.patch}
                                        to={item.patch}
                                        className=""
                                    >
                                        {item.label}
                                    </Link>
                                ))}</h2>
                        <p>{likeItems.length} товара</p>
                    </div>
                    <div className="w-full">
                        <ScrollArea className="h-auto max-h-[300px]">
                            {likeItems.length === 0 ? (
                                <div className="p-5 text-center text-gray-500">
                                    Нет избранных товаров
                                </div>
                            ) : (
                                likeItems.map((item) => (
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
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <IconButton 
                                                    aria-label="delete"
                                                    onClick={() => removeFromLike(item.id)}
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
                </div>
            </Popover>
        </>
    );
}