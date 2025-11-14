import { Breadcrumbs } from "../Breadcrumbs";

export default function Delivery() {
  return (
    <>
      <div>
        <Breadcrumbs items={[{label: 'Главная', path: '/main'}, {label: 'Доставка'}]}/>
      </div> 
    </>
  );
}