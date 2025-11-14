import { Breadcrumbs } from "../Breadcrumbs";

export default function AboutPage(){
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