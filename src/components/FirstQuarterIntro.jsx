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
    const images = Array.from({ length: 81 }, (_, i) => `/FirstQuarterwebp/${i.toString().padStart(4, '0')}.webp`);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end start'],
    });

    const prevSectionRef = useRef(null);

    useEffect(() => {
        const unsubscribe = scrollYProgress.on('change', (latest) => {
            const prev = prevSectionRef.current;

            if (latest < 0.33 && prev !== 'first') {
                prevSectionRef.current = 'first';
                playImageSequence(0, 1, setCurrentImage);
            } else if (latest >= 0.33 && latest < 0.66 && prev !== 'second') {
                prevSectionRef.current = 'second';
                playImageSequence(1, 41, setCurrentImage);
            } else if (latest >= 0.66 && prev !== 'third') {
                prevSectionRef.current = 'third';
                playImageSequence(41, 80, setCurrentImage);
            }
        });

        return () => unsubscribe();
    }, [scrollYProgress]);

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

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            { threshold: 0 }
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

    useEffect(() => {
        if (!isInView) return;
        const loadedImages = [];

        images.forEach((src) => {
            const img = new Image();
            img.src = src;
            img.onerror = () => console.error(`Failed to load image: ${src}`);
            loadedImages.push(img);
        });

        return () => {
            loadedImages.forEach((img) => (img.src = ''));
        };
    }, [isInView]);

    // 현재 프레임에 따라 보여줄 캐릭터 결정
    let currentCharacter = null;
    if (currentImage === 1) currentCharacter = 'akaza';
    else if (currentImage === 41) currentCharacter = 'daki';
    else if (currentImage === 80) currentCharacter = 'gyokko';

    const characterData = {
        akaza: { image: akaza, name: akazaName },
        daki: { image: dakiGyutaro, name: dakiGyutaroName },
        gyokko: { image: gyokko, name: gyokkoName },
    };

    return (
        <section
            ref={sectionRef}
            className="relative w-full h-[1000vh] bg-black"
            style={{ zIndex: 30 }}
        >
            {/* 배경 시퀀스 이미지 */}
            {isInView && (
                <motion.img
                    key={currentImage}
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
                {currentImage === 1 && (
                    <>
                        <motion.img
                            key="akaza"
                            src={akaza}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[40%] z-10 pointer-events-none"
                        />
                        <motion.img
                            key="akaza-name"
                            src={akazaName}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="fixed -bottom-[100px] left-[550px] -translate-x-1/2 w-[60%] z-10 pointer-events-none"
                        />
                    </>
                )}

                {currentImage === 41 && (
                    <>
                        <motion.img
                            key="daki"
                            src={dakiGyutaro}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="fixed -bottom-[5%] left-1/2 -translate-x-1/2 w-[60%] z-10 pointer-events-none"
                        />
                        <motion.img
                            key="daki-name"
                            src={dakiGyutaroName}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="fixed -bottom-0 left-[470px] -translate-x-1/2 w-[50%] z-10 pointer-events-none"
                        />
                    </>
                )}

                {currentImage === 80 && (
                    <>
                        <motion.img
                            key="gyokko"
                            src={gyokko}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="fixed -bottom-[5%] left-1/2 -translate-x-1/2 w-[60%] z-10 pointer-events-none"
                        />
                        <motion.img
                            key="gyokko-name"
                            src={gyokkoName}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="fixed -bottom-0 left-[460px] -translate-x-1/2 w-[50%] z-10 pointer-events-none"
                        />
                    </>
                )}
            </AnimatePresence>
        </section>
    );
}

export default FirstQuarterIntro;
