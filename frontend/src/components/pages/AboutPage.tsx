import { Breadcrumbs } from "../Breadcrumbs";

export function AboutPage(){
  return(
    <>
      <div>
        <Breadcrumbs
        items={[
          {label: 'Главная', path: '/main'},
          {label: 'О магазине'}
        ]}
        />
      </div>
    </>
  )
}