import Header from '../../components/Header'
import Service from '../../../public/Service.png'
import ServicePage from '../../components/Service'

const Services = () => {
  return (
    <div>
      <Header />

      <div>
        <div className="bg-[#1E1E1E] text-white w-full pb-20">
          <div className="ml-32 flex justify-between gap-8 mx-10">
            <div className="flex flex-col gap-7 mt-7 w-[636.15px]">
              <h1 className="text-[20px] font-light">
                <span className="text-white/70">Главная - Услуги</span>
              </h1>
              <div className="flex items-center gap-3 mt-2">
                <div className="w-[2px] h-full bg-[#86DA44]" />
                <p className="text-5xl font-normal uppercase">
                  Строительство{' '}
                  <span className="text-[#86DA44]">домов и коттеджей</span>
                </p>
              </div>
              <p className="text-white/70 text text-[15px] uppercase font-light">
                на выбор подходяший раззмер и конфигурация дома для разных{' '}
                <br />
                земельных участок и разного состава семьи ( молодая пара. семья
                с <br />
                маленьким ребенком, дом для большой семьи).Мы сможем <br />{' '}
                установить дом где угодно - на участке перед вышем домом, в
                лесной <br /> зоне, на береге реки. Доставку осуществляет наша
                компания
              </p>
              <p className="text-white/70 text text-[15px] uppercase font-light">
                Преимущества <br /> Комплексный подряд. Вы можете заказать
                выполнение всех работ в нашей компании: от проектирования до
                электромонтажа в готовом здании. «АНКА техник» располагает
                парком спецтехники, штатом специалистов. Возможно сотрудничество
                на условиях субподряда.
              </p>
              <p className="text-white/70 text text-[15px] uppercase font-light">
                Качество. Мы учитываем характеристики участка, соблюдаем ШНК,
                другие нормы, используем надежные строительные технологии.
              </p>

              <p className="text-white/70 text text-[15px] uppercase font-light">
                Сотрудничество. Компания «АНКА техник» подберет технологии
                строительства, стройматериалы, обеспечит их поставку.
                Запланированные работы выполняются без нарушения графика.
                Грамотная организация строительства позволяет возводить коттеджи
                и таунхаусы всего за несколько месяцев.
              </p>
              <p className="text-white/70 text text-[15px] uppercase font-light">
                Сопутствующие услуги. Мы выполняем изыскания, топосъемку,
                подготовку территории к застройке, демонтаж старых зданий.
              </p>

              <button className="relative border-2 z-50 text-white border-[#86DA44] py-4 text-xl  w-[210px] transition-all duration-200 group">
                <div className="absolute top-0 -z-40 w-0 h-full bg-[#86DA44] group-hover:w-full transition-all duration-200" />
                Подробнее
              </button>
            </div>
            <div className="">
              <img src={Service} alt="" className="" />
            </div>
          </div>
        </div>
      </div>
      <ServicePage/>
    </div>
  )
}

export default Services
