import { Breadcrumbs } from "../Breadcrumbs";
import { ScrollToTop } from "../ScrollToTop";

export default function Contacts() {
  return (

      // <div>
      //   <Breadcrumbs items={[{label: 'Главная', path: '/main'},{label: 'Контакты'}]}/>
      // </div>
      <section className="flex justify-center container">
        <ScrollToTop/>
        <div>
          <div className="mt-10 sm:px-20">
            <Breadcrumbs items={[{label: 'Главная', path: '/main'},{label: 'Контакты'}]}/>
          </div>
          <div className="flex sm:w-[1440px] bg-[url('/kon.svg')] bg-no-repeat bg-center bg-cover py-20 rounded-xl">
            <p className="px-20 text-white text-[35px] uppercase font-semibold">Контакты и адреса</p>
          </div>
          <div className="justify-center flex">
            
          </div>
        </div>
      </section>

  );
}