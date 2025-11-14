import { Breadcrumbs } from "../Breadcrumbs";

export default function Actions() {
  return (
    <>
      <div>
        <Breadcrumbs items={[{label: 'Главная', path: '/main'}, {label: 'Акции'}]}/>
      </div>
    </>
  );
}