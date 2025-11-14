import { Breadcrumbs } from "../Breadcrumbs";

export default function Cart(){
    
    return(
        <>
            <Breadcrumbs items={[{label: 'Главная', path: '/main'}, {label: 'Корзина'}]}/>
            
        </>
    )
}