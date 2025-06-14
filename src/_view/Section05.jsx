import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react'

const Section05 = () => {
    const containerRef = useRef(null);
    const fullRef = useRef(null);
    
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });
    
    const { scrollYProgress : scrollYProgress2 } = useScroll({
      target: fullRef,
      offset: ["start start", "end end"],
    });

    // 가로스크롤
    const x = useTransform(
        scrollYProgress,
        [0, 1],
        ["0px", "-4338px"] // 6258px - 1920px 
    );

    // 가로스크롤과 상현섹션 중간에 door 효과 추가
    const opacity = useTransform(
      scrollYProgress2 ,
        [0.45, 0.46, 0.6,0.61],
        [0, 1,1,0]
    );

    /*
      door 효과추가
      scrollYProgress2
      [0.45,0.48]
      문1이 나오기
      [0.46,0.49]
      문2가 나오기


      [ 0.59,0.62]
       문2가 사라지기
      [0.6,0.63]
      문1이 사라지기
      

    
    */

    return (
      <>
      
      
      <div className="relative" ref={fullRef}>
          {/* 가로 섹션 */}
          <div ref={containerRef} className="h-[800vh]">
              <div className="sticky top-0 h-screen overflow-hidden">
                  <motion.div 
                      className="flex h-full items-center" 
                      style={{ 
                          x,
                          width: "6258px", // 이미지 실제 너비
                          transformOrigin: "left center" // 왼쪽을 기준으로 변환
                      }}
                  >
                      <div className="h-[100vh] w-[6258px] flex-shrink-0">
                          <div className="w-full h-full relative">
                              <img 
                                  src="/5.jpg" 
                                  alt="배경 이미지" 
                                  className="w-full h-full object-cover"
                              />
                          </div>
                      </div>
                  </motion.div>
              </div>
          </div>

          {/* 상현 섹션 */}
          <div className='relative h-[800vh] bg-black w-full flex flex-col items-center justify-center text-white text-4xl font-bold'>
              {/* 

              ref={containerRef2}
              스크롤 [0.3,0.31]
              
              
              
              */}
          </div>
      </div>

      {/* 파란색 오버레이 */}
        <motion.div 
        className='fixed top-0 left-0 h-screen bg-blue-500 w-full pointer-events-none'
        style={{ opacity }}
        />

      </>
    )
}

export default Section05