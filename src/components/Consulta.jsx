import { Facebook, Instagram, Youtube } from 'lucide-react'
import Img1 from '../../public/Contact.png'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

const Consulta = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm()

  const onSubmit = async (data) => {
    try {
      await new Promise((r) => setTimeout(r, 1000))
      toast.success('Сообщение отправлено')
      handleSubmit.reset()
      console.log('data ---', data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="">
      <div className="relative w-full">
        <img src={Img1} className="object-cover object-center" alt="" />

        <div className="px-44 text-white absolute w-full top-1/4">
          <div className="flex justify-between">
            <div className="">
              <div className="flex flex-col gap-5">
                <div className="flex gap-5 items-center">
                  <div className="w-[2px] h-16 bg-[#86DA44] " />
                  <p className="text-4xl uppercase font-semibold text-[#86DA44]">
                    Консультация
                  </p>
                </div>
                <p className="text-xl font-normal">
                  Персональный менеджер свяжется с вами <br />в течение 15 минут
                </p>
                <form
                  className="flex flex-col gap-5"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <input
                    {...register('name', {
                      required: true,
                      minLength: {
                        value: 3,
                        message: 'Минимальная длина имени 3 символа',
                      },
                    })}
                    type="text"
                    placeholder="имя"
                    className="outline-none bg-transparent placeholder:text-white/50 border-b-2 border-white/50 pb-2"
                  />
                  <input
                    {...register('email', {
                      required: true,
                      validate: (value) => value.includes('@'),
                    })}
                    type="text"
                    placeholder="E-mail"
                    className="outline-none bg-transparent placeholder:text-white/50 border-b-2 border-white/50 pb-2"
                  />
                  <input
                    {...register('phone', { required: true })}
                    type="text"
                    placeholder="телефон"
                    className="outline-none bg-transparent placeholder:text-white/50 border-b-2 border-white/50 pb-2"
                  />

                  <div className="flex items-center gap-1">
                    <input type="checkbox" />
                    <p className="text-sm text-white/70 font-light">
                      Согласен(на) с обработкой персональных данных
                    </p>
                  </div>

                  <button
                    disabled={isSubmitting}
                    className="relative border-2 z-50 text-white border-[#86DA44] py-4 text-xl transition-all duration-200 group"
                  >
                    <div className="absolute top-0 -z-40 w-0 h-full bg-[#86DA44] group-hover:w-full transition-all duration-200" />
                    {isSubmitting ? 'Отправка...' : 'ОСТАВИТЬ ЗАЯВКУ'}
                  </button>
                </form>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-5">
                <div className="flex gap-5 items-center">
                  <div className="w-[2px] h-16 bg-[#86DA44] " />
                  <p className="text-4xl font-semibold uppercase text-[#86DA44]">
                    КОНТАКТЫ
                  </p>
                </div>
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default Consulta
