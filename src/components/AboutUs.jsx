import Header from './Header'
import Img1 from '../../public/AboutPage1.png'
import Img2 from '../../public/iconAbout.png'
import Img from '../../public/AboutPage.png'
import EmblaCarousel from '../pages/about/slides/js/EmblaCarousel'

import Img11 from '../../public/barands/logo-fhb 1.png'
import Img22 from '../../public/barands/2.png'
import Img3 from '../../public/barands/3.png'
import Img4 from '../../public/barands/4.png'
import Img5 from '../../public/barands/5.png'
import Img6 from '../../public/barands/6.png'
import Img7 from '../../public/barands/7.png'
import Img8 from '../../public/barands/8.png'
import Consulta from './Consulta'

const brands = [
  {
    imgG: Img11,
    img22: Img22,
  },
  {
    imgG: Img3,
    img22: Img4,
  },
  {
    imgG: Img5,
    img22: Img6,
  },
  {
    imgG: Img7,
    img22: Img8,
  },
]

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
                <p className="text-5xl font-normal uppercase">
                  котеж в краснодаре
                </p>
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
                  <ul className="flex flex-col gap-7">
                    <li className="text-[17px] font-semibold">АДРЕС</li>
                    <li className="text-[17px] font-semibold">ПЛОЩАДЬ</li>
                    <li className="text-[17px] font-semibold">МАТЕРИАЛЫ</li>
                    <li className="text-[17px] font-semibold">СРОК</li>
                    <li className="text-[17px] font-semibold">ЭТАЖНОСТЬ</li>
                  </ul>
                  <ul className="flex flex-col gap-7">
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
                <div className="flex items-center gap-7">
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

        {/* ---- */}
        <div className='bg-[#1E1E1E] text-white pb-20 border border-[#1E1E1E]'>
          <div className="mt-20 mb-10 container">
            <h1 className="text-[90px] text-white/10 font-semibold uppercase">
              Проекты
            </h1>
            <div className="flex items-center gap-5 ml-28 -mt-10">
              <div className="w-[2px] h-16 bg-[#86DA44] " />
              <p className="text-4xl uppercase font-semibold text-[#86DA44]">
                проекты компании
              </p>
            </div>
          </div>
          <div className="px-10">
            <EmblaCarousel />
          </div>
          <div className="container mt-20">
            <h1 className="text-[90px] text-white/10 font-semibold">
              ПАРТНЕРЫ
            </h1>
            <div className="ml-28 -mt-10 flex flex-col">
              <div className="flex gap-5 items-center">
                <div className="w-[2px] h-16 bg-[#86DA44] " />
                <p className="text-4xl uppercase font-semibold text-[#86DA44]">
                  наши партнеры
                </p>
              </div>
              <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 mt-5">
                {brands.map((item, index) => (
                  <div key={index} className="flex flex-col gap-10">
                    <img
                      className="w-[150.3px] h-[42.35px]"
                      src={item.imgG}
                      alt=""
                    />
                    <img
                      className="w-[150.3px] h-[42.35px]"
                      src={item.img22}
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* -- */}

        <Consulta />
      </div>
    </div>
  )
}

export default AboutUs
