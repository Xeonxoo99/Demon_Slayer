import React, { useRef, useEffect, useCallback } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { debounce } from 'lodash';

// 상단 이미지 섹션
import tanjiro from '../images/production/1.png'
import fire from '../images/production/2.png'

import purple from '../images/production/3.png'
import organization from '../images/production/4.png'
import zenitsu from '../images/production/5.png'

import tengen from '../images/production/6.png'
import kyojuro from '../images/production/7.png'
import pillars from '../images/production/8.png'

import akaza from '../images/production/9.png'

// 인트로
import vs from '../images/production/렌고쿠vs아카자.png'

import blackKyojuro from '../images/production/흑백 렌고쿠.png'
import kyojurofr from '../images/production/흑백 렌고쿠 친구.png'

import blackTanjiro from '../images/production/흑백 탄지로.png'

import tji from '../images/production/tanzeni.png'
import blackKyojuro2 from '../images/production/흑백 렌고쿠 2.png'
import blackKyojuro3 from '../images/production/흑백 렌고쿠 3.png'
import blackZenitsu from '../images/production/흑백 젠이츠.png'

function ProductionIntro() {

    // 격자 이미지 부분
    const imageRef = useRef(null);

    const { scrollYProgress: imageProgress } = useScroll({
        target: imageRef,
        offset: ['start end', 'end start'],
    })

    const scrollX1 = useTransform(imageProgress, [0, 1], [0, -300]);
    const scrollY1 = useTransform(imageProgress, [0, 1], [0, -300]);
    const scrollX2 = useTransform(imageProgress, [0, 1], [0, 300]);
    const scrollY2 = useTransform(imageProgress, [0, 1], [0, 300]);
    const scrollX3 = useTransform(imageProgress, [0, 1], [0, -300]);
    const scrollY3 = useTransform(imageProgress, [0, 1], [0, -300]);
    const scrollX4 = useTransform(imageProgress, [0, 1], [0, 300]);
    const scrollY4 = useTransform(imageProgress, [0, 1], [0, 300]);

    // 제작사 소개 ( 이미지 블러 처리 )
    const blurRef = useRef(null)

    const { scrollYProgress: blurProgress } = useScroll({
        target: blurRef,
        offset: ['start end', 'end start'],
    })

    // 1번 문구
    const blur1 = useTransform(blurProgress, [0, 0.4], ['blur(7px)', 'blur(0px)']);
    const blur2 = useTransform(blurProgress, [0, 0.4], ['blur(5px)', 'blur(0px)']);
    const blur3 = useTransform(blurProgress, [0, 0.4], ['blur(6px)', 'blur(0px)']);
    const blur4 = useTransform(blurProgress, [0, 0.4], ['blur(0px)', 'blur(0px)']);
    const blur5 = useTransform(blurProgress, [0, 0.4], ['blur(0px)', 'blur(0px)']);
    const blur6 = useTransform(blurProgress, [0, 0.4], ['blur(0px)', 'blur(0px)']);
    const blur7 = useTransform(blurProgress, [0, 0.4], ['blur(0px)', 'blur(0px)']);
    const blur8 = useTransform(blurProgress, [0, 0.4], ['blur(9px)', 'blur(0px)']);
    const blur9 = useTransform(blurProgress, [0, 0.4], ['blur(6px)', 'blur(0px)']);
    const blur10 = useTransform(blurProgress, [0, 0.4], ['blur(0px)', 'blur(0px)']);
    const blur11 = useTransform(blurProgress, [0, 0.4], ['blur(0px)', 'blur(0px)']);
    const blur12 = useTransform(blurProgress, [0, 0.4], ['blur(0px)', 'blur(0px)']);
    const blur13 = useTransform(blurProgress, [0, 0.4], ['blur(0px)', 'blur(0px)']);
    const blur14 = useTransform(blurProgress, [0, 0.4], ['blur(0px)', 'blur(0px)']);
    const blur15 = useTransform(blurProgress, [0, 0.4], ['blur(8px)', 'blur(0px)']);
    const blur16 = useTransform(blurProgress, [0, 0.4], ['blur(5px)', 'blur(0px)']);
    const blur17 = useTransform(blurProgress, [0, 0.4], ['blur(0px)', 'blur(0px)']);
    const blur18 = useTransform(blurProgress, [0, 0.4], ['blur(0px)', 'blur(0px)']);
    const blur19 = useTransform(blurProgress, [0, 0.4], ['blur(0px)', 'blur(0px)']);
    const blur20 = useTransform(blurProgress, [0, 0.4], ['blur(0px)', 'blur(0px)']);
    const first_blurs1 = [
        blur1, blur2, blur3, blur4, blur5, blur6, blur7, blur8, blur9, blur10,
        blur11, blur12, blur13, blur14, blur15, blur16, blur17, blur18, blur19, blur20,
    ];

    const blur21 = useTransform(blurProgress, [0, 0.4], ['blur(7px)', 'blur(0px)']);
    const blur22 = useTransform(blurProgress, [0, 0.4], ['blur(5px)', 'blur(0px)']);
    const blur23 = useTransform(blurProgress, [0, 0.4], ['blur(6px)', 'blur(0px)']);
    const blur24 = useTransform(blurProgress, [0, 0.4], ['blur(0px)', 'blur(0px)']);

    const first_blurs2 = [blur21, blur22, blur23, blur24];

    // 2번 문구

    const blur25 = useTransform(blurProgress, [0.2, 0.45], ['blur(0px)', 'blur(0px)']);
    const blur26 = useTransform(blurProgress, [0.2, 0.45], ['blur(0px)', 'blur(0px)']);
    const blur27 = useTransform(blurProgress, [0.2, 0.45], ['blur(0px)', 'blur(0px)']);
    const blur28 = useTransform(blurProgress, [0.2, 0.45], ['blur(8px)', 'blur(0px)']);
    const blur29 = useTransform(blurProgress, [0.2, 0.45], ['blur(3px)', 'blur(0px)']);
    const blur30 = useTransform(blurProgress, [0.2, 0.45], ['blur(5px)', 'blur(0px)']);
    const blur31 = useTransform(blurProgress, [0.2, 0.45], ['blur(0px)', 'blur(0px)']);
    const blur32 = useTransform(blurProgress, [0.2, 0.45], ['blur(0px)', 'blur(0px)']);
    const blur33 = useTransform(blurProgress, [0.2, 0.45], ['blur(0px)', 'blur(0px)']);
    const blur34 = useTransform(blurProgress, [0.2, 0.45], ['blur(0px)', 'blur(0px)']);
    const blur35 = useTransform(blurProgress, [0.2, 0.45], ['blur(0px)', 'blur(0px)']);
    const blur36 = useTransform(blurProgress, [0.2, 0.45], ['blur(0px)', 'blur(0px)']);
    const blur37 = useTransform(blurProgress, [0.2, 0.45], ['blur(0px)', 'blur(0px)']);
    const blur38 = useTransform(blurProgress, [0.2, 0.45], ['blur(0px)', 'blur(0px)']);
    const blur39 = useTransform(blurProgress, [0.2, 0.45], ['blur(0px)', 'blur(0px)']);
    const blur40 = useTransform(blurProgress, [0.2, 0.45], ['blur(0px)', 'blur(0px)']);
    const blur41 = useTransform(blurProgress, [0.2, 0.45], ['blur(5px)', 'blur(0px)']);
    const blur42 = useTransform(blurProgress, [0.2, 0.45], ['blur(7px)', 'blur(0px)']);
    const blur43 = useTransform(blurProgress, [0.2, 0.45], ['blur(8px)', 'blur(0px)']);
    const blur44 = useTransform(blurProgress, [0.2, 0.45], ['blur(3px)', 'blur(0px)']);
    const blur45 = useTransform(blurProgress, [0.2, 0.45], ['blur(6px)', 'blur(0px)']);
    const second_blurs1 = [blur25, blur26, blur27, blur28, blur29, blur30, blur31, blur32, blur33, blur34, blur35, blur36, blur37, blur38, blur39, blur40, blur41, blur42, blur43, blur44, blur45];

    const blur46 = useTransform(blurProgress, [0.2, 0.45], ['blur(4px)', 'blur(0px)']);
    const blur47 = useTransform(blurProgress, [0.2, 0.45], ['blur(7px)', 'blur(0px)']);
    const blur48 = useTransform(blurProgress, [0.2, 0.45], ['blur(0px)', 'blur(0px)']);
    const blur49 = useTransform(blurProgress, [0.2, 0.45], ['blur(0px)', 'blur(0px)']);
    const blur50 = useTransform(blurProgress, [0.2, 0.45], ['blur(0px)', 'blur(0px)']);
    const blur51 = useTransform(blurProgress, [0.2, 0.45], ['blur(0px)', 'blur(0px)']);
    const blur52 = useTransform(blurProgress, [0.2, 0.45], ['blur(0px)', 'blur(0px)']);
    const blur53 = useTransform(blurProgress, [0.2, 0.45], ['blur(9px)', 'blur(0px)']);
    const blur54 = useTransform(blurProgress, [0.2, 0.45], ['blur(7px)', 'blur(0px)']);
    const blur55 = useTransform(blurProgress, [0.2, 0.45], ['blur(0px)', 'blur(0px)']);
    const second_blurs2 = [blur46, blur47, blur48, blur49, blur50, blur51, blur52, blur53, blur54, blur55];

    // 3번 문구

    const blur56 = useTransform(blurProgress, [0.3, 0.5], ['blur(0px)', 'blur(0px)']);
    const blur57 = useTransform(blurProgress, [0.3, 0.5], ['blur(0px)', 'blur(0px)']);
    const blur58 = useTransform(blurProgress, [0.3, 0.5], ['blur(0px)', 'blur(0px)']);
    const blur59 = useTransform(blurProgress, [0.3, 0.5], ['blur(0px)', 'blur(0px)']);
    const blur60 = useTransform(blurProgress, [0.3, 0.5], ['blur(0px)', 'blur(0px)']);
    const blur61 = useTransform(blurProgress, [0.3, 0.5], ['blur(0px)', 'blur(0px)']);
    const blur62 = useTransform(blurProgress, [0.3, 0.5], ['blur(9px)', 'blur(0px)']);
    const blur63 = useTransform(blurProgress, [0.3, 0.5], ['blur(7px)', 'blur(0px)']);
    const blur64 = useTransform(blurProgress, [0.3, 0.5], ['blur(0px)', 'blur(0px)']);
    const blur65 = useTransform(blurProgress, [0.3, 0.5], ['blur(0px)', 'blur(0px)']);
    const blur66 = useTransform(blurProgress, [0.3, 0.5], ['blur(0px)', 'blur(0px)']);
    const blur67 = useTransform(blurProgress, [0.3, 0.5], ['blur(0px)', 'blur(0px)']);
    const blur68 = useTransform(blurProgress, [0.3, 0.5], ['blur(0px)', 'blur(0px)']);
    const blur69 = useTransform(blurProgress, [0.3, 0.5], ['blur(0px)', 'blur(0px)']);
    const blur70 = useTransform(blurProgress, [0.3, 0.5], ['blur(0px)', 'blur(0px)']);
    const blur71 = useTransform(blurProgress, [0.3, 0.5], ['blur(0px)', 'blur(0px)']);
    const blur72 = useTransform(blurProgress, [0.3, 0.5], ['blur(0px)', 'blur(0px)']);
    const blur73 = useTransform(blurProgress, [0.3, 0.5], ['blur(12px)', 'blur(0px)']);
    const blur74 = useTransform(blurProgress, [0.3, 0.5], ['blur(7px)', 'blur(0px)']);
    const blur75 = useTransform(blurProgress, [0.3, 0.5], ['blur(0px)', 'blur(0px)']);

    const third_blurs1 = [
        blur56, blur57, blur58, blur59, blur60,
        blur61, blur62, blur63, blur64, blur65,
        blur66, blur67, blur68, blur69, blur70,
        blur71, blur72, blur73, blur74, blur75
    ];

    const blur76 = useTransform(blurProgress, [0.3, 0.5], ['blur(7px)', 'blur(0px)']);
    const blur77 = useTransform(blurProgress, [0.3, 0.5], ['blur(6px)', 'blur(0px)']);
    const blur78 = useTransform(blurProgress, [0.3, 0.5], ['blur(12px)', 'blur(0px)']);
    const blur79 = useTransform(blurProgress, [0.3, 0.5], ['blur(0px)', 'blur(0px)']);
    const blur80 = useTransform(blurProgress, [0.3, 0.5], ['blur(0px)', 'blur(0px)']);
    const blur81 = useTransform(blurProgress, [0.3, 0.5], ['blur(0px)', 'blur(0px)']);
    const blur82 = useTransform(blurProgress, [0.3, 0.5], ['blur(0px)', 'blur(0px)']);
    const blur83 = useTransform(blurProgress, [0.3, 0.5], ['blur(0px)', 'blur(0px)']);
    const third_blurs2 = [blur76, blur77, blur78, blur79, blur80, blur81, blur82, blur83,];

    const generateBlurh1 = (text, blurStyles) => {
        return text.split('').map((char, i) => {
            if (char === ' ') {
                return <span key={i} style={{ display: 'inline-block', width: '15px' }}>{char}</span>;
            }

            return (
                <motion.h1
                    key={i}
                    style={{ filter: blurStyles[i], display: 'inline-block' }}
                    className="inline-block"
                >
                    {char}
                </motion.h1>
            );
        });
    };
    // 원작자 소개



    // 텍스트를 글자 단위로 분리하고 색상 제어
    const SplitText = ({ children, className }) => {
        return (
            <span className={className}>
                {children.split('').map((char, index) => (
                    <span
                        key={index}
                        style={{ display: 'inline-block', color: '#ffffff' }}
                    >
                        {char === ' ' ? <span style={{ width: '8px' }}>&nbsp;</span> : char}
                    </span>
                ))}
            </span>
        );
    };
    useEffect(() => {
        console.log('Blur div mounted');
    }, []);


    return (
        <section
            className="relative w-full h-[11305px] bg-[#000000]"
            style={{ zIndex: 30, fontFamily: 'Pretendard-Regular' }}
        >
            <div
  style={{
    alignItems: 'center',
    display: 'flex',
    flex: 'none',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    gap: '10px',
    height: '100vh',
    justifyContent: 'flex-end',
    left: 0, // 간소화
    top: 0, // 간소화
    overflow: 'hidden',
    padding: 0,
    pointerEvents: 'none',
    position: 'fixed',
    width: '100vw', // 명시적 설정
    zIndex: 7,
  }}
>
  <div
    style={{
      flex: 'none',
      height: '194px',
      position: 'relative',
      width: '100%',
      zIndex: 9,
    }}
  >
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        borderRadius: '12px',
      }}
    >
      {/* 기존 블러 div 대체 및 다층 블러 효과 추가 */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          backdropFilter: 'blur(0.5625px)',
          WebkitBackdropFilter: 'blur(0.5625px)',
          maskImage:
            'linear-gradient(to bottom, rgba(0, 0, 0, 0) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 0) 50%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, rgba(0, 0, 0, 0) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 0) 50%)',
          borderRadius: '12px',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 3,
          backdropFilter: 'blur(1.125px)',
          WebkitBackdropFilter: 'blur(1.125px)',
          maskImage:
            'linear-gradient(to bottom, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 62.5%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 62.5%)',
          borderRadius: '12px',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 4,
          backdropFilter: 'blur(2.25px)',
          WebkitBackdropFilter: 'blur(2.25px)',
          maskImage:
            'linear-gradient(to bottom, rgba(0, 0, 0, 0) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 0) 75%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, rgba(0, 0, 0, 0) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 0) 75%)',
          borderRadius: '12px',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 5,
          backdropFilter: 'blur(4.5px)',
          WebkitBackdropFilter: 'blur(4.5px)',
          maskImage:
            'linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 87.5%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 87.5%)',
          borderRadius: '12px',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 6,
          backdropFilter: 'blur(9px)',
          WebkitBackdropFilter: 'blur(9px)',
          maskImage:
            'linear-gradient(to bottom, rgba(0, 0, 0, 0) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, rgba(0, 0, 0, 0) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%)',
          borderRadius: '12px',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 7,
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          maskImage:
            'linear-gradient(to bottom, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 1) 100%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 1) 100%)',
          borderRadius: '12px',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 8,
          backdropFilter: 'blur(36px)',
          WebkitBackdropFilter: 'blur(36px)',
          maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 87.5%, rgba(0, 0, 0, 1) 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 87.5%, rgba(0, 0, 0, 1) 100%)',
          borderRadius: '12px',
          pointerEvents: 'none',
        }}
      />
    </div>
  </div>
