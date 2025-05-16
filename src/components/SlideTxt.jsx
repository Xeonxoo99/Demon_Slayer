import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function SlideTxt() {
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.4], [0, 0, 1]);

    // 텍스트 배열 2배로 반복해서 자연스럽게 루프 가능하게 함
    const textArray = Array(16).fill('DEMON SLAYER');
    const doubledArray = [...textArray, ...textArray];

    const slideVariants = {
        animate: {
            x: ['0%', '-50%'], // ✅ 전체 길이의 절반만큼 이동
            transition: {
                duration: 20,
                ease: 'linear',
                repeat: Infinity,
            },
        },
    };

    return (
        <motion.section
            ref={sectionRef}
            className="relative w-full min-h-[680px] pt-[150px] text-[#ffffff] bg-[#000000]"
            style={{ fontFamily: 'VELISTA', zIndex:30 }}
        >
            {/* 위쪽 텍스트 */}
            <motion.div
                className="w-full h-[212px] mb-[50px] overflow-hidden"
                style={{ opacity }}
            >
                <motion.div
                    className="flex gap-20"
                    variants={slideVariants}
                    animate="animate"
                >
                    {doubledArray.map((text, index) => (
                        <div
                            key={`top-${index}`}
                            className="h-full flex-shrink-0 text-[212px] leading-[212px] opacity-10"
                        >
                            {text}
                        </div>
                    ))}
                </motion.div>
            </motion.div>

            {/* 아래쪽 텍스트 */}
            <motion.div
                className="w-full h-[212px] overflow-hidden "
                style={{ opacity }}
            >
                <motion.div
                    className="flex gap-20"
                    animate={{
                        x: ['-50%', '0%'],
                        transition: {
                            duration: 20,
                            ease: 'linear',
                            repeat: Infinity,
                        },
                    }}
                >
                    {doubledArray.map((text, index) => (
                        <div
                            key={`bottom-${index}`}
                            className="h-full flex-shrink-0 text-[212px] leading-[212px] opacity-40"
                        >
                            {text}
                        </div>
                    ))}
                </motion.div>
            </motion.div>
        </motion.section>
    );
}

export default SlideTxt;