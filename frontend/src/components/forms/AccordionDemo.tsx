import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

export function AccordionDemo() {
  return (
    <>
      <div className="flex justify-center">
        <Accordion
          type="single"
          collapsible
          className="w-full lg:w-[700px]"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="hover:no-underline [&[data-state=open]>svg]:rotate-45 text-left text-sm lg:text-base leading-relaxed lg:leading-normal">
              Есть ли гарантия того, что придет именно то, что было заказано? А если я оплачу и товар не придет?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3 lg:gap-4 text-balance">
              <div className="grid gap-3 lg:gap-4 text-sm lg:text-base">
                <p>Мы дорожим своей репутацией и гарантируем, что вы получите именно тот товар, который был вами заказан.</p>
                <p>Все товары проходят обязательную предпродажную проверку и тщательно упаковываются перед отправкой.</p>
                <p>Оплата товара происходит безопасно через защищенное соединение. В случае возникновения любой непредвиденной ситуации с отправкой или доставкой, мы полностью берем ее решение на себя.</p>
                <p>Если товар не придет, мы вернем вам полную стоимость заказа.</p>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2">
            <AccordionTrigger className="hover:no-underline [&[data-state=open]>svg]:rotate-45 text-left text-sm lg:text-base leading-relaxed lg:leading-normal">
              У меня в городе самокаты Kugoo дешевле. Почему?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3 lg:gap-4 text-balance">
              <div className="grid gap-3 lg:gap-4 text-sm lg:text-base">
                <p>Наша цена формируется не только из стоимости самоката, но и включает в себя целый ряд дополнительных услуг и гарантий, которые вы получаете:</p>
                <p><strong>Расширенная гарантия и сервис:</strong> Мы обеспечиваем полноценное гарантийное и послегарантийное обслуживание через собственные сервисные центры и удаленную поддержку специалистов.</p>
                <p><strong>Проверка качества:</strong> Каждый самокат перед отправкой тестируется, чтобы вы получили полностью исправное устройство.</p>
                <p><strong>Консультация и поддержка:</strong> Наши специалисты всегда готовы помочь с выбором, проконсультировать по эксплуатации и оперативно решить любой вопрос.</p>
                <p><strong>Надежность и ответственность:</strong> Мы являемся официальными дилерами и несем полную ответственность перед покупателями, что подтверждается всеми необходимыми документами.</p>
                <p>Мы уверены в оптимальном соотношении цены и качества нашего сервиса, который избавляет вас от многих рисков и хлопот.</p>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3">
            <AccordionTrigger className="hover:no-underline [&[data-state=open]>svg]:rotate-45 text-left text-sm lg:text-base leading-relaxed lg:leading-normal">
              Как осуществляется сервисное обслуживание в моем городе? Где гарантия, что меня обслужат?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3 lg:gap-4 text-balance">
              <div className="grid gap-3 lg:gap-4 text-sm lg:text-base">
                <p>При покупке электросамоката у нас, вам выдается кассовый чек, товарный чек и гарантийный талон – эти документы дают право на гарантийное обслуживание на законодательном уровне.</p>
                <p>Наши сервисные центры находятся в Москве, Санкт-Петербурге и Краснодаре. В случае поломки вы можете обратиться туда.</p>
                <p>Если вы живете в городе, где нет нашего сервисного центра, то наш специалист поможет решить вопрос удаленно. Он сможет понять какая запчасть вышла из строя и отправит ее вам, если вы сможете сами заменить ее. Если удаленно решить вопрос не удастся, специалист создаст трек номер и попросит вас отправить самокат транспортной компанией CDEK. Транспортировку Товара (с ремонта/на ремонт) Покупатель оплачивает самостоятельно или осуществляет доставку Товара до СЦ своими силами и за свой счет.</p>
                <p>В соответствии со ст. 20 ФЗ «О защите прав потребителей» на ремонт по гарантии дается не более 45 дней. В городах, где есть наш сервисный центр ремонт проводится за 3-7 дней.</p>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4">
            <AccordionTrigger className="hover:no-underline [&[data-state=open]>svg]:rotate-45 text-left text-sm lg:text-base leading-relaxed lg:leading-normal">
              Где находятся пункты самовывоза в моем городе?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3 lg:gap-4 text-balance">
              <div className="grid gap-3 lg:gap-4 text-sm lg:text-base">
                <p>На данный момент у нас действуют пункты самовывоза в городах, где расположены наши сервисные центры: Москва, Санкт-Петербург и Краснодар. Точные адреса и режим работы вы можете уточнить у нашего менеджера после оформления заказа. Для покупателей из других регионов мы предлагаем удобную и надежную доставку через транспортные компании.</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  )
}