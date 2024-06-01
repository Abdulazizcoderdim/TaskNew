import { CirclePlay } from 'lucide-react'
import ImgB from '../../../public/About.png'
import MaskImg from '../../../public/Mask Group.png'
import Recen from '../../../public/Rectangle.png'
import EmblaCarousel from './slides/js/EmblaCarousel'

import Img1 from '../../../public/barands/logo-fhb 1.png'
import Img2 from '../../../public/barands/2.png'
import Img3 from '../../../public/barands/3.png'
import Img4 from '../../../public/barands/4.png'
import Img5 from '../../../public/barands/5.png'
import Img6 from '../../../public/barands/6.png'
import Img7 from '../../../public/barands/7.png'
import Img8 from '../../../public/barands/8.png'

const brands = [
  {
    img: Img1,
    img2: Img2,
  },
  {
    img: Img3,
    img2: Img4,
  },
  {
    img: Img5,
    img2: Img6,
  },
  {
    img: Img7,
    img2: Img8,
  },
]

const About = () => {
  return (
    <div className="bg-[#1E1E1E] text-white w-full py-16">
      <div className="container">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h1 className="text-[90px] font-semibold text-white/10 uppercase">о нас</h1>
            <div className="ml-20 -mt-7 flex flex-col">
              <div className="flex gap-5">
                <div className="w-[2px] h-full bg-[#86DA44]" />
                <p className="text-4xl font-semibold uppercase">
                  {' '}
                  <span className="text-[#86DA44]">принципы</span> которых{' '}
                  <br /> мы придерживаемся
                </p>
              </div>
              <div className="flex flex-col">
                <div className="font-semibold text-[80px] text-white/10">
                  01
                </div>
                <div className="flex flex-col gap-5 -mt-16 ml-20">
                  <h1 className="text-[27px] font-semibold text-[#86DA44]">
                    Качества
                  </h1>
                  <p className="text-lg font-light leading-[36px]">
                    Равным образом реализация намеченных плановых заданий <br />{' '}
                    широкому кругу (специалистов) участие в формировании вилла в{' '}
                    <br /> лесу
                  </p>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="font-semibold text-[80px] text-white/10">
                  02
                </div>
                <div className="flex flex-col gap-5 -mt-16 ml-20">
                  <h1 className="text-[27px] font-semibold text-[#86DA44]">
                    Креативность
                  </h1>
                  <p className="text-lg font-light leading-[36px]">
                    Значимость этих проблем настолько очевидна, что <br />{' '}
                    реализация намеченных плановых заданий
                  </p>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="font-semibold text-[80px] text-white/10">
                  03
                </div>
                <div className="flex flex-col gap-5 -mt-16 ml-20">
                  <h1 className="text-[27px] font-semibold text-[#86DA44]">
                    Современность
                  </h1>
                  <p className="text-lg font-light leading-[36px]">
                    Значимость этих проблем настолько очевидна, что реализация{' '}
                    <br /> намеченных плановых заданий играет важную роль в{' '}
                    <br /> формировании позиций
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex relative justify-end items-end">
            <span className="absolute top-1/2 right-1/2 left-1/2">
              <CirclePlay className="cursor-pointer w-20 h-20" />
            </span>
            <img
              src={ImgB}
              alt=""
              className="object-left-bottom object-cover"
            />
          </div>
        </div>
      </div>

      <div className="container mt-24">
        <div className="grid grid-cols-2">
          <div className="flex flex-col ">
            <h1 className="text-[70px] text-white/10 font-semibold uppercase">
              Что мы можем?
            </h1>
            <div className="flex flex-col gap-5 items-end">
              <div className="flex gap-5">
                <div className="w-[2px] h-full bg-[#86DA44]" />
                <p className="text-4xl font-semibold uppercase">
                  {' '}
                  <span className="text-[#86DA44]">индивидуальное</span> <br />
                  проектирование вашех домов
                </p>
              </div>
              <p className="max-w-[504.06px] text-lg font-light">
                на выбор подходяший раззмер и конфигурация дома для разных
                земельных участок и разного состава семьи ( молодая пара. семья
                с маленьким ребенком, дом для большой семьи).Мы сможем
                установить дом где угодно - на участке перед вышем домом, в
                лесной зоне, на береге реки. Доставку осуществляет наша компания
              </p>
            </div>
          </div>

          <div className="relative flex justify-end">
            <span className="absolute top-1/2 right-1/2 left-1/2">
              <CirclePlay className="cursor-pointer w-20 h-20" />
            </span>
            <img src={MaskImg} className="object-center object-cover" alt="" />
          </div>
        </div>
      </div>

      <div className=" mt-20">
        <div className="relative w-full ">
          <img src={Recen} className="object-cover w-full h-[216px]" alt="" />

          <div className="absolute top-14 container py-5 grid grid-cols-3">
            <div className="flex justify-center gap-5 items-center">
              <span className="text-8xl text-[#86DA44] font-bold">9</span>
              <p className="text-xl font-bold">
                лет опыта <br />
                работы
              </p>
            </div>
            <div className="flex justify-center gap-5  items-center">
              <span className="text-8xl text-[#86DA44] font-bold">13</span>
              <p className="text-xl font-bold">
                крутых дизайнеров и <br />
                архитекторов
              </p>
            </div>
            <div className="flex justify-center gap-5  items-center">
              <span className="text-8xl text-[#86DA44] font-bold">103</span>
              <p className="text-xl font-bold">
                проектов во всех <br />
                регионах страны
              </p>
            </div>
          </div>
        </div>
      </div>

{/* ---- */}
      <div className="mt-20 mb-10 container">
        <h1 className="text-[90px] text-white/10 font-semibold uppercase">Проекты</h1>
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
        <h1 className="text-[90px] text-white/10 font-semibold">ПАРТНЕРЫ</h1>
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
                <img className='w-[150.3px] h-[42.35px]' src={item.img} alt="" />
                <img className='w-[150.3px] h-[42.35px]' src={item.img2} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* -- */}
    </div>
  )
}

export default About
