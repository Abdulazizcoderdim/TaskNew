import Header from './Header'
import Img1 from '../../public/AboutPage1.png'
import Img2 from '../../public/iconAbout.png'
import Img from '../../public/AboutPage.png'


const AboutUs = () => {
  return (
    <div>
      <div>
        <Header />
        <div className="bg-[#1E1E1E] text-white w-full pb-20">
          <div className="ml-32 flex justify-between">
            <div className="flex flex-col gap-7 mt-10">
              <h1 className="text-[20px] font-light">
                Главная - Проекты -{' '}
                <span className="text-white/70">Котеж в краснодаре</span>
              </h1>
              <div className="flex items-center gap-3 mt-2">
                <div className="w-[2px] h-full bg-[#86DA44]" />
                <p className="text-5xl font-normal uppercase">котеж в краснодаре</p>
              </div>
              <p className="text-white/70">
                Равным образом реализация намеченных плановых <br /> заданий
                широкому кругу (специалистов) участи <br />
                кругу (специалистов) участи
              </p>
              <button className="relative border-2 z-50 text-white border-[#86DA44] py-4 text-xl  w-[210px] transition-all duration-200 group">
                <div className="absolute top-0 -z-40 w-0 h-full bg-[#86DA44] group-hover:w-full transition-all duration-200" />
                Связаться с нами
              </button>
              <div className="text-4xl font-semibold mt-10">
                <span>01</span>/
                <span className="text-[#86DA44] text-6xl">04</span>
              </div>
            </div>
            <div className="">
              <img src={Img1} alt="" className="max-w-[743px] h-[560px]" />
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="relative">
            <img src={Img} alt="" />
            <div className="absolute top-1/4 w-full flex justify-around text-white">
              <div className="flex flex-col gap-5">
                <div className="flex gap-3">
                  <div className="w-[2px] h-10 bg-[#86DA44]" />
                  <p className="text-4xl font-semibold uppercase text-[#86DA44]">
                    Описания котежа
                  </p>
                </div>
                <p className="text-[15px] font-light">
                  С другой стороны новая модель организационной деятельности{' '}
                  <br />
                  играет важную роль в формировании системы обучения кадров,{' '}
                  <br />
                  соответствует насущным потребностям.
                </p>
                <p className="text-[15px] font-light max-w-[505.16px]">
                  Повседневная практика показывает, что постоянный
                  количественный рост и сфера нашей активности.Повседневная
                  практика показывает, что начало повседневной работы по
                  формированию позиции требуют от нас анализа системы обучения
                  кадров, соответствует насущным потребностям. Таким образом
                  сложившаяся структура организации требуют определения и
                  уточнения соответствующий условий активизации. Разнообразный и
                  богатый опыт сложившаяся структура организации позволяет
                  оценить значение новых предложений.. Таким образом сложившаяся
                  структура организации требуют определения и уточнения
                  соответствующий условий активизации.
                </p>
              </div>
              <div className="flex flex-col gap-5 mt-16">
                <div className="flex items-center gap-20">
                  <ul className='flex flex-col gap-7'>
                    <li className="text-[17px] font-semibold">АДРЕС</li>
                    <li className="text-[17px] font-semibold">ПЛОЩАДЬ</li>
                    <li className="text-[17px] font-semibold">МАТЕРИАЛЫ</li>
                    <li className="text-[17px] font-semibold">СРОК</li>
                    <li className="text-[17px] font-semibold">ЭТАЖНОСТЬ</li>
                  </ul>
                  <ul className='flex flex-col gap-7'>
                    <li className="text-[15px] font-light text-white/70">
                      г.Краснодар, Чиланзарский район, 24-7-7
                    </li>
                    <li className="text-[15px] font-light text-white/70">
                      49 215 М2
                    </li>
                    <li className="text-[15px] font-light text-white/70">
                      Битон, цимент, гипс
                    </li>
                    <li className="text-[15px] font-light text-white/70">
                      Построенно за 12 месяцев
                    </li>
                    <li className="text-[15px] font-light text-white/70">
                      24 этажей
                    </li>
                  </ul>
                </div>
                <div className='flex items-center gap-7'>
                  <button className="relative border-2 z-50 text-white border-[#86DA44] py-2 text-xl  w-[250px] transition-all duration-200 group">
                    <div className="absolute top-0 -z-40 w-0 h-full bg-[#86DA44] group-hover:w-full transition-all duration-200" />
                    Связаться с нами
                  </button>
                  <div className="flex items-center">
                    <img src={Img2} alt="" />
                    <p>
                      Наши эксперты рассчитают для вас <br />
                      стоимость строительства объект 45 минут
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        

      </div>
    </div>
  )
}

export default AboutUs
