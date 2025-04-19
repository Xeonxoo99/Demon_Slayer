import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Lottie from 'lottie-react';
import bg from '../images/story2/배경.png';
import rock from '../images/story2/돌.png';
// import lottieEffect from '../images/story2/불꽃효과.json';

/*
After Effects에서 .aep 파일 열기.
Bodymovin 플러그인 설치 (ZXP Installer 사용, AE Scripts 참조).
Composition 선택 → Bodymovin 렌더링:
설정: "Assets 포함", "압축 해제" 선택.
출력: 불꽃효과.json (예: src/images/story2/불꽃효과.json).
JSON 파일을 프로젝트 디렉토리에 저장.
*/

function StorySection2() {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'], // MainIntro 끝(800vh)부터 StorySection2 끝(2000vh)까지
    });

    const sectionOpacity = useTransform(scrollYProgress, [0, 0.5, 0.51, 1], [0, 0, 1, 1]);

    // 디버깅용 로그
    useEffect(() => {
        const unsubscribe = scrollYProgress.on('change', (latest) => {
            console.log('StorySection2 scrollYProgress:', latest);
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
                {/* Lottie 애니메이션 */}
                {/* <motion.div
                    className="w-full h-screen fixed top-0 left-0"
                    style={{ zIndex: 15 }} // 텍스트(z-[10]), 돌(z: 1), 배경(z: 0) 위
                >
                    <Lottie
                        animationData={lottieEffect}
                        loop={true}
                        autoplay={true}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </motion.div> */}

                {/* 기존 콘텐츠 */}
                <div
                    className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[300px] flex flex-col items-center justify-center gap-4 z-[10]"
                >
                    <span className="text-[28px]">다이쇼 시대</span>
                    <span className="text-[54px] text-center">
                        새해 첫 날, <br /> 가족을 잃었다.
                    </span>
                    <span className="text-[28px]">1912年 1月 1日</span>
                </div>
                <img
                    src={bg}
                    alt="bg"
                    className="w-full h-screen object-cover fixed top-0 left-0"
                    style={{ zIndex: 0 }}
                />
                <img
                    src={rock}
                    alt="rock"
                    className="w-full object-cover fixed -bottom-12"
                    style={{ zIndex: 1 }}
                />
            </motion.div>
        </motion.section>
    );
}

export default StorySection2;