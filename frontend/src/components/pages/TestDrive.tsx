import { Breadcrumbs } from "../Breadcrumbs";

export function TestDrive() {
  return (
    <>
      <div>
        <Breadcrumbs items={[{label: 'Главная', path: '/main'}, {label: 'Тест-Драйв'}]}/>
      </div>
    </>
  );
}