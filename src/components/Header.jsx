import { Facebook, Instagram, Menu, Youtube } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'


const Header = () => {
  return (
    <div id="home" className="bg-[#1E1E1E]">
      <div className="xl:container lg:px-24 px-8  py-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center lg:gap-x-32 gap-x-10">
            <Link to={'/'} className="flex flex-col leading-[6px]">
              <span className="text-lg font-semibold uppercase text-white">
                forest
              </span>
              <span className="text-[11px] font-medium text-white">
                INVERONMENTAL
              </span>
              <div className="w-[59px] mt-2 h-[2px] bg-[#86DA44]" />
            </Link>
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
                to={'/projects'}
              >
                Проекты
              </NavLink>
              <NavLink
                className="text-lg font-normal hover:text-green-200 transition-all duration-200"
                to={'/services'}
              >
                Услуги
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
      </div>
    </div>
  )
}

export default Header
