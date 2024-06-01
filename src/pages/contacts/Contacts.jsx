import Header from '../../components/Header'
import ServicePage from '../../components/Service'
import { Facebook, Instagram, Youtube } from 'lucide-react'
import Modal from './Modal'
import { useState } from 'react'

const Contacts = () => {
   const [open, setOpen] = useState(false)
 
  return (
    <div>
      <Header />
      <div>
        <div className="bg-[#1E1E1E] text-white w-full pb-20">
          <div className="ml-32  flex justify-between gap-8 mx-10">
            <div className="flex flex-col gap-7 mt-7 w-[636.15px]">
              <h1 className="text-[20px] font-light">
                <span className="text-white/70">Главная - Контакты</span>
              </h1>
              <div className="flex items-center gap-3 mt-2">
                <div className="w-[2px] h-full bg-[#86DA44]" />
                <p className="text-5xl font-normal uppercase">
                  <span className="text-[#86DA44]">КОНТАКТЫ</span>
                </p>
              </div>
              <div>
                <div className="flex flex-col gap-5">
                  <p className="text-white/50">Наш офис:</p>
                  <p className="text-[21px] font-semibol ">
                    г.Москва ул. Ломоносова д. 16 <br />
                    9:00-21:00 Без выходных
                  </p>
                  <p className="text-[21px] font-semibol">+8 800 800 80 80</p>
                  <div className="flex flex-col gap-2">
                    <p className="text-xl font-light text-white/50">
                      Электронная почта:
                    </p>
                    <p className="text-[21px] font-semibold">
                      ForestINVERONMENTAL@mail.ru
                    </p>
                  </div>

                  <div className="flex mt-3 items-center gap-2">
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
              <button className="relative border-2 z-50 text-white border-[#86DA44] py-4 text-xl  w-[210px] transition-all duration-200 group">
                <div className="absolute top-0 -z-40 w-0 h-full bg-[#86DA44] group-hover:w-full transition-all duration-200" />
                Связаться с нами
              </button>

              {/* modal */}
              {<Modal/>}
              {/* modal */}
            </div>
            <div className="w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2085.6855389445373!2d37.695788011286886!3d55.89484553556933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b53124661f30c3%3A0x53d30ac08144d91!2z0KHQsNC00L7QstC-0LQg0LIg0KLQsNC50L3QuNC90YHQutC-0Lw!5e0!3m2!1sru!2s!4v1714465782997!5m2!1sru!2s"
                className="lg:w-[933px] md:w-[633px] sm:w-[533px] md:h-[575.39px] h-[300px]"
                loading=""
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <ServicePage />
    </div>
  )
}

export default Contacts
