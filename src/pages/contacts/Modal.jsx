import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

const Modal = ({ setOpen }) => {
  const modalRef = useRef(null)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm()

  const closeModal = (e) => {
    if (e.target === modalRef.current) setOpen(false)
  }

  const onSubmit = async (data) => {
    try {
      await new Promise((r) => setTimeout(r, 1000))
      setOpen(false)
      toast.success('Сообщение отправлено')
      console.log('data ---', data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed flex justify-center items-center z-[1002] inset-0 bg-black bg-opacity-30 backdrop-blur-sm"
    >
      <div className="bg-[#1E1E1E] w-[576px] h-[550px] px-24 py-12">
        <div className="flex flex-col justify-around h-full ">
          <div className="flex gap-5 items-center">
            <div className="w-[2px] h-full bg-[#86DA44]" />
            <p className="text-4xl uppercase font-semibold text-[#86DA44]">
              Связаться с нами
            </p>
          </div>

          <p className="text-xl font-light text-white/70">
            Персональный менеджер свяжется с вами <br />в течение 15 минут
          </p>

          <form
            className="flex flex-col gap-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <input
                type="text"
                placeholder="имя"
                {...register('name', {
                  required: true,
                  minLength: 3,
                  maxLength: 15,
                })}
                className="outline-none w-full bg-transparent placeholder:text-white/50 border-b-2 border-white/50 pb-2"
              />
              {errors.name && (
                <p className="text-sm text-red-500">
                  {errors.name.message || 'Please enter a valid name'}
                </p>
              )}
            </div>
            <div>
              <input
                type="text"
                placeholder="E-mail"
                {...register('email', {
                  required: true,
                  validate: (value) => {
                    if (!value.includes('@')) {
                      return 'Email must include @'
                    }
                    return true
                  },
                })}
                className="outline-none w-full bg-transparent placeholder:text-white/50 border-b-2 border-white/50 pb-2"
              />
              {errors.email && (
                <p className="text-sm text-red-500">
                  {errors.email.message || 'Please enter a valid email'}
                </p>
              )}
            </div>
            <div>
              <input
                type="text"
                placeholder="Телефон"
                {...register('phone', { required: true })}
                className="outline-none w-full bg-transparent placeholder:text-white/50 border-b-2 border-white/50 pb-2"
              />
              {errors.phone && (
                <p className="text-sm text-red-500">
                  {errors.phone.message || 'Please enter a valid phone number'}
                </p>
              )}
            </div>
            <div className="flex gap-1 items-center">
              <input type="checkbox" />
              <p>Согласен(на) с обработкой персональных данных</p>
            </div>
            <button
              disabled={isSubmitting}
              className={`relative uppercase border-2 ${
                isSubmitting ? 'opacity-50' : ''
              }z-50 text-white border-[#86DA44] py-4 text-xl transition-all duration-200 group`}
            >
              <div className="absolute top-0 -z-40 w-0 h-full bg-[#86DA44] group-hover:w-full transition-all duration-200"></div>
              {isSubmitting ? 'Отправка...' : 'ОСТАВИТЬ ЗАЯВКУ'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Modal
