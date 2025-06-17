import React, { useState, useRef, useEffect } from 'react';
import { useScroll, motion, AnimatePresence } from 'framer-motion';

import akaza from '../images/firstquarter/아카자.png';
import akazaName from '../images/firstquarter/아카자 이름.png';
import akazaIntro from '../images/firstquarter/아카자 배경 스토리.png'

import dakiGyutaro from '../images/firstquarter/다키규타로.png';
import dakiGyutaroName from '../images/firstquarter/다키 규타로 이름.png';
import dakiGyutaroIntro from '../images/firstquarter/다키규타로 배경 스토리.png'

import gyokko from '../images/firstquarter/쿗코.png';
import gyokkoName from '../images/firstquarter/쿗코 이름.png';
import gyokkoIntro from '../images/firstquarter/굣코 배경 스토리.png'

function FirstQuarterIntro() {
    const sectionRef = useRef(null);
    const [currentImage, setCurrentImage] = useState(0);
    const [isInView, setIsInView] = useState(false);
    const [isPreloaded, setIsPreloaded] = useState(false);

    // 원본 이미지 시퀀스
    const baseImages = Array.from({ length: 81 }, (_, i) =>
        `/FirstQuarterwebp/${i.toString().padStart(4, '0')}.webp`
    );

    // 30장씩 복제된 시퀀스 삽입 (총 프레임 수: 30 + 40 + 30 + 38 + 30 = 168)
const images = [
    ...Array(100).fill(baseImages[0]),               // 0번 30장
    ...baseImages.slice(1, 41),                     // 1 ~ 40
    ...Array(100).fill(baseImages[41]),              // 41번 30장
    ...baseImages.slice(42, 81),                    // ✅ 42 ~ 80 (총 39장 → 40장)
    ...Array(100).fill(baseImages[80]),              // 80번 30장
];

    const totalFrames = images.length; // 168프레임

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end start'],
    });

    useEffect(() => {
        if (!isPreloaded) return;

        const unsubscribe = scrollYProgress.on('change', (latest) => {
            const newImageIndex = Math.floor(latest * totalFrames);
            setCurrentImage(Math.min(newImageIndex, totalFrames - 1));
        });

        return () => unsubscribe();
    }, [scrollYProgress, isPreloaded]);

    // IntersectionObserver로 시야 감지
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    // 이미지 프리로딩
    useEffect(() => {
        if (!isInView) return;

        let loadedCount = 0;
        const tempImages = [];

        // 중복 제거된 이미지들만 로딩
        const uniqueImageSet = new Set(images);

        uniqueImageSet.forEach((src) => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === uniqueImageSet.size + 6) {
                    setIsPreloaded(true);
                }
            };
            img.onerror = () => {
                console.error(`Failed to load image: ${src}`);
            };
            tempImages.push(img);
        });

        // 캐릭터 이미지들도 함께 로딩
        [akaza, akazaName, dakiGyutaro, dakiGyutaroName, gyokko, gyokkoName].forEach((src) => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === uniqueImageSet.size + 6) {
                    setIsPreloaded(true);
                }
            };
            img.onerror = () => {
                console.error(`Failed to load character image: ${src}`);
            };
            tempImages.push(img);
        });

        return () => {
            tempImages.forEach((img) => {
                img.src = '';
            });
        };
    }, [isInView]);

    return (
        <section
            ref={sectionRef}
            className="relative w-full h-[1000vh] bg-black"
            style={{ zIndex: 30 }}
            key="first-quarter-intro"
        >
            {/* 배경 시퀀스 이미지 */}
            {isInView && isPreloaded && (
                <motion.img
                    key={`background-${currentImage}`}
                    src={images[currentImage]}
                    alt="frame"
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100vh',
                        objectFit: 'cover',
                        zIndex: -1,
                    }}
                />
            )}

            {/* 캐릭터 등장 */}
            <AnimatePresence mode="wait">
                {isInView && isPreloaded && currentImage < 100 && (
                    <>
                        <motion.img key="akaza" src={akaza} className="fixed bottom-0 left-1/2 -translate-x-1/2 z-10 w-[1119px]" />
                        <motion.img key="akaza-name" src={akazaName} className="fixed -bottom-[100px] left-0 z-10 w-[1081px]" />
                        <motion.img key="akaza-intro" src={akazaIntro} className="fixed bottom-[188px] left-[1343px] z-10 w-[456px]" />
                    </>
                )}
                {isInView && isPreloaded && currentImage >= 140 && currentImage < 240 && (
                    <>
                        <motion.img key="daki" src={dakiGyutaro} className="fixed -bottom-[17px] left-1/2 -translate-x-1/2 z-10 w-[1119px] h-[985px]" />
                        <motion.img key="daki-name" src={dakiGyutaroName} className="fixed bottom-0 left-0 z-10 w-[1061px]" />
                        <motion.img key="daki-intro" src={dakiGyutaroIntro} className="fixed bottom-[188px] left-[1343px] z-10 w-[456px]" />
                    </>
                )}
                {isInView && isPreloaded && currentImage >= 297 && currentImage < 380 && (
                    <>
                        <motion.img key="gyokko" src={gyokko} className="fixed bottom-0 left-1/2 -translate-x-1/2 z-10 w-[1119px]" />
                        <motion.img key="gyokko-name" src={gyokkoName} className="fixed bottom-0 left-0 z-10 w-[943px]" />
                        <motion.img key="gyokko-intro" src={gyokkoIntro} className="fixed bottom-[188px] left-[1343px] z-10 w-[456px]" />
                    </>
                )}
            </AnimatePresence>
        </section>
    );
}

export default FirstQuarterIntro;
