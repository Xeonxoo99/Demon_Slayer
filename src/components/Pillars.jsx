import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// 배경
import bg from '../images/pillars/텐겐배경.png';
import whiteBg from '../images/pillars/흰 배경.png';
import el from '../images/pillars/텍스트 바로 아래 배경.png';

// 렌고쿠
import kyojuro from '../images/pillars/렌고쿠.png';
import kyojuroText from '../images/pillars/렌고쿠텍스트.png';
import kyojuroEffectBack from '../images/pillars/뒷불.png';
import kyojuroEffectFront from '../images/pillars/앞불.png';

// 텐겐
import tengen from '../images/pillars/텐겐.png';
import tengenText from '../images/pillars/텐겐 글씨.png';
import tengenEffect from '../images/pillars/텐겐 효과.png';

// 기유
import giyuu from '../images/pillars/기유.png';
import giyuuText from '../images/pillars/기유 텍스트.png';
import giyuuEffectBack from '../images/pillars/기유 용 효과.png';
import giyuuEffectFront from '../images/pillars/앞구름.png';
import giyuuEffect from '../images/pillars/물 효과.png';

gsap.registerPlugin(ScrollTrigger);

function Pillars() {
    const sectionRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        const container = containerRef.current;
        const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 1920;
        const containerWidth = 6258;
        const maxTranslateX = -(containerWidth - viewportWidth);

        // GSAP ScrollTrigger로 가로 스크롤 구현
        gsap.to(container, {
            x: maxTranslateX,
            ease: 'none',
            scrollTrigger: {
                trigger: section,
                start: 'top top',
                end: `+=${containerWidth}`,
                scrub: true,
                pin: true,
                anticipatePin: 1,
                invalidateOnRefresh: true,

            },
        });

        // 뷰포트 너비 디버깅
        console.log('viewportWidth:', viewportWidth);

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative w-full h-[980px] bg-[#000000]"
            style={{ zIndex: 30 }}
        >
            <div ref={containerRef} className="relative w-[6258px] h-screen">
                {/* 렌고쿠 */}
                <div className="absolute top-[177px] left-[334px]" style={{ zIndex: 3 }}>
                    <img src={kyojuro} alt="kyojuro" loading="lazy" />
                </div>
                <div className="absolute top-0 left-[273px]" style={{ zIndex: 3 }}>
                    <img src={kyojuroText} alt="kyojuroText" loading="lazy" />
                </div>
                <div className="absolute top-[27px] left-0" style={{ zIndex: 2 }}>
                    <img src={kyojuroEffectBack} alt="kyojuroEffectBack" loading="lazy" />
                </div>
                <div className="absolute top-0 left-0" style={{ zIndex: 4 }}>
                    <img src={kyojuroEffectFront} alt="kyojuroEffectFront" loading="lazy" />
                </div>

                {/* 텐겐 */}
                <div className="absolute top-[112px] left-[2651px]" style={{ zIndex: 6 }}>
                    <img src={tengen} alt="tengen" loading="lazy" />
                </div>
                <div className="absolute top-[50px] left-[2145px]" style={{ zIndex: 3 }}>
                    <img src={tengenText} alt="tengenText" loading="lazy" />
                </div>
                <div className="absolute bottom-[236px] left-[1753px]" style={{ zIndex: 4 }}>
                    <img src={tengenEffect} alt="tengenEffect" loading="lazy" />
                </div>

                {/* 기유 */}
                <div className="absolute top-[69px] right-[790px]" style={{ zIndex: 3 }}>
                    <img src={giyuu} alt="giyuu" loading="lazy" />
                </div>
                <div className="absolute top-0 right-[1529px]" style={{ zIndex: 3 }}>
                    <img src={giyuuText} alt="giyuuText" loading="lazy" />
                </div>
                <div className="absolute top-0 right-[139px]" style={{ zIndex: 2 }}>
                    <img src={giyuuEffectBack} alt="giyuuEffectBack" loading="lazy" />
                </div>
                <div className="absolute bottom-0 right-[840px]" style={{ zIndex: 4 }}>
                    <img src={giyuuEffectFront} alt="giyuuEffectFront" loading="lazy" />
                </div>
                <div className="absolute top-0 right-0" style={{ zIndex: 4 }}>
                    <img src={giyuuEffect} alt="giyuuEffect" loading="lazy" />
                </div>

                {/* 구조물 */}
                <img
                    src={el}
                    alt="el"
                    className="absolute w-fit h-fit bottom-0 left-0"
                    style={{ zIndex: 5 }}
                    loading="lazy"
                />
                {/* 위아래 흰 배경 */}
                <img
                    src={whiteBg}
                    alt="whiteBg"
                    className="absolute w-fit h-fit bottom-0 right-0"
                    style={{ zIndex: 1 }}
                    loading="lazy"
                />
                {/* 전체 배경 */}
                <img
                    src={bg}
                    alt="bg"
                    className="absolute top-0 left-0 w-[6258px] h-screen"
                    loading="lazy"
                />
            </div>
        </section>
    );
}

export default Pillars;