import { Breadcrumbs } from "../Breadcrumbs";

export function Actions() {
  return (
    <>
      <div>
        <Breadcrumbs items={[{label: 'Главная', path: '/main'}, {label: 'Акции'}]}/>
      </div>
    </>
  );
}