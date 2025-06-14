import React, { useState, useRef, useEffect } from 'react';
import { useScroll, motion, AnimatePresence } from 'framer-motion';

import akaza from '../images/firstquarter/아카자.png';
import akazaName from '../images/firstquarter/아카자 이름.png';
import dakiGyutaro from '../images/firstquarter/다키규타로.png';
import dakiGyutaroName from '../images/firstquarter/다키 규타로 이름.png';
import gyokko from '../images/firstquarter/쿗코.png';
import gyokkoName from '../images/firstquarter/쿗코 이름.png';

function FirstQuarterIntro() {
    const sectionRef = useRef(null);
    const [currentImage, setCurrentImage] = useState(0);
    const [isInView, setIsInView] = useState(false);
    const [isPreloaded, setIsPreloaded] = useState(false);
    const images = Array.from({ length: 81 }, (_, i) => `/FirstQuarterwebp/${i.toString().padStart(4, '0')}.webp`);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end start'],
    });

    const prevSectionRef = useRef(null);

    useEffect(() => {
        if (!isPreloaded) return;

        const unsubscribe = scrollYProgress.on('change', (latest) => {
            const prev = prevSectionRef.current;

            if (latest < 0.33 && prev !== 'first') {
                prevSectionRef.current = 'first';
                playImageSequence(0, 1, setCurrentImage);
            } else if (latest >= 0.33 && latest < 0.34 && prev !== 'second') {
                prevSectionRef.current = 'second';
                playImageSequence(1, 41, setCurrentImage);
            } else if (latest >= 0.66 && prev !== 'third') {
                prevSectionRef.current = 'third';
                playImageSequence(41, 80, setCurrentImage);
            }
        });

        return () => unsubscribe();
    }, [scrollYProgress, isPreloaded]);

    function playImageSequence(startIndex, endIndex, setImageIndex, delay = 30) {
        let current = startIndex;
        function animate() {
            setImageIndex(current);
            if (current < endIndex) {
                current++;
                requestAnimationFrame(() => {
                    setTimeout(animate, delay);
                });
            }
        }
        animate();
    }

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

        images.forEach((src) => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === images.length) {
                    setIsPreloaded(true);
                }
            };
            img.onerror = () => {
                console.error(`Failed to load image: ${src}`);
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
                {isInView && isPreloaded && currentImage === 1 && (
                    <>
                        <motion.img
                            key="akaza"
                            src={akaza}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.8 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[40%] z-10 pointer-events-none"
                            style={{ maxWidth: '600px' }}
                        />
                        <motion.img
                            key="akaza-name"
                            src={akazaName}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.8 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="fixed -bottom-[100px] left-[550px] -translate-x-1/2 w-[60%] z-10 pointer-events-none"
                        />
                    </>
                )}

                {isInView && isPreloaded && currentImage === 41 && (
                    <>
                        <motion.img
                            key="daki"
                            src={dakiGyutaro}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.8 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="fixed bottom-[5%] left-1/2 -translate-x-1/2 w-[50%] z-10 pointer-events-none"
                        />
                        <motion.img
                            key="daki-name"
                            src={dakiGyutaroName}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.8 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="fixed bottom-0 left-[550px] -translate-x-1/2 w-[60%] z-10 pointer-events-none"
                        />
                    </>
                )}

                {isInView && isPreloaded && currentImage === 80 && (
                    <>
                        <motion.img
                            key="gyokko"
                            src={gyokko}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.8 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="fixed bottom-[5%] left-1/2 -translate-x-1/2 w-[50%] z-10 pointer-events-none"
                        />
                        <motion.img
                            key="gyokko-name"
                            src={gyokkoName}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.8 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="fixed -bottom-[50px] left-[550px] -translate-x-1/2 w-[60%] z-10 pointer-events-none"
                        />
                    </>
                )}
            </AnimatePresence>
        </section>
    );
}

export default FirstQuarterIntro;
