import { NavLink } from 'react-router-dom'
import HomePng from '../../../public/Home.png'
import {
  CirclePlay,
  Facebook,
  Instagram,
  Menu,
  MoveRight,
  Youtube,
} from 'lucide-react'
import About from '../about/About'
import Consulta from '../../components/Consulta'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <div className="w-full h-full">
      <div className="relative w-full min-h-[134.5vh] ">
        <img
          src={HomePng}
          className="absolute object-center object-cover sm:h-auto min-h-[830.42px] -z-50"
          alt=""
        />

        <div id='home' className="xl:container lg:px-24 px-8 py-14">
          <div className="flex items-center justify-between">
            <div className="flex items-center lg:gap-x-32 gap-x-10">
              <div className="flex flex-col leading-[6px]">
                <span className="text-lg font-semibold uppercase text-white">
                  forest
                </span>
                <span className="text-[11px] font-medium text-white">
                  INVERONMENTAL
                </span>
                <div className="w-[59px] mt-2 h-[2px] bg-[#86DA44]" />
              </div>
              <div className="lg:flex hidden items-center gap-x-10 text-white">
                <NavLink
                  className="text-lg font-normal hover:text-green-200 transition-all duration-200"
                  to={'/'}
                >
                  Главная
                </NavLink>
                <NavLink
                  className="text-lg font-normal hover:text-green-200 transition-all duration-200"
                  to={'/about-us'}
                >
                  О нас
                </NavLink>
                <NavLink
                  className="text-lg font-normal hover:text-green-200 transition-all duration-200"
                  to={'/services'}
                >
                  Услуги
                </NavLink>
                <NavLink
                  className="text-lg font-normal hover:text-green-200 transition-all duration-200"
                  to={'/projects'}
                >
                  Проекты
                </NavLink>
                <NavLink
                  className="text-lg font-normal hover:text-green-200 transition-all duration-200"
                  to={'/consultation'}
                >
                  Консультация
                </NavLink>
                <NavLink
                  className="text-lg font-normal hover:text-green-200 transition-all duration-200"
                  to={'/contacts'}
                >
                  Контакты
                </NavLink>
              </div>
            </div>
            <div className="flex items-center">
              <span className=" md:hidden flex cursor-pointer">
                <Menu className="text-white" />
              </span>
              <div className="md:flex hidden items-center gap-4">
                <span>
                  <Facebook
                    src="https://www.instagram.com/"
                    className="cursor-pointer text-white text-[21.37px]"
                  />
                </span>
                <span>
                  <Youtube
                    src="https://www.youtube.com/"
                    className="cursor-pointer text-white text-[21.37px]"
                  />
                </span>
                <span>
                  <Instagram
                    src="https://www.facebook.com"
                    className="cursor-pointer text-white text-[21.37px]"
                  />
                </span>
              </div>
            </div>
          </div>

          {/* section */}
          <div className="h-full w-full">
            <div className="md:flex md:flex-row justify-between flex-col lg:right-[6rem] lg:left-[6rem] right-[2rem] left-[2rem] absolute top-1/4">
              <div className="flex md:w-1/2 w-full gap-16">
                <div className="sm:flex hidden h-[458.12px] w-[2px] bg-[#86DA44]" />
                <div className="flex gap-y-10 flex-col justify-end">
                  <h1 className="md:text-6xl uppercase text-[35px] leading-[39px] text-white md:leading-[79.02px] font-normal">
                    посреди <span className="text-[#86DA44]">леса</span> <br />{' '}
                    далеко от шума
                  </h1>
                  <p className="text-white text-xl font-light">
                    Равным образом реализация намеченных плановых заданий <br />{' '}
                    широкому кругу (специалистов) участие в формировании
                  </p>
                  <button className="relative border-2 text-white border-[#86DA44] py-4 text-xl  w-[210px] transition-all duration-200 group">
                    <div className="absolute top-0 -z-40 w-0 h-full bg-[#86DA44] group-hover:w-full transition-all duration-200" />
                    Связаться с нами
                  </button>
                </div>
              </div>
              <div className="w-1/2">
                <div className=" md:flex hidden text-white h-full items-center justify-center">
                  <CirclePlay className="cursor-pointer w-20 h-20" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute xl:-bottom-52 -bottom-28  right-10 md:hidden text-4xl text-white flex">
          <MoveRight size={40} className="cursor-pointer text-white" />
        </div>
      </div>

      <About />

      <Consulta />

      {/* footer */}
      <Footer/>
    </div>
  )
}

export default Home
