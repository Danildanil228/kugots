import { Breadcrumbs } from "../Breadcrumbs";

export function Cart(){
    
    return(
        <>
            <Breadcrumbs items={[{label: 'Главная', path: '/main'}, {label: 'Корзина'}]}/>
            
        </>
    )
}