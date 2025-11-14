import { Breadcrumbs } from "../Breadcrumbs";
export function Like(){
    return(
        <>
            <Breadcrumbs items={[{label: 'Главная', path: '/main'}, {label: 'Лайки'}]}/>
        </>
    )
}