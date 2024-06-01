import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from './EmblaCarouselArrowButtons'
import '../css/embla.css'
import Img1 from '../../../../../public/about/124044494 1.png'
import Img2 from '../../../../../public/about/1227.png'
import Img3 from '../../../../../public/about/Rectangle 14.png'
import { ChevronRight, Tally1 } from 'lucide-react'

// sliders data
const data1 = [
  {
    img: Img1,
    title: 'лесный дом в Новосибирске',
  },
  {
    img: Img2,
    title: 'Коттедж в Краснодаре',
  },
  {
    img: Img3,
    title: 'Коттедж в Новгороде',
  },
  {
    img: Img1,
    title: 'Коттедж в Новгороде',
  },
  {
    img: Img2,
    title: 'Коттедж в Новгороде',
  },
]

const EmblaCarousel = (props) => {
  const { options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const [scrollProgress, setScrollProgress] = useState(0)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi)

  const onScroll = useCallback((emblaApi) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()))
    setScrollProgress(progress * 100)
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onScroll(emblaApi)
    emblaApi
      .on('reInit', onScroll)
      .on('scroll', onScroll)
      .on('slideFocus', onScroll)
  }, [emblaApi, onScroll])

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {data1.map((item, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <span>
                  <img src={item.img} alt="" />
                </span>
                <p className="absolute font-light cursor-pointer flex gap-5 items-center px-5 py-4 backdrop-blur-xl left-0 bottom-0">
                  <p>{item.title}</p>
                  <div className='text-xl flex items-center'>
                    <span><Tally1 size={30} /></span>
                    <span> <ChevronRight size={30} /></span>
                  </div>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls" style={{ display: 'flex' }}>
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />

        <div className="embla__progress">
          <div
            className="embla__progress__bar"
            style={{ transform: `translate3d(${scrollProgress}%,0px,0px)` }}
          />
        </div>

        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
    </div>
  )
}

export default EmblaCarousel
