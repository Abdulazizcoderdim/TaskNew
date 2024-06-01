import AboutImg from '../../public/About.png'

const About = () => {
  return (
    <div className="bg-[#1E1E1E]  w-full">
        <div className="container flex flex-col py-24">
             <div className=" ">
                 <div className='flex flex-col'>
                    <h1 className='text-[90px] font-semibold text-white/10'>о нас</h1>
                    <div>

                    </div>
                 </div>
                 <div className=" ">
                    <img src={AboutImg} alt="about img" className='object-fill' />
                 </div>
             </div>
             <div></div>
        </div>
    </div>
  )
}

export default About