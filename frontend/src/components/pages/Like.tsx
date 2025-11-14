import { Breadcrumbs } from "../Breadcrumbs";
export default function Like(){
    return(
        <>
            <Breadcrumbs items={[{label: 'Главная', path: '/main'}, {label: 'Лайки'}]}/>
        </>
    )
}