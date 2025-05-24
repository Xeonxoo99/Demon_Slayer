import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef,useState, useEffect } from 'react'
import { CountUp } from 'countup.js';

import React from 'react'
import bg from '../images/movie/bg.png'

function Movie() {
    const finalNumber1 = 500; // ¥ 500M
    const finalNumber2 = 2; // 2M
    const finalNumber3 = 1.5; // 1.5M
    const finalNumber4 = 21.4; // 21.4%

    // 각 숫자에 대해 별도의 ref
    const countUpRef1 = useRef(null);
    const countUpRef2 = useRef(null);
    const countUpRef3 = useRef(null);
    const countUpRef4 = useRef(null);

    useEffect(() => {
        // 각 숫자에 대해 CountUp 인스턴스 생성
        const countUps = [
            new CountUp(countUpRef1.current, finalNumber1, {
                duration: 2,
                useEasing: true,
                useGrouping: true,
                separator: ',',
                prefix: '¥ ',
                suffix: 'M',
            }),
            new CountUp(countUpRef2.current, finalNumber2, {
                duration: 2,
                useEasing: true,
                useGrouping: true,
                separator: ',',
                suffix: 'M',
            }),
            new CountUp(countUpRef3.current, finalNumber3, {
                duration: 2,
                useEasing: true,
                useGrouping: true,
                separator: ',',
                suffix: 'M',
                decimalPlaces: 1,
            }),
            new CountUp(countUpRef4.current, finalNumber4, {
                duration: 2,
                useEasing: true,
                useGrouping: true,
                separator: ',',
                suffix: '%',
                decimalPlaces: 1,
            }),
        ];

        // IntersectionObserver로 요소가 화면에 나타날 때 애니메이션 시작
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.dataset.index);
                        countUps[index].start();
                        observer.unobserve(entry.target); // 한 번 실행 후 관찰 중지
                    }
                });
            },
            { threshold: 0.1 } // 요소의 10%가 보일 때 트리거
        );

        // 각 ref에 대해 관찰 설정
        [countUpRef1, countUpRef2, countUpRef3, countUpRef4].forEach((ref, index) => {
            if (ref.current) {
                ref.current.dataset.index = index;
                observer.observe(ref.current);
            }
        });

        // 정리
        return () => {
            observer.disconnect();
        };
    }, []);

    const blurRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: blurRef,
        offset: ['start end', 'end end'],
    })

    // 전세계_blurs
    const blur1 = useTransform(scrollYProgress, [0., 1], ['blur(7px)', 'blur(0px)'])
    const blur2 = useTransform(scrollYProgress, [0, 1], ['blur(5px)', 'blur(0px)'])
    const blur3 = useTransform(scrollYProgress, [0, 1], ['blur(6px)', 'blur(0px)'])
    const blur83 = useTransform(scrollYProgress, [0, 1], ['blur(12px)', 'blur(0px)'])
    const 전세계_blurs = [blur1, blur2, blur3, blur83]

    // 흥행수익_blurs
    const blur4 = useTransform(scrollYProgress, [0, 1], ['blur(12px)', 'blur(0px)'])
    const blur5 = useTransform(scrollYProgress, [0, 1], ['blur(9px)', 'blur(0px)'])
    const blur6 = useTransform(scrollYProgress, [0, 1], ['blur(15px)', 'blur(0px)'])
    const blur7 = useTransform(scrollYProgress, [0, 1], ['blur(7px)', 'blur(0px)'])
    const blur8 = useTransform(scrollYProgress, [0, 1], ['blur(4px)', 'blur(0px)'])
    const 흥행수익_blurs = [blur4, blur5, blur6, blur7, blur8]

    // 일본역사_blurs
    const blur9 = useTransform(scrollYProgress, [0, 1], ['blur(6px)', 'blur(0px)'])
    const blur10 = useTransform(scrollYProgress, [0, 1], ['blur(7px)', 'blur(0px)'])
    const blur11 = useTransform(scrollYProgress, [0, 1], ['blur(8px)', 'blur(0px)'])
    const blur12 = useTransform(scrollYProgress, [0, 1], ['blur(7px)', 'blur(0px)'])
    const blur13 = useTransform(scrollYProgress, [0, 1], ['blur(6px)', 'blur(0px)'])
    const blur14 = useTransform(scrollYProgress, [0, 1], ['blur(5px)', 'blur(0px)'])
    const blur15 = useTransform(scrollYProgress, [0, 1], ['blur(9px)', 'blur(0px)'])
    const blur16 = useTransform(scrollYProgress, [0, 1], ['blur(6px)', 'blur(0px)'])
    const blur17 = useTransform(scrollYProgress, [0, 1], ['blur(8px)', 'blur(0px)'])
    const blur18 = useTransform(scrollYProgress, [0, 1], ['blur(7px)', 'blur(0px)'])
    const blur19 = useTransform(scrollYProgress, [0, 1], ['blur(6px)', 'blur(0px)'])
    const blur20 = useTransform(scrollYProgress, [0, 1], ['blur(5px)', 'blur(0px)'])
    const blur21 = useTransform(scrollYProgress, [0, 1], ['blur(7px)', 'blur(0px)'])
    const blur77 = useTransform(scrollYProgress, [0, 1], ['blur(7px)', 'blur(0px)'])
    const blur78 = useTransform(scrollYProgress, [0, 1], ['blur(4px)', 'blur(0px)'])
    const blur79 = useTransform(scrollYProgress, [0, 1], ['blur(7px)', 'blur(0px)'])
    const 일본역사_blurs = [
        blur9, blur10, blur11, blur12, blur13, blur14, blur15,
        blur16, blur17, blur18, blur19, blur20, blur21, blur77, blur78, blur79
    ]

    // 애니메이션최초_blurs
    const blur22 = useTransform(scrollYProgress, [0, 1], ['blur(5px)', 'blur(0px)'])
    const blur23 = useTransform(scrollYProgress, [0, 1], ['blur(4px)', 'blur(0px)'])
    const blur24 = useTransform(scrollYProgress, [0, 1], ['blur(6px)', 'blur(0px)'])
    const blur25 = useTransform(scrollYProgress, [0, 1], ['blur(5px)', 'blur(0px)'])
    const blur26 = useTransform(scrollYProgress, [0, 1], ['blur(7px)', 'blur(0px)'])
    const blur27 = useTransform(scrollYProgress, [0, 1], ['blur(6px)', 'blur(0px)'])
    const blur28 = useTransform(scrollYProgress, [0, 1], ['blur(8px)', 'blur(0px)'])
    const blur29 = useTransform(scrollYProgress, [0, 1], ['blur(5px)', 'blur(0px)'])
    const 애니메이션최초_blurs = [
        blur22, blur23, blur24, blur25, blur26, blur27, blur28, blur29
    ]

    // 아카데미상_blurs
    const blur30 = useTransform(scrollYProgress, [0, 1], ['blur(8px)', 'blur(0px)'])
    const blur31 = useTransform(scrollYProgress, [0, 1], ['blur(6px)', 'blur(0px)'])
    const blur32 = useTransform(scrollYProgress, [0, 1], ['blur(10px)', 'blur(0px)'])
    const blur33 = useTransform(scrollYProgress, [0, 1], ['blur(12px)', 'blur(0px)'])
    const blur34 = useTransform(scrollYProgress, [0, 1], ['blur(4px)', 'blur(0px)'])
    const blur35 = useTransform(scrollYProgress, [0, 1], ['blur(5px)', 'blur(0px)'])
    const blur36 = useTransform(scrollYProgress, [0, 1], ['blur(7px)', 'blur(0px)'])
    const blur37 = useTransform(scrollYProgress, [0, 1], ['blur(6px)', 'blur(0px)'])
    const blur38 = useTransform(scrollYProgress, [0, 1], ['blur(3px)', 'blur(0px)'])
    const blur80 = useTransform(scrollYProgress, [0, 1], ['blur(6px)', 'blur(0px)'])
    const blur81 = useTransform(scrollYProgress, [0, 1], ['blur(4px)', 'blur(0px)'])
    const blur82 = useTransform(scrollYProgress, [0, 1], ['blur(3px)', 'blur(0px)'])
    const 아카데미상_blurs = [
        blur30, blur31, blur32, blur33, blur34, blur35, blur36, blur37, blur38, blur80, blur81, blur82
    ]

    // 블루레이DVD_blurs
    const blur39 = useTransform(scrollYProgress, [0, 1], ['blur(6px)', 'blur(0px)'])
    const blur40 = useTransform(scrollYProgress, [0, 1], ['blur(7px)', 'blur(0px)'])
    const blur41 = useTransform(scrollYProgress, [0, 1], ['blur(5px)', 'blur(0px)'])
    const blur42 = useTransform(scrollYProgress, [0, 1], ['blur(4px)', 'blur(0px)'])
    const blur43 = useTransform(scrollYProgress, [0, 1], ['blur(7px)', 'blur(0px)'])
    const blur44 = useTransform(scrollYProgress, [0, 1], ['blur(6px)', 'blur(0px)'])
    const blur45 = useTransform(scrollYProgress, [0, 1], ['blur(5px)', 'blur(0px)'])
    const blur46 = useTransform(scrollYProgress, [0, 1], ['blur(4px)', 'blur(0px)'])
    const blur47 = useTransform(scrollYProgress, [0, 1], ['blur(5px)', 'blur(0px)'])
    const blur48 = useTransform(scrollYProgress, [0, 1], ['blur(6px)', 'blur(0px)'])
    const blur49 = useTransform(scrollYProgress, [0, 1], ['blur(5px)', 'blur(0px)'])
    const blur50 = useTransform(scrollYProgress, [0, 1], ['blur(4px)', 'blur(0px)'])
    const blur51 = useTransform(scrollYProgress, [0, 1], ['blur(3px)', 'blur(0px)'])
    const blur52 = useTransform(scrollYProgress, [0, 1], ['blur(6px)', 'blur(0px)'])
    const blur53 = useTransform(scrollYProgress, [0, 1], ['blur(5px)', 'blur(0px)'])
    const 블루레이DVD_blurs = [
        blur39, blur40, blur41, blur42, blur43, blur44, blur45,
        blur46, blur47, blur48, blur49, blur50, blur51, blur52, blur53
    ]

    // 단권만화_blurs
    const blur54 = useTransform(scrollYProgress, [0, 1], ['blur(7px)', 'blur(0px)'])
    const blur55 = useTransform(scrollYProgress, [0, 1], ['blur(6px)', 'blur(0px)'])
    const blur56 = useTransform(scrollYProgress, [0, 1], ['blur(5px)', 'blur(0px)'])
    const blur57 = useTransform(scrollYProgress, [0, 1], ['blur(6px)', 'blur(0px)'])
    const blur58 = useTransform(scrollYProgress, [0, 1], ['blur(7px)', 'blur(0px)'])
    const 단권만화_blurs = [blur54, blur55, blur56, blur57, blur58]

    // 판매세계_blurs
    const blur59 = useTransform(scrollYProgress, [0, 1], ['blur(9px)', 'blur(0px)'])
    const blur60 = useTransform(scrollYProgress, [0, 1], ['blur(6px)', 'blur(0px)'])
    const blur61 = useTransform(scrollYProgress, [0, 1], ['blur(4px)', 'blur(0px)'])
    const blur62 = useTransform(scrollYProgress, [0, 1], ['blur(10px)', 'blur(0px)'])
    const blur63 = useTransform(scrollYProgress, [0, 1], ['blur(12px)', 'blur(0px)'])
    const blur64 = useTransform(scrollYProgress, [0, 1], ['blur(5px)', 'blur(0px)'])
    const blur65 = useTransform(scrollYProgress, [0, 1], ['blur(7px)', 'blur(0px)'])
    const 판매세계_blurs = [blur59, blur60, blur61, blur62, blur63, blur64, blur65]

    // TV시청률_blurs
    const blur66 = useTransform(scrollYProgress, [0, 1], ['blur(7px)', 'blur(0px)'])
    const blur67 = useTransform(scrollYProgress, [0, 1], ['blur(6px)', 'blur(0px)'])
    const blur68 = useTransform(scrollYProgress, [0, 1], ['blur(5px)', 'blur(0px)'])
    const blur69 = useTransform(scrollYProgress, [0, 1], ['blur(6px)', 'blur(0px)'])
    const blur70 = useTransform(scrollYProgress, [0, 1], ['blur(7px)', 'blur(0px)'])
    const blur71 = useTransform(scrollYProgress, [0, 1], ['blur(6px)', 'blur(0px)'])
    const blur72 = useTransform(scrollYProgress, [0, 1], ['blur(4px)', 'blur(0px)'])
    const blur73 = useTransform(scrollYProgress, [0, 1], ['blur(5px)', 'blur(0px)'])
    const blur74 = useTransform(scrollYProgress, [0, 1], ['blur(6px)', 'blur(0px)'])
    const blur75 = useTransform(scrollYProgress, [0, 1], ['blur(7px)', 'blur(0px)'])
    const blur76 = useTransform(scrollYProgress, [0, 1], ['blur(5px)', 'blur(0px)'])
    const TV시청률_blurs = [
        blur66, blur67, blur68, blur69, blur70, blur71,
        blur72, blur73, blur74, blur75, blur76
    ]


    const generateBlurSpans = (text, blurStyles) => {
        return text.split('').map((char, i) => (
            <motion.span key={i} style={{ filter: blurStyles[i] }} className="inline-block">
                {char}
            </motion.span>
        ))
    }

    return (
        <section className='relative w-full h-[980px] bg-[#000000]'
            style={{ zIndex: 30, fontFamily: 'Pretendard-Regular' }}
        >

            <div className='absolute inset-0 z-10'>
                <div
                    className="w-full h-[635px] text-[95px] leading-[95px] text-[#ffffff] z-20 flex flex-col font-medium"

                >
                    {/* 텍스트 */}
                    <div ref={blurRef} className='z-20 ml-[22.3px] mt-[38px]' style={{ letterSpacing: '-2.5px', lineHeight: '110px', display: 'inline-block', whiteSpace: 'pre' }}>
                        <div className='flex gap-5' >
                            <div><span>{generateBlurSpans("전 세계", 전세계_blurs)}</span></div>
                            <div className='text-[#000000]'><span>{generateBlurSpans("흥행수익,", 흥행수익_blurs)}</span></div>
                        </div>
                        <div><span>{generateBlurSpans("일본 역사상 최다 관객 동원,", 일본역사_blurs)}</span></div>
                        <div className='flex gap-5' >
                            <div><span>{generateBlurSpans("애니메이션 최초", 애니메이션최초_blurs)}</span></div>
                            <div className='text-[#000000]'><span>{generateBlurSpans("일본 아카데미상 수상,", 아카데미상_blurs)}</span></div>
                        </div>
                        <div><span>{generateBlurSpans("블루레이 & DVD, 판매량 1위", 블루레이DVD_blurs)}</span></div>
                        <div className='flex gap-5'>
                            <div><span>{generateBlurSpans("단권 만화", 단권만화_blurs)}</span></div>
                            <div className='text-[#000000]'><span>{generateBlurSpans("판매 세계 1위,", 판매세계_blurs)}</span></div>
                        </div>
                        <div><span>{generateBlurSpans("TV 애니메이션 최고 시청률", TV시청률_blurs)}</span></div>
                        <div className="absolute top-[252px] left-0 w-[444px] h-[6px] bg-gradient-to-r from-white to-black/10"></div>
                        <div className="absolute top-[688px] left-[573px] w-[618px] h-[6px] bg-gradient-to-r from-white to-black/10"></div>
                    </div>
                    {/* 배경 */}
                    <div className='absolute bg-[#000000] opacity-60 z-10'>
                        <img src={bg} alt="bg" />
                    </div>
                    {/* 반전 */}
                    <div className='absolute top-[34px] left-[293px] w-[357px] h-[111px]' style={{
                        backgroundColor: '#fff',
                        mixBlendMode: 'exclusion',
                        zIndex: "11"
                    }}></div>
                    <div className='absolute top-[254px] left-[613px] w-[790px] h-[111px]' style={{
                        backgroundColor: '#fff',
                        mixBlendMode: 'exclusion',
                        zIndex: "11"
                    }}></div>
                    <div className='absolute top-[472px] left-[375px] w-[518px] h-[111px]' style={{
                        backgroundColor: '#fff',
                        mixBlendMode: 'exclusion',
                        zIndex: "11"
                    }}></div>
                </div>

            </div>
            {/* 위 */}

            {/* 아래 */}
            {/* 전 세계 흥행 수익 */}
            <div>
                <div className="absolute bottom-[23px] left-[23px] w-full h-auto text-[#ffffff] z-20">
                    <div className="flex items-center gap-[30px]">
                        <span ref={countUpRef1} className="font-bold text-[120px] leading-none"></span>
                        <div className="flex flex-col justify-between h-[120px]">
                            <span className="text-[52px] w-fit h-fit flex items-start justify-center">+</span>
                            <span className="text-[14px] w-fit h-fit leading-[3px] pb-5 flex items-start">전 세계 흥행수익</span>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-[23px] left-[677px] w-full h-auto text-[#ffffff] z-20">
                    <div className="flex items-center gap-[30px]">
                        <span ref={countUpRef2} className="font-bold text-[120px] leading-none"></span>
                        <div className="flex flex-col justify-between h-[120px]">
                            <span className="text-[52px] w-fit h-fit flex items-start justify-center">+</span>
                            <span className="text-[14px] w-fit h-fit leading-[3px] pb-5 flex items-start">일본 관객 동원</span>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-[23px] left-[1072px] w-full h-auto text-[#ffffff] z-20">
                    <div className="flex items-center gap-[30px]">
                        <span ref={countUpRef3} className="font-bold text-[120px] leading-none"></span>
                        <div className="flex flex-col justify-between h-[120px]">
                            <span className="text-[52px] w-fit h-fit flex items-start justify-center">+</span>
                            <span className="text-[14px] w-fit h-fit leading-[3px] pb-5 flex items-start">단일권 만화 판매량</span>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-[23px] left-[1502px] w-full h-auto text-[#ffffff] z-20">
                    <div className="flex items-center gap-[30px]">
                        <span ref={countUpRef4} className="font-bold text-[120px] leading-none"></span>
                        <div className="flex flex-col justify-between h-[120px]">
                            <span className="text-[52px] w-fit h-fit flex items-start justify-center">+</span>
                            <span className="text-[14px] w-fit h-fit leading-[3px] pb-5 flex items-start">시청률</span>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default Movie
