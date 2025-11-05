import { Breadcrumbs } from "../Breadcrumbs";

export function Blog() {
  return (
    <>
      <div>
        <Breadcrumbs items={[{label: 'Главная', path: '/main'}, {label: 'Блог'}]}/>
      </div>
    </>
  );
}