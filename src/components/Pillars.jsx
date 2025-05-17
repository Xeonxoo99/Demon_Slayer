import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, useInView, useAnimationControls } from 'framer-motion';

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
    // Refs for Kyojuro elements
    const kyojuroRef = useRef(null);
    const kyojuroTextRef = useRef(null);
    const kyojuroEffectBackRef = useRef(null);
    const kyojuroEffectFrontRef = useRef(null);
    // Refs for Tengen elements
    const tengenRef = useRef(null);
    const tengenTextRef = useRef(null);
    const tengenEffectRef = useRef(null);
    // Refs for Giyuu elements
    const giyuuRef = useRef(null);
    const giyuuTextRef = useRef(null);
    const giyuuEffectBackRef = useRef(null);
    const giyuuEffectFrontRef = useRef(null);
    const giyuuEffectRef = useRef(null);

    // Animation controls
    const kyojuroControls = useAnimationControls();
    const tengenControls = useAnimationControls();
    const giyuuControls = useAnimationControls();

    // In-view detection
    const isKyojuroInView = useInView(kyojuroRef, { margin: '-50% 0px -50% -50%', once: false });
    const isTengenInView = useInView(tengenRef, { margin: '-50% 0px -50% -50%', once: false });
    const isGiyuuInView = useInView(giyuuRef, { margin: '-50% 0px -50% -50%', once: false });

    useEffect(() => {
        const section = sectionRef.current;
        const container = containerRef.current;
        const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 1920;
        const containerWidth = 6258;
        const maxTranslateX = -(containerWidth - viewportWidth);

        // GSAP horizontal scroll
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

        // Cleanup
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    // Kyojuro animations
    useEffect(() => {
        if (isKyojuroInView) {
            kyojuroControls.start((i) => ({
                opacity: 1,
                y: i === 0 ? 0 : undefined,
                x: i === 1 ? 0 : undefined,
                scale: i === 2 ? 1 : i === 3 ? 1 : undefined,
                transition: { duration: i === 0 ? 1 : 0.8, delay: i * 0.2 },
            }));
        } else {
            kyojuroControls.start((i) => ({
                opacity: 0,
                y: i === 0 ? 100 : undefined,
                x: i === 1 ? -50 : undefined,
                scale: i === 2 ? 0.8 : i === 3 ? 1.2 : undefined,
                transition: { duration: i === 0 ? 1 : 0.8, delay: (3 - i) * 0.2 },
            }));
        }
    }, [isKyojuroInView, kyojuroControls]);

    // Tengen animations
    useEffect(() => {
        if (isTengenInView) {
            tengenControls.start((i) => ({
                opacity: 1,
                y: i === 0 ? 0 : undefined,
                x: i === 1 ? 0 : undefined,
                scale: i === 2 ? 1 : undefined,
                transition: { duration: i === 0 ? 1 : 0.8, delay: i * 0.2 },
            }));
        } else {
            tengenControls.start((i) => ({
                opacity: 0,
                y: i === 0 ? 100 : undefined,
                x: i === 1 ? -50 : undefined,
                scale: i === 2 ? 0.8 : undefined,
                transition: { duration: i === 0 ? 1 : 0.8, delay: (2 - i) * 0.2 },
            }));
        }
    }, [isTengenInView, tengenControls]);

    // Giyuu animations
    useEffect(() => {
        if (isGiyuuInView) {
            giyuuControls.start((i) => ({
                opacity: 1,
                y: i === 0 ? 0 : undefined,
                x: i === 1 ? 0 : i === 4 ? 0 : undefined,
                scale: i === 2 ? 1 : i === 3 ? 1 : undefined,
                transition: { duration: i === 0 ? 1 : 0.8, delay: i * 0.2 },
            }));
        } else {
            giyuuControls.start((i) => ({
                opacity: 0,
                y: i === 0 ? 100 : undefined,
                x: i === 1 ? -50 : i === 4 ? 50 : undefined,
                scale: i === 2 ? 0.8 : i === 3 ? 1.2 : undefined,
                transition: { duration: i === 0 ? 1 : 0.8, delay: (4 - i) * 0.2 },
            }));
        }
    }, [isGiyuuInView, giyuuControls]);

    return (
        <section
            ref={sectionRef}
            className="relative w-full h-[980px] bg-[#000000]"
            style={{ zIndex: 30 }}
        >
            <div ref={containerRef} className="relative w-[6258px] h-screen overflow-hidden">
                {/* 렌고쿠 */}
                <motion.div
                    ref={kyojuroRef}
                    className="absolute top-[177px] left-[334px]"
                    style={{ zIndex: 3 }}
                    custom={0}
                    animate={kyojuroControls}
                >
                    <img src={kyojuro} alt="kyojuro" loading="lazy" />
                </motion.div>
                <motion.div
                    ref={kyojuroTextRef}
                    className="absolute top-0 left-[273px]"
                    style={{ zIndex: 3 }}
                    custom={1}
                    animate={kyojuroControls}
                >
                    <img src={kyojuroText} alt="kyojuroText" loading="lazy" />
                </motion.div>
                <motion.div
                    ref={kyojuroEffectBackRef}
                    className="absolute top-[27px] left-0"
                    style={{ zIndex: 2 }}
                    custom={2}
                    animate={kyojuroControls}
                >
                    <img src={kyojuroEffectBack} alt="kyojuroEffectBack" loading="lazy" />
                </motion.div>
                <motion.div
                    ref={kyojuroEffectFrontRef}
                    className="absolute top-0 left-0"
                    style={{ zIndex: 4 }}
                    custom={3}
                    animate={kyojuroControls}
                >
                    <img src={kyojuroEffectFront} alt="kyojuroEffectFront" loading="lazy" />
                </motion.div>

                {/* 텐겐 */}
                <motion.div
                    ref={tengenRef}
                    className="absolute top-[112px] left-[2651px]"
                    style={{ zIndex: 6 }}
                    custom={0}
                    animate={tengenControls}
                >
                    <img src={tengen} alt="tengen" loading="lazy" />
                </motion.div>
                <motion.div
                    ref={tengenTextRef}
                    className="absolute top-[50px] left-[2145px]"
                    style={{ zIndex: 3 }}
                    custom={1}
                    animate={tengenControls}
                >
                    <img src={tengenText} alt="tengenText" loading="lazy" />
                </motion.div>
                <motion.div
                    ref={tengenEffectRef}
                    className="absolute bottom-[236px] left-[1753px]"
                    style={{ zIndex: 4 }}
                    custom={2}
                    animate={tengenControls}
                >
                    <img src={tengenEffect} alt="tengenEffect" loading="lazy" />
                </motion.div>

                {/* 기유 */}
                <motion.div
                    ref={giyuuRef}
                    className="absolute top-[69px] right-[790px]"
                    style={{ zIndex: 3 }}
                    custom={0}
                    animate={giyuuControls}
                >
                    <img src={giyuu} alt="giyuu" loading="lazy" />
                </motion.div>
                <motion.div
                    ref={giyuuTextRef}
                    className="absolute top-0 right-[1529px]"
                    style={{ zIndex: 3 }}
                    custom={1}
                    animate={giyuuControls}
                >
                    <img src={giyuuText} alt="giyuuText" loading="lazy" />
                </motion.div>
                <motion.div
                    ref={giyuuEffectBackRef}
                    className="absolute top-0 right-[139px]"
                    style={{ zIndex: 2 }}
                    custom={2}
                    animate={giyuuControls}
                >
                    <img src={giyuuEffectBack} alt="giyuuEffectBack" loading="lazy" />
                </motion.div>
                <motion.div
                    ref={giyuuEffectFrontRef}
                    className="absolute bottom-0 right-[840px]"
                    style={{ zIndex: 4 }}
                    custom={3}
                    animate={giyuuControls}
                >
                    <img src={giyuuEffectFront} alt="giyuuEffectFront" loading="lazy" />
                </motion.div>
                <motion.div
                    ref={giyuuEffectRef}
                    className="absolute top-0 right-0"
                    style={{ zIndex: 4 }}
                    custom={4}
                    animate={giyuuControls}
                >
                    <img src={giyuuEffect} alt="giyuuEffect" loading="lazy" />
                </motion.div>

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
                    className="absolute w-fit h-fit bottom-0 left-0"
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