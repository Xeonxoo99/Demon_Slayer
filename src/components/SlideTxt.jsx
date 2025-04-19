import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function SlideTxt() {
    const sectionRef = useRef(null);

    // 스크롤 기반 투명도 설정 (선택 사항)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.4], [0, 0, 1]);

    // 슬라이드 애니메이션 설정
    const slideVariants = {
        initial: { x: '100%' }, // 화면 오른쪽 밖에서 시작
        animate: {
            x: '-100%', // 화면 왼쪽 밖으로 이동
            transition: {
                duration: 10, // 슬라이드 속도 (10초)
                repeat: Infinity, // 무한 반복
                repeatType: 'loop',
                ease: 'linear', // 부드러운 선형 이동
            },
        },
    };

    return (
        <motion.section
            ref={sectionRef}
            className="w-full min-h-[680px] py-[150px]"
            style={{ fontFamily: 'VELISTA' }}
        >
            {/* 위쪽 텍스트 */}
            <motion.div
                className="w-full h-[212px] mb-[50px] overflow-hidden"
                style={{ opacity }} // 스크롤 기반 페이드 인
            >
                <motion.div
                    className="flex w-[3000px]" // 두 텍스트를 나란히 배치
                    variants={slideVariants}
                    initial="initial"
                    animate="animate"
                >
                    {/* 첫 번째 텍스트 */}
                    <div className="w-[1500px] h-full flex-shrink-0 text-[212px] leading-[212px]">
                        DEMON SLAYER
                    </div>
                    {/* 두 번째 텍스트 (복사본) */}
                    <div className="w-[1500px] h-full flex-shrink-0 text-[212px] leading-[212px]">
                        DEMON SLAYER
                    </div>
                </motion.div>
            </motion.div>

            {/* 아래쪽 텍스트 */}
            <motion.div
                className="w-full h-[212px] overflow-hidden"
                style={{ opacity }} // 스크롤 기반 페이드 인
            >
                <motion.div
                    className="flex w-[3000px]"
                    variants={slideVariants}
                    initial="initial"
                    animate="animate"
                >
                    {/* 첫 번째 텍스트 */}
                    <div className="w-[1500px] h-full flex-shrink-0 text-[212px] leading-[212px]">
                        DEMON SLAYER
                    </div>
                    {/* 두 번째 텍스트 (복사본) */}
                    <div className="w-[1500px] h-full flex-shrink-0 text-[212px] leading-[212px]">
                        DEMON SLAYER
                    </div>
                </motion.div>
            </motion.div>
        </motion.section>
    );
}

export default SlideTxt;