</div>


            {/* 격자 이미지 */}
            <div className='relative w-full py-[200px]' >
                <div className='relative w-full h-[930px] overflow-hidden' ref={imageRef}>
                    <motion.div
                        className="absolute top-[-313px] left-[1000px] w-[1860px] h-auto flex gap-[78px]"
                        style={{
                            x: scrollX1,
                            y: scrollY1,
                            rotate: 45,
                        }}
                    >
                        <img src={tanjiro} alt="tanjiro" />
                        <img src={fire} alt="fire" />
                    </motion.div>
                    <motion.div className='absolute top-[-477px] left-[-210px] w-[1860px] h-auto flex gap-[78px] rotate-45'
                        style={{
                            x: scrollX2,
                            y: scrollY2,
                            rotate: 45,
                        }}
                    >
                        <img src={purple} alt="purple" />
                        <img src={organization} alt="organization" />
                        <img src={zenitsu} alt="zenitsu" />
                    </motion.div>

                    <motion.div className='absolute top-[-13px] left-[-800px] w-[1860px] h-auto flex gap-[78px] rotate-45'
                        style={{
                            x: scrollX3,
                            y: scrollY3,
                            rotate: 45,
                        }}
                    >
                        <img src={tengen} alt="tengen" />
                        <img src={kyojuro} alt="kyojuro" />
                        <img src={pillars} alt="pillars" />
                    </motion.div>
                    <motion.div className='absolute top-[900px] left-[-950px] w-[1860px] h-auto flex gap-[78px] rotate-45'
                        style={{
                            x: scrollX4,
                            y: scrollY4,
                            rotate: 45,
                        }}
                    >
                        <img src={akaza} alt="akaza" />
                    </motion.div>
                </div>
            </div>

            {/* 제작사 소개 */}
            <div className='px-[40px]'>
                <div className='w-full h-[1218px] relative text-[#ffffff]'>
                    <div className='text-[96px] leading-[96px] flex'><h1 className='text-[#eb181f] mr-2' style={{ fontFamily: 'VELISTA', lineHeight: '102px' }}>UFOTABLE</h1><h1>DECIDED TO PRODUCE</h1></div>
                    <div className='text-[96px] leading-[96px] absolute left-[973px]'><h1>KIMETSU NO YAIBA </h1></div>
                    <img src={vs} alt="vs" className='absolute top-[110px]' />
                    <div className="absolute top-[749px] w-[1898px] h-[1px] bg-gradient-to-r from-white/30 to-black"></div>
                    <div className='absolute w-[640px] h-[181px] top-[780px] left-[1012px]  flex flex-col '>
                        <div className='mb-[23px] text-[16px] leading-[25px]'>
                            <span className="block text-white">
                                유포테이블(ufotable)은 단순한 애니메이션 스튜디오가 아니라, 완벽한 퀄리티와 독창적인
                            </span>
                            <div className='flex gap-1'>
                                <span className="block text-white">
                                    연출을 목표로 하는 제작 집단이다.
                                </span>
                                <span className="block text-[#696969]">
                                    창립자 콘도 히카루(近藤 光)는 "우리가 만드는 애니메이션은
                                </span>
                            </div>

                            <span className="block text-[#696969]">
                                시간이 지나도 사람들의 기억에 남아야 한다"는 신념을 가지고, 극장판 수준의 작화와 연출을 TV
                            </span>
                            <span className="block text-[#696969]">
                                애니메이션에서도 유지하는 것을 철칙으로 삼았다.
                            </span>
                        </div>
                        <div><span className='text-[#696969]'>유포테이블의 가장 큰 특징은 모든 작품에서 극장판 수준의 퀄리티를 유지하는 것이다. TV 애니메이션도
                            영화처럼 제작하며, 한 장면 한 장면을 세밀하게 완성세부적인 조명 효과, 배경 디테일,CG와 2D의 조화를
                            중요시하여 "작품 하나하나가 예술이어야 한다"는 철학을 ‘귀멸의 칼날’에도 반영했다.</span></div>
                    </div>
                </div>


                <div className='w-full h-[1339px] relative text-[#ffffff]'>
                    <div className='text-[96px] leading-[96px] flex'><h1>UFOTABLE, A </h1><h1 className='text-[#eb181f] mx-2' style={{ fontFamily: 'VELISTA', lineHeight: '102px' }}>TOP-TIER</h1><h1>STUDIO</h1></div>
                    <div className='text-[96px] leading-[96px] flex'><h1 className='text-[#eb181f] mr-2 ml-1' style={{ fontFamily: 'VELISTA', lineHeight: '102px' }}>PROMISING</h1><h1>EXCEPTIONAL WORKS!</h1></div>
                    <img src={blackKyojuro} alt="blackKyojuro" className='absolute top-[258px] left-[76px] z-10' />
                    <img src={kyojurofr} alt="kyojurofr" className='absolute top-[341px] left-[477px]' />
                    <div className='absolute top-[250px] left-[920px] flex flex-col'>
                        <div className='mb-[23px] text-[16px] leading-[25px]'>
                            <div className="text-base leading-relaxed">
                                <span className="block text-white">
                                    유포테이블(ufotable)은 단순한 애니메이션 스튜디오가 아니라, 완벽한 퀄리티와 독창적인
                                </span>
                                <div className='flex gap-1'>
                                    <span className="block text-white">
                                        연출을 목표로 하는 제작 집단이다.
                                    </span>
                                    <span className="block text-[#696969]">
                                        창립자 콘도 히카루(近藤 光)는 "우리가 만드는 애니메이션은
                                    </span>
                                </div>

                                <span className="block text-[#696969]">
                                    시간이 지나도 사람들의 기억에 남아야 한다"는 신념을 가지고, 극장판 수준의 작화와 연출을 TV
                                </span>
                                <span className="block text-[#696969]">
                                    애니메이션에서도 유지하는 것을 철칙으로 삼았다.
                                </span>
                            </div>

                        </div>
                    </div>

                    {/* 블러처리 구간 */}
                    <div className='flex flex-col absolute top-[500px] left-[920px] text-[50px] leading-[50px]' ref={blurRef}>
                        <div className=''>
                            <span className='text-[14px] text-[#eb181f]' style={{ fontFamily: 'VELISTA' }}>01</span>
                            <h1>{generateBlurh1(`"타협 없는 퀄리티" - 극장판 수준의`, first_blurs1)} </h1>
                            <h1>{generateBlurh1('작화 유지', first_blurs2)}</h1>

                        </div>
                        <div className="w-[942px] h-[1px] mt-[40px] ml-[6px] bg-gradient-to-r from-white/40 to-black"></div>
                        <div className=''>
                            <span className='text-[14px] text-[#eb181f]' style={{ fontFamily: 'VELISTA' }}>02</span>
                            <h1>{generateBlurh1(`"자체 제작 시스템" - 외주 최소화,`, second_blurs1)}</h1>
                            <h1>{generateBlurh1(`내부 완성도 극대화`, second_blurs2)}</h1>
                        </div>
                        <div className="w-[942px] h-[1px] mt-[40px] ml-[6px] bg-gradient-to-r from-white/40 to-black"></div>
                        <div className=''>
                            <span className='text-[14px] text-[#eb181f]' style={{ fontFamily: 'VELISTA' }}>03</span>
                            <h1>{generateBlurh1(`"스토리와 감정 전달" - 액션뿐만`, third_blurs1)} </h1>
                            <h1>{generateBlurh1(`아니라 감동까지`, third_blurs2)}</h1>
                        </div>
                        <div className="w-[942px] h-[1px] mt-[40px] ml-[6px] bg-gradient-to-r from-white/40 to-black"></div>
                    </div>
                </div>

                {/* 원작자 소개 */}
                <div className="h-[96px] leading-[96px]" style={{ fontFamily: 'myriad-pro' }}>
                    <h1 className="text-[96px] text-[#eb181f]" style={{ fontFamily: 'VELISTA' }}>
                        KIMETSU NO YAIBA
                    </h1>
                </div>
                <div className="relative w-full h-[3600px]">
                    <motion.div
                        className="w-full h-[409px] sticky top-2"
                    >
                        <div className="w-[2256px] h-[320px] leading-[320px] ">
                            <svg
                                viewBox="0 0 2254.53 306.25">
                                <g fill="#FFFFFF">
                                    <path d="M105.94,242.19C45.62,242.19,0,199.38,0,125.94C0,52.19,45.62,9.69,105.94,9.69
		c59.69,0,105.62,42.5,105.62,116.25S165.62,242.19,105.94,242.19z M105.94,51.25c-35,0-58.12,26.25-58.12,74.69
		s23.12,74.69,58.12,74.69s57.81-26.25,57.81-74.69S140.94,51.25,105.94,51.25z"/>
                                    <path d="M236.38,69.38h44.69v29.38h1.88c6.25-20.94,21.88-31.88,40.94-31.88c4.69,0,10.62,0.62,14.69,1.56v41.25
		c-4.38-1.25-13.12-2.5-19.69-2.5c-20.94,0-36.25,14.69-36.25,35.31v96.56h-46.25V69.38z"/>
                                    <path d="M350.88,23.75C350.88,10.62,362.12,0,376.19,0c13.75,0,25,10.62,25,23.75c0,12.81-11.25,23.44-25,23.44
		C362.12,47.19,350.88,36.56,350.88,23.75z M353.06,69.38h46.25v169.69h-46.25V69.38z"/>
                                    <path d="M425.06,253.12h45.62c2.5,13.44,15.31,19.69,33.75,19.69c21.56,0,35.94-9.06,35.94-32.81v-30.94h-2.19
		c-6.25,13.75-21.25,27.5-48.44,27.5c-38.44,0-69.06-26.88-69.06-83.44c0-57.5,31.56-85.94,69.06-85.94
		c28.44,0,42.19,16.88,48.44,30.62h1.88V69.38H586v171.56c0,43.12-34.38,65.31-82.5,65.31
		C456.62,306.25,427.88,285.31,425.06,253.12z M540.38,153.75c0-30.31-13.12-49.69-36.25-49.69c-23.44,0-35.94,20.31-35.94,49.69
		s12.5,48.12,35.94,48.12C527.25,201.88,540.38,183.75,540.38,153.75z"/>
                                    <path d="M611.75,23.75C611.75,10.62,623,0,637.06,0c13.75,0,25,10.62,25,23.75c0,12.81-11.25,23.44-25,23.44
		C623,47.19,611.75,36.56,611.75,23.75z M613.94,69.38h46.25v169.69h-46.25V69.38z"/>
                                    <path d="M734.38,239.06h-46.25V69.38h44.06v29.69h1.88C741.88,79.38,760,67.19,785,67.19
		c35.31,0,58.75,24.06,58.44,63.75v108.12H797.5v-100c0-20.94-11.56-33.44-30.62-33.44c-19.38,0-32.5,12.81-32.5,35.31V239.06z"/>
                                    <path d="M926.38,139.38c12.19-0.78,35-1.88,42.19-2.19v-13.75c-0.31-14.06-10-22.5-27.19-22.5
		c-15.62,0-25.62,7.19-28.12,18.75h-44.06c2.81-29.38,28.44-52.5,73.44-52.5c36.88,0,71.88,16.56,71.88,57.5v114.38h-43.75v-23.44
		h-1.25c-8.44,15.62-24.38,26.56-49.69,26.56c-32.5,0-56.56-16.88-56.56-50.62C863.25,153.75,893.88,141.25,926.38,139.38z
		 M932.94,210.31c20.94,0,35.94-14.06,35.62-31.88v-12.5c-7.03,0.31-26.72,1.41-34.69,2.19c-15.94,1.56-26.25,9.06-26.25,22.19
		S918.25,210.31,932.94,210.31z"/>
                                    <path d="M1088.06,239.06h-46.25V12.81h46.25V239.06z" />
                                    <path d="M1284.56,51.25c-35.31,0-58.44,27.19-58.44,74.69c0,48.75,23.44,74.69,58.12,74.69
		c25.94,0,45-14.38,49.69-38.75l47.5,0.31c-5.31,41.88-40.31,80-97.81,80c-60.62,0-105.31-42.5-105.31-116.25
		S1223.94,9.69,1283.62,9.69c52.19,0,91.56,30,97.81,81.88h-47.5C1330.19,66.56,1310.81,51.25,1284.56,51.25z"/>
                                    <path d="M1405.31,69.38H1450v29.38h1.88c6.25-20.94,21.88-31.88,40.94-31.88c4.69,0,10.62,0.62,14.69,1.56v41.25
		c-4.38-1.25-13.12-2.5-19.69-2.5c-20.94,0-36.25,14.69-36.25,35.31v96.56h-46.25V69.38z"/>
                                    <path d="M1509.81,155c0-52.5,32.19-87.81,81.88-87.81c44.69,0,79.69,28.12,79.69,85.94v13.12h-115.94
		c0,25.62,15.31,41.56,39.06,41.56c15.62,0,26.88-6.88,31.56-17.19h44.06c-6.56,31.25-34.69,51.88-76.56,51.88
		C1541.69,242.5,1509.81,208.75,1509.81,155z M1627.62,137.19c0-20.62-14.38-35.31-35-35.31c-21.25,0-36.41,15.78-37.19,35.31
		H1627.62z"/>
                                    <path d="M1747.44,139.38c12.19-0.78,35-1.88,42.19-2.19v-13.75c-0.31-14.06-10-22.5-27.19-22.5
		c-15.62,0-25.62,7.19-28.12,18.75h-44.06c2.81-29.38,28.44-52.5,73.44-52.5c36.88,0,71.88,16.56,71.88,57.5v114.38h-43.75v-23.44
		h-1.25c-8.44,15.62-24.38,26.56-49.69,26.56c-32.5,0-56.56-16.88-56.56-50.62C1684.31,153.75,1714.94,141.25,1747.44,139.38z
		 M1754,210.31c20.94,0,35.94-14.06,35.62-31.88v-12.5c-7.03,0.31-26.72,1.41-34.69,2.19c-15.94,1.56-26.25,9.06-26.25,22.19
		S1739.31,210.31,1754,210.31z"/>
                                    <path d="M1952.25,104.06h-31.88v82.81c0,13.44,6.56,16.88,15.94,17.19c4.69,0,12.81-0.31,18.44-0.94v36.56
		c-5,0.94-13.12,1.56-24.69,1.56c-33.44,0-56.25-15-55.94-47.81v-89.38h-23.44V69.38h23.44V28.75h46.25v40.62h31.88V104.06z"/>
                                    <path d="M1964.72,154.69c0-52.5,31.88-87.5,83.12-87.5s83.44,35,83.44,87.5s-32.19,87.81-83.44,87.81
		S1964.72,207.19,1964.72,154.69z M2084.09,154.69c0-30-12.19-52.19-35.94-52.19c-24.06,0-36.56,22.19-36.56,52.19
		c0,29.69,12.5,51.88,36.56,51.88C2071.91,206.56,2084.09,184.38,2084.09,154.69z"/>
                                    <path d="M2152.34,69.38h44.69v29.38h1.88c6.25-20.94,21.88-31.88,40.94-31.88c4.69,0,10.62,0.62,14.69,1.56v41.25
		c-4.38-1.25-13.12-2.5-19.69-2.5c-20.94,0-36.25,14.69-36.25,35.31v96.56h-46.25V69.38z"/>
                                </g>
                            </svg>
                        </div>
                        <div className="text-[20px] leading-[20px] whitespace-nowrap flex absolute top-[270px] text-[#ffffff]">
                            <span className="mr-[245px]">Story Planning</span>
                            <span className="mr-[258px]">Character</span>
                            <span className="mr-[249px]">WorldBuilding</span>
                            <span className="mr-[272px]">Story Board</span>
                            <span className="mr-[292px]">Direction</span>
                            <span className="mr-[245px]">Collaboration</span>
                        </div>
                    </motion.div>

                    <div className="w-full h-[3127px] relative">
                        <div className="w-full h-auto absolute">
                            <img
                                src={blackTanjiro}
                                alt="blackTanjiro"
                                className="absolute top-[90px] left-1/2 -translate-x-1/2"
                            />
                            <span
                                className="absolute top-[945px] left-[368px] text-[#eb181f] text-[20px]"
                                style={{ fontFamily: 'VELISTA' }}
                            >
                                MESSAGE
                            </span>
                            <div className="w-[443px] h-auto absolute top-[945px] left-[736px] mix-blend-difference">
                                <div className="text-[38px] mb-[76px]">
                                    <h1>
                                        <SplitText>인간의 강인함과</SplitText>
                                        <br />
                                        <SplitText>가족의 소중함</SplitText>
                                    </h1>
                                </div>
                                <div className="flex flex-col gap-9">
                                    <SplitText>
                                        고토게 코요하루(吾峠呼世晴) 작가는 '귀멸의 칼날'을 통해 인간의 강인함과 가족의 소중함을
                                        전하고자 했습니다. 작품 속에서 주인공 탄지로는 가족을 잃은 슬픔 속에서도 희망을 잃지 않고,
                                        동료들과 함께 역경을 극복해 나갑니다. 이를 통해 작가는 희망, 용기, 연대의 중요성을
                                        강조하고 있습니다.
                                    </SplitText>
                                    <SplitText>
                                        또한, 고토게 코요하루는 인간의 감정과 관계를 깊이 있게 묘사하는 것을 중요하게 생각하며, 이를
                                        통해 독자들에게 감동을 전하려 노력합니다. 이러한 신념은 '귀멸의 칼날'의 섬세한 캐릭터 설정과
                                        스토리 전개에 잘 드러나 있습니다. 작품의 배경 스토리는 일본 다이쇼 시대를 기반으로 하여,
                                        전통적인 일본 문화와 미신, 그리고 인간의 내면을 탐구하는 요소들이 결합되어 있습니다. 이를
                                        통해 작가는 시대적 배경과 인간 본성에 대한 깊이 있는 이야기를 전달하고자 했습니다.
                                    </SplitText>
                                </div>
                            </div>
                        </div>

                        <div className="w-full h-auto absolute">
                            <span
                                className="absolute top-[1631px] left-[736px] text-[#eb181f] text-[20px]"
                                style={{ fontFamily: 'VELISTA' }}
                            >
                                PAIN POINT
                            </span>
                            <div className="w-[443px] h-auto absolute top-[1631px] left-[1104px] mix-blend-difference">
                                <div className="text-[38px] mb-[76px]">
                                    <h1>
                                        <SplitText>캐릭터의 개성과</SplitText>
                                        <br />
                                        <SplitText>감정표현, 액션 연출</SplitText>
                                    </h1>
                                </div>
                                <div className="flex flex-col gap-9">
                                    <SplitText>
                                        귀멸의 칼날은 주인공 일행과 주, 상현 등 많은 캐릭터가 등장하는 만큼, 각 인물의 개성을
                                        살리면서 감정을 섬세하게 표현하는 것이 매우 중요했다. 주인공뿐만 아니라 조연 캐릭터들도
                                        입체적으로 그리기 위해 각자의 과거와 성격을 깊이 고민하며 설정하려고 노력했다.
                                    </SplitText>
                                    <SplitText>
                                        또한 몰입감을 높이기 위해 다양한 검술과 호흡 기술을 효과적으로 표현했고, 빠른 전투 장면을
                                        통해 이것을 극대화시키는 것이 큰 도전이었다. 전투의 흐름을 이해하기 쉽게 하면서도 박진감을
                                        유지하기 위해 많은 수많은 실패와 연구, 수정을 거듭했다.
                                    </SplitText>
                                </div>
                            </div>
                        </div>

                        <div className="w-full h-auto absolute">
                            <span
                                className="absolute top-[2216px] left-0 text-[#eb181f] text-[20px]"
                                style={{ fontFamily: 'VELISTA' }}
                            >
                                PAIN POINT
                            </span>
                            <div className="w-[443px] h-auto absolute top-[2216px] left-[368px] mix-blend-difference">
                                <div className="text-[38px] mb-[76px]">
                                    <h1>
                                        <SplitText>인간의 강인함과</SplitText>
                                        <br />
                                        <SplitText>가족의 소중함</SplitText>
                                    </h1>
                                </div>
                                <div className="flex flex-col gap-9 ">
                                    <SplitText>
                                        작가는 독자들의 긍정적인 반응과 작품의 인기를 통해 큰 보람과 희열을 느꼈습니다. 특히,
                                        애니메이션화 이후 작품이 전 세계적으로 사랑받으며, 작가로서의 성취감을 크게 느꼈으며,
                                        작가로서의 성장에서 오는 보람과 독자들과의 소통을 통해 많은 기쁨을 느꼈을 것입니다.
                                    </SplitText>
                                </div>
                            </div>
                        </div>

                        <div className="w-full h-auto absolute">
                            <span
                                className="absolute top-[2690px] left-[736px] text-[#eb181f] text-[20px]"
                                style={{ fontFamily: 'VELISTA' }}
                            >
                                THANKS TO
                            </span>
                            <div className="w-[443px] h-auto absolute top-[2690px] left-[1104px] mix-blend-difference">
                                <div className="flex flex-col gap-9">
                                    <SplitText>
                                        처음 만화를 그리기 시작했을 때는 이렇게 많은 분들이 제 작품을 사랑해 주실 거라고는 상상도 못
                                        했습니다. 항상 귀멸의 칼날을 읽어 주시고, 캐릭터들과 함께 울고 웃어 주신 모든 분들께 진심으로
                                        감사드립니다.
                                    </SplitText>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Production */}
                    <div className='w-full h-[3703px] relative'>
                        <div className='w-full absolute text-[#ffffff]'>
                            <h1 className='text-[153px] absolute top-[0px] font-bold leading-[153px] z-10'>Production <br /> Crew</h1>
                            <img src={tji} alt="tji" className='absolute top-[218px] left-[233px]' />
                            <img src={blackKyojuro2} alt="tji" className='absolute top-[874px] left-[982px]' />
                            <img src={blackKyojuro3} alt="tji" className='absolute top-[1554px] -left-[198px]' />
                            <img src={blackZenitsu} alt="tji" className='absolute top-[2327px] left-[171px]' />
                        </div>

                        <div className='w-full absolute text-[#ffffff]'>
                            <span className='absolute top-[31px] left-[1104px] text-[#eb181f] text-[20px]' style={{ fontFamily: 'VELISTA' }}>Producer</span>
                            <div className='absolute top-[31px] left-[1472px] flex flex-col leading-6'>
                                <span>후지오 아키후미</span>
                                <span>콘도 히카루</span>
                                <span>무라카미 마아사</span>
                                <span>미야케 마사노리</span>
                                <span>타카노 타카시</span>
                                <span>타카하시 유마</span>
                            </div>
                        </div>

                        <div className='w-full absolute text-[#ffffff]'>
                            <span className='absolute top-[268px] left-[1104px] text-[#eb181f] text-[20px]' style={{ fontFamily: 'VELISTA' }}>Director</span>
                            <div className='absolute top-[268px] left-[1472px] flex flex-col leading-6'>
                                <span>소토자키 하루오</span>
                                <span>호소카와 히데키</span>
                                <span>우다 아키히코</span>
                                <span>나카자와 켄</span>
                                <span>스하라 타카시</span>
                                <span>타케우치 마사루</span>
                                <span>고미 신스케</span>
                                <span>시모무라 신야</span>
                                <span>미야하라 슈지</span>
                                <span>마메즈카 타카시</span>
                                <span>노나카 타쿠야</span>
                                <span>시라이 토시유키</span>
                                <span>테라오 유이치</span>
                                <span>시미즈 유지</span>
                                <span>이토 유키</span>
                                <span>시바타 유스케</span>
                                <span>하라다 세이지</span>
                                <span>츠네마츠 케이</span>
                                <span>마지마 타카히로</span>
                                <span>타카하시 타쿠로</span>
                            </div>
                        </div>

                        <div className='w-full absolute text-[#ffffff]'>
                            <span className='absolute top-[776px] left-[368px] text-[#eb181f] text-[20px]' style={{ fontFamily: 'VELISTA' }}>Editor</span>
                            <div className='absolute top-[776px] left-[736px] flex flex-col leading-6'>
                                <span>카미노 마나부</span>
                                <span>타카하시 유리</span>
                            </div>
                        </div>

                        <div className='w-full absolute text-[#ffffff]'>
                            <span className='absolute top-[946px] left-[368px] text-[#eb181f] text-[20px]' style={{ fontFamily: 'VELISTA' }}>Music</span>
                            <div className='absolute top-[946px] left-[736px] flex flex-col leading-6'>
                                <span>카지우라 유키</span>
                                <span>시이나 고</span>
                                <span>쿠사노 카요코</span>
                                <span>나카가와 나미</span>
                                <span>아카자와 유지</span>
                                <span>오카베 나오키</span>
                                <span>나야 료스케</span>
                                <span>LiSA</span>
                                <span>Aimer</span>
                                <span>milet</span>
                                <span>타나카 토쿄</span>
                            </div>
                        </div>

                        <div className='w-full absolute text-[#ffffff]'>
                            <span className='absolute top-[2107px] left-[736px] text-[#eb181f] text-[20px]' style={{ fontFamily: 'VELISTA' }}>Visual Effects</span>
                            <div className='absolute top-[2107px] left-[1104px] flex flex-col leading-6'>
                                <span>테뽀즈카 다이키</span>
                                <span>아다치 하나카</span>
                                <span>이와타 소이치로</span>
                                <span>노다이라 유키토시</span>
                                <span>오카베 아카네</span>
                                <span>타나카 아츠시</span>
                                <span>하시모토 아츠토시</span>
                                <span>세키네 치나미</span>
                                <span>고즈 하루나</span>
                                <span>카키우치 이쿠미</span>
                                <span>마츠시마 카오리</span>
                                <span>후지모토 마유</span>
                                <span>오가타 미에코</span>
                                <span>기쿠치 미카</span>
                                <span>호소카와 히데키</span>
                                <span>시모무라 신야</span>
                                <span>미야하라 슈지</span>
                                <span>마메즈카 타카시</span>
                                <span>타카하시 타쿠로</span>
                                <span>노나카 타쿠야</span>
                                <span>시라이 토시유키</span>
                                <span>테라오 유이치</span>
                                <span>시미즈 유지</span>
                                <span>이토 유키</span>
                                <span>시바타 유스케</span>
                                <span>하라다 세이지</span>
                                <span>츠네마츠 케이</span>
                                <span>마지마 타카히로</span>
                            </div>
                        </div>



                        <div className='w-full absolute text-[#ffffff]'>
                            <h1 className='text-[152.9px] font-bold absolute top-[3240px] left-[1001px]'>Thanks to</h1>
                            <h1 className='text-[152.9px] font-bold absolute top-[3394px] left-[1097px] whitespace-nowrap'>all readers.</h1>
                        </div>
                    </div>
                    {/* 고정 */}
                    <div className="absolute top-[00px] left-[368px] w-[0.5px] h-[7000px] bg-gradient-to-b from-[#ffffff]/20 to-[#000000]"></div>
                    <div className="absolute top-[00px] left-[736px] w-[0.5px] h-[7000px] bg-gradient-to-b from-[#ffffff]/20 to-[#000000]"></div>
                    <div className="absolute top-[00px] left-[1103px] w-[0.5px] h-[7000px] bg-gradient-to-b from-[#ffffff]/20 to-[#000000]"></div>
                    <div className="absolute top-[00px] left-[1472px] w-[0.5px] h-[7000px] bg-gradient-to-b from-[#ffffff]/20 to-[#000000]"></div>

                    {/* 위에서 아래로 움직임 */}
                    <div className="absolute top-[0px] left-[368px] w-[0.5px] h-[250px] bg-gradient-to-b from-white/20 to-[#ffffff]/50 drop-line"></div>
                    <div className="absolute top-[0px] left-[736px] w-[0.5px] h-[250px] bg-gradient-to-b from-white/20 to-[#ffffff]/50 drop-line" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute top-[0px] left-[1103px] w-[0.5px] h-[250px] bg-gradient-to-b from-white/20 to-[#ffffff]/50 drop-line" style={{ animationDelay: '1.5s' }}></div>
                    <div className="absolute top-[0px] left-[1472px] w-[0.5px] h-[250px] bg-gradient-to-b from-white/20 to-[#ffffff]/50 drop-line" style={{ animationDelay: '1s' }}></div>

                </div>
            </div>
        </section>
    )
}

export default ProductionIntro