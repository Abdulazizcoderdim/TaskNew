import ServicePage1 from '../../public/ServicePage.png'

const ServicePage = () => {
  return (
    <div className="relative w-full">
      <img src={ServicePage1} alt="" />
      <div className="absolute top-1/3 flex flex-col gap-5 items-center justify-center w-full text-white">
        <h1 className="text-[20px] uppercase font-light text-white/50">
          получите расчет сметы с учетом стоимости работ и материалов через 30
          минут
        </h1>
        <p className="uppercase text-4xl text-[#86DA44] font-semibold">
          Оставьте заявку прямо сейчас
        </p>
        <div className='flex items-center gap-5 mt-5 justify-around w-full'>
          <div>
            <input
              type="text"
              placeholder="Имя"
              className="outline-none w-[440px] bg-transparent placeholder:text-white/50 border-b-2 border-white/50 pb-2"
            />
          </div>
          <div className='flex items-center gap-6'>
            <input
              type="text"
              placeholder="Телефон"
              className="outline-none w-[440px] bg-transparent placeholder:text-white/50 border-b-2 border-white/50 pb-2"
            />
            <button className="relative border-2 z-50 text-white border-[#86DA44] py-2 text-xl  w-[150px] transition-all duration-200 group">
              <div className="absolute top-0 -z-40 w-0 h-full bg-[#86DA44] group-hover:w-full transition-all duration-200" />
              Отправить
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicePage
