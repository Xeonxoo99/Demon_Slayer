import React, { useState,useRef, useEffect } from 'react';
import { motion, useScroll, useTransform,AnimatePresence } from 'framer-motion';
import bg from '../images/story2/배경.png';
import bg2 from '../images/story2/배경2.png';
import rock from '../images/story2/돌.png';
import fireEffect from '../images/story2/불꽃효과.mp4'

function StorySection2() {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    // 배경 및 텍스트 투명도 설정
    const sectionOpacity = useTransform(scrollYProgress, [0, 0.1, 0.3], [0, 0, 1]);
    const bg1Opacity = useTransform(scrollYProgress, [0, 0.3, 0.5], [1, 1, 0]);
    const bg2Opacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
    const firstTextOpacity = useTransform(scrollYProgress, [0, 0.3, 0.5], [1, 1, 0]);
    const secondTextOpacity = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);

    // 텍스트 전환을 위한 상태
    const [showSecondText, setShowSecondText] = useState(false);

    // 스크롤 진행도에 따라 텍스트 전환
    useEffect(() => {
        const unsubscribe = scrollYProgress.on('change', (latest) => {
            setShowSecondText(latest >= 0.5);
        });
        return () => unsubscribe();
    }, [scrollYProgress]);


    return (
        <motion.section
            ref={containerRef}
            className="text-[#ffffff]"
            style={{
                height: '600vh',
                fontFamily: 'ChosunKm',
                zIndex: 0,
            }}
        >
            <motion.div style={{ opacity: sectionOpacity }}>
                {/* 배경 이미지 */}
                <motion.img
                    src={bg}
                    alt="bg1"
                    className="w-full h-screen object-cover fixed top-0 left-0"
                    style={{ zIndex: 0, opacity: bg1Opacity }}
                />
                <motion.img
                    src={bg2}
                    alt="bg2"
                    className="w-full h-screen object-cover fixed top-0 left-0"
                    style={{ zIndex: 0, opacity: bg2Opacity }}
                />


                {/* 불꽃 효과 비디오 */}
                <motion.video
                    className="w-full h-screen object-cover fixed top-0 left-0 opacity-50"
                    style={{ zIndex: 1}}
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={fireEffect} type="video/mp4" />
                </motion.video>

                {/* 바위 이미지 */}
                <img
                    src={rock}
                    alt="rock"
                    className="w-full object-cover fixed -bottom-12"
                    style={{ zIndex: 1 }}
                />


                {/* 텍스트 컨테이너 */}
                <div
                    className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] flex flex-col items-center justify-center gap-4 z-[10]"
                >
                    <span className="text-[28px]">다이쇼 시대</span>
                    {/* 텍스트 전환 */}
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={showSecondText ? 'second' : 'first'}
                            className="text-[54px] text-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {showSecondText ? (
                                <>
                                    나는 이제 끝없는 <br /> 싸움을 향해 나아간다.
                                </>
                            ) : (
                                <>
                                    새해 첫 날, <br /> 가족을 잃었다.
                                </>
                            )}
                        </motion.span>
                    </AnimatePresence>
                    <span className="text-[28px]">1912年 1月 1日</span>
                </div>



            </motion.div>
        </motion.section>
    );
}

export default StorySection2;