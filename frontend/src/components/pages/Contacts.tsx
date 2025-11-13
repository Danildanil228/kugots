import { Breadcrumbs } from "../Breadcrumbs";

export function Contacts() {
  return (
    <>
      <div>
        <Breadcrumbs items={[{label: 'Главная', path: '/main'},{label: 'Контакты'}]}/>
      </div>
    </>
  );
}