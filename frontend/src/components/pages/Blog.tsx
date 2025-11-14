import { Breadcrumbs } from "../Breadcrumbs";

export default function Blog() {
  return (
    <>
      <div>
        <Breadcrumbs items={[{label: 'Главная', path: '/main'}, {label: 'Блог'}]}/>
      </div>
    </>
  );
}