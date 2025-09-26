'use client'

import { useRef } from 'react'
import { cardsInfo } from './cards-data'
import ParallaxCards from './parallax-cards'
import { useScroll } from 'motion/react'

const ParallaxCardsMain = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  //just to console the scroll progress
  // useEffect(() => {
  //   scrollYProgress.on("change", e => console.log("Scroll Progress:", e));
  // })

  return (
    <div ref={container} className='mt-[50vh] mb-[100vh]'>
        {
            cardsInfo.map((cards, index) => {
              const targetScale = 1 - ((cardsInfo.length - index) * 0.05);
              return <ParallaxCards key={index} i={index} {...cards} progress={scrollYProgress} range={[index*0.25,1]} targetScale={targetScale} />
            })
        }
    </div>
  )
}

export default ParallaxCardsMain
