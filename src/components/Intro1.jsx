import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
// import { useScroll } from "motion/react"

import text from '../images/intro1/el/메인한자 사각형.png'
import effect from '../images/intro1/el/효과.png'
import fog from '../images/intro1/el/안개.png'

import tanjiro from '../images/intro1/el/탄지로.png'
import Giyuu from '../images/intro1/el/기유.png'
import Shinobu from '../images/intro1/el/탄지로.png'
import Sanemi from '../images/intro1/el/탄지로.png'
import Muichiro from '../images/intro1/el/탄지로.png'
import Obanai from '../images/intro1/el/탄지로.png'
import Mitsuri from '../images/intro1/el/탄지로.png'
import Gyomei from '../images/intro1/el/탄지로.png'


// 마우스 움직임에 따른 캐릭터 움직임 : https://kagrin97-blog.vercel.app/react/Dynamic3DParallax%20Effect
// 참고 사이트 : https://designnas.com/portfolio/bx-site/godofwar/
// 참고 사이트2 : https://designnas.com/

gsap.registerPlugin(ScrollTrigger);

const characters = [
  {
    src: tanjiro,
    alt: 'tanjiro',
    style: 'top-[45%] left-[35%] w-[10%]',
  },
  {
    src: Giyuu,
    alt: 'giyuu',
    style: 'top-[40%] left-[60%] w-[12%]',
  },
  {
    src: Shinobu,
    alt: 'shinobu',
    style: 'top-[55%] left-[50%] w-[11%]',
  },
  {
    src: Sanemi,
    alt: 'sanemi',
    style: 'top-[48%] left-[70%] w-[9%]',
  },
  {
    src: Muichiro,
    alt: 'muichiro',
    style: 'top-[60%] left-[40%] w-[10%]',
  },
  {
    src: Obanai,
    alt: 'obanai',
    style: 'top-[43%] left-[25%] w-[11%]',
  },
  {
    src: Mitsuri,
    alt: 'mitsuri',
    style: 'top-[50%] left-[55%] w-[13%]',
  },
  {
    src: Gyomei,
    alt: 'gyomei',
    style: 'top-[42%] left-[80%] w-[14%]',
  },
];

function Intro1() {
  // bg
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const images = Array.from({ length: 61 }, (_, i) =>
    `/intro1/${i.toString().padStart(4, '0')}.webp`
  );

  // el
  const textRef = useRef(null);
  const effectRef = useRef(null);

  useGSAP(() => {
    const totalFrames = images.length;

    // 배경 이미지
    gsap.to(imageRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 5,
        onUpdate: (self) => {
          const progress = self.progress;
          const frameIndex = Math.min(
            totalFrames - 1,
            Math.floor(progress * totalFrames)
          );

          if (imageRef.current) {
            imageRef.current.src = images[frameIndex];
          }

          gsap.to(imageRef.current, {
            opacity: progress >= 0.95 ? 0.8 : 1,
            duration: 0.2,
          });
        },
      },
    });

  }, []);



  return (
    <section ref={containerRef} style={{ height: '200vh', position: 'relative' }}>

        <motion.img
          src={text}
          alt="text"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="fixed w-full top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-50  h-auto object-contain"
        />


      {/* 
      {characters.map((char, idx) => (
        <motion.img
          key={idx}
          src={char.src}
          alt={char.alt}
          className={`fixed translate-x-[-50%] translate-y-[-50%] z-40 pointer-events-none ${char.style}`}
          initial={{ scale: 1, opacity: 1 }}
        />
      ))}

      <img
        ref={effectRef}
        src={effect}
        alt='effect'
        className='fixed w-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50 pointer-events-none'
        style={{ opacity: 0.1 }}
      /> */}

      <img ref={imageRef} src={images[0]} alt="" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', objectFit: 'cover', zIndex: 10, }} />
    </section>
  );
}

export default Intro1;