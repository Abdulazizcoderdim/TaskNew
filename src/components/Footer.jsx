import { ArrowUp, Facebook, Instagram, Youtube } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="bg-black w-full">
      <div className="px-12 py-10 w-full">
        <div className="flex w-full justify-between items-center">
          <Link to={'/'} className="cursor-pointer flex flex-col leading-[6px]">
            <span className="text-lg font-semibold uppercase text-white">
              forest
            </span>
            <span className="text-[11px] font-medium text-white">
              INVERONMENTAL
            </span>
            <div className="w-[59px] mt-2 h-[2px] bg-[#86DA44]" />
          </Link>

          <p className="text-xs font-light text-white/50">
            © Все право защищены {new Date().getFullYear()}
          </p>

          <div className="md:flex hidden items-center gap-x-10 text-white">
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

          <div className='text-white/50 border border-[#86DA44]'>
            <a href="#home">
              <ArrowUp size={30} />
            </a>
          </div>
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
  )
}

export default Footer
