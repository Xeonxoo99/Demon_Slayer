// import React, { useRef } from 'react'
// import { gsap } from 'gsap'
// import { useGSAP } from '@gsap/react';
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

// gsap.registerPlugin(ScrollTrigger);
// function Intro1() {
//     const canvasBox = useRef();
//     const images = []

//     useGSAP(()=>{
//         gsap.to(".canvas",{

//         })
//     })

//     return (
//         <section>
//             {/* 이미지 스퀸스 자리 */}
//             <div ref={canvasBox}>
//                 <canvas></canvas>
//             </div>
//         </section>
//     )
// }

// export default Intro1


import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Intro1() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const images = Array.from({ length: 61 }, (_, i) =>
    `/intro1/${i.toString().padStart(4, '0')}.webp`
  );

  useGSAP(() => {
    const totalFrames = images.length;

    gsap.to(imageRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const frameIndex = Math.min(
            totalFrames - 1,
            Math.floor(progress * totalFrames)
          );
          
          // 이미지 소스 변경
          if (imageRef.current) {
            imageRef.current.src = images[frameIndex];
          }

          // 95% 이상에서 페이드아웃
          if (progress >= 0.95) {
            gsap.to(imageRef.current, {
              opacity: 0.8,
              duration: 1,
            });
          } else {
            gsap.to(imageRef.current, {
              opacity: 1,
              duration: 0.1,
            });
          }
        },
      },
    });
  }, []);

  return (
    <section ref={containerRef} style={{ height: '200vh', position: 'relative' }}>
      <img
        ref={imageRef}
        src={images[0]} // 초기 이미지
        alt=""
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          objectFit: 'cover',
          zIndex: 10,
        }}
      />
    </section>
  );
}

export default Intro1;