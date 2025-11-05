import { Breadcrumbs } from "../Breadcrumbs";

export function Delivery() {
  return (
    <>
      <div>
        <Breadcrumbs items={[{label: 'Главная', path: '/main'}, {label: 'Доставка'}]}/>
      </div> 
    </>
  );
}