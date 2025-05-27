import React, { useRef, useState, useEffect } from 'react';
import { useScroll, useTransform, motion, AnimatePresence } from 'framer-motion';
import bg from '../images/story1/배경.png';

// 탄지로 & 네즈코
import bns from '../images/story1/탄지로와 네즈코.png';
import tanjiroTitle1 from '../images/story1/제목1.png';
import tanjiroTitle2 from '../images/story1/제목2.png';
import tanjiro from '../images/story1/탄지로.png';

// 젠이츠
import zenitsu from '../images/story1/젠이츠.png';
import zenitsu1 from '../images/story1/젠이츠2.png';
import zenitsu2 from '../images/story1/젠이츠3.png';
import zenitsuTitle1 from '../images/story1/제목3.png';
import zenitsuTitle2 from '../images/story1/제목4.png';

// 이노스케
import inosuke from '../images/story1/이노스케.png';
import inosuke1 from '../images/story1/이노스케2.png';
import inosuke2 from '../images/story1/이노스케3.png';
import inosukeTitle1 from '../images/story1/제목5.png';
import inosukeTitle2 from '../images/story1/제목6.png';

function StorySection1() {
    const containerRef = useRef(null);
    const tanjiroRef = useRef(null);
    const zenitsuRef = useRef(null);
    const inosukeRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'start end'],
    });

    const { scrollYProgress: tanjiroProgress } = useScroll({
        target: tanjiroRef,
        offset: ['start end', 'end start'],
    });
    const { scrollYProgress: zenitsuProgress } = useScroll({
        target: zenitsuRef,
        offset: ['start end', 'end start'],
    });
    const { scrollYProgress: inosukeProgress } = useScroll({
        target: inosukeRef,
        offset: ['start end', 'end start'],
    });

    // 메인 콘텐츠 opacity
    const zenitsuOpacity = useTransform(zenitsuProgress, [0, 0.5, 0.65, 1], [0, 1, 1, 0]);
    const inosukeOpacity = useTransform(inosukeProgress, [0, 0.5, 0.65, 1], [0, 1, 1, 0]);

    // 설명 및 제목 표시 상태
    const [showZenitsuDescription, setShowZenitsuDescription] = useState(false);
    const [showInosukeDescription, setShowInosukeDescription] = useState(false);
    const [showZenitsuTitles, setShowZenitsuTitles] = useState(false);
    const [showInosukeTitles, setShowInosukeTitles] = useState(false);

    // 스크롤 진행도에 따라 설명 및 제목 표시
    useEffect(() => {
        const unsubscribeZenitsu = zenitsuProgress.on('change', (latest) => {
            setShowZenitsuDescription(latest >= 0.5);
            setShowZenitsuTitles(latest <= 0.5);
        });
        const unsubscribeInosuke = inosukeProgress.on('change', (latest) => {
            setShowInosukeDescription(latest >= 0.4);
            setShowInosukeTitles(latest <= 0.4);
        });
        return () => {
            unsubscribeZenitsu();
            unsubscribeInosuke();
        };
    }, [zenitsuProgress, inosukeProgress]);

    // 탄지로 스크롤
    const tanjiroBnsY = useTransform(tanjiroProgress, [0, 1], [0, -200]); 
    const tanjiroTitle1Y = useTransform(tanjiroProgress, [0, 1], [0, -300]); 
    const tanjiroImgY = useTransform(tanjiroProgress, [0, 1], [0, -500]); 
    const tanjiroDescY = useTransform(tanjiroProgress, [0, 1], [0, -350]); 
    // 젠이츠 스크롤
    const zenitsuImgY = useTransform(zenitsuProgress, [0.3, 0.7], [0, -200]); 
    const zenitsu1Y = useTransform(zenitsuProgress, [0.3, 0.7], [0, -100]); 
    const zenitsuTitle1Y = useTransform(zenitsuProgress, [0.3, 0.7], [0, -250]);
    const zenitsu2Y = useTransform(zenitsuProgress, [0.3, 0.7], [0, -150]);
    const zenitsuDescY = useTransform(zenitsuProgress, [0.3, 0.7], [0, -250]); 
     // 이노스케 스크롤
    const inosukeImgY = useTransform(inosukeProgress, [0.4, 0.7], [0, -400]); 
    const inosuke1Y = useTransform(inosukeProgress, [0.4, 0.7], [0, -300]);
    const inosuke2Y = useTransform(inosukeProgress, [0.4, 0.7], [0, -600]);
    const inosukeTitle1Y = useTransform(inosukeProgress, [0.4, 0.7], [0, -550]); 
    const inosukeTitle2Y = useTransform(inosukeProgress, [0.4, 0.7], [0, -350]); 
    const inosukeDescY = useTransform(inosukeProgress, [0.4, 0.7], [0, -300]); 
     return (
        <motion.section
            className='relative w-full h-[2940px]'
            ref={containerRef}
            style={{
                backgroundImage: `url(${bg})`,
                backgroundAttachment: 'fixed',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                zIndex: 99,
            }}
        >
            {/* 탄지로와 네즈코 */}
            <div className='relative w-full h-[980px]' ref={tanjiroRef}>
                <motion.div className="absolute top-0 left-0 w-full h-screen">
                    <motion.img
                        src={bns}
                        alt="탄지로와 네즈코"
                        className="absolute top-1/3 right-[450px] -translate-y-1/2 w-auto max-w-full h-auto object-contain z-10"
                        style={{ y: tanjiroBnsY }}
                    />
                    <motion.img
                        src={tanjiroTitle1}
                        alt="tanjiroTitle1"
                        className="absolute top-[165px] right-[250px] w-auto max-w-full h-auto object-contain z-10"
                        style={{ y: tanjiroTitle1Y }}
                    />
                    <motion.img
                        src={tanjiroTitle2}
                        alt="tanjiroTitle2"
                        className="absolute top-[220px] right-[130px] w-auto max-w-full h-auto object-contain z-10"
                        style={{ y: tanjiroTitle1Y }}
                    />
                    <motion.div
                        className="absolute top-[720px] left-[215px]"
                        style={{ y: tanjiroImgY }}
                    >
                        <img
                            src={tanjiro}
                            alt="tanjiro"
                            className="w-auto max-w-full h-auto object-contain"
                        />
                    </motion.div>
                    <motion.div
                        className="absolute w-[450px] h-[170px] top-[270px] left-[215px] z-10 flex flex-col gap-2"
                        style={{ y: tanjiroDescY }}
                    >
                        <h4 className="text-[#f42e35] text-xl font-bold">탄지로&네즈코</h4>
                        <h2
                            className="text-[#ffffff] text-[35px] font-bold"
                            style={{ letterSpacing: '-2px' }}
                        >
                            가족을 잃고, 혈귀가 된 여동생
                        </h2>
                        <p
                            className="text-[#ffffff] text-[16px]"
                            style={{ letterSpacing: '-1.3px' }}
                        >
                            탄지로는 오니에게 가족을 몰살당하고, 유일한 생존자인 여동생 네즈코가
                            <br />
                            혈귀로 변한 것을 발견한다. 이후 네즈코를 척살하려는 귀살대원에게서
                            <br />
                            동생을 지켜내려고 한다.
                        </p>
                    </motion.div>
                </motion.div>
            </div>

            {/* 젠이츠 */}
            <div className='relative w-full h-[980px]' ref={zenitsuRef}>
                <motion.div
                    className="absolute h-[100vh] top-0 left-0 w-full"
                    style={{ opacity: zenitsuOpacity }}
                >
                    <motion.img
                        src={zenitsu}
                        alt="zenitsu"
                        className="absolute top-1/3 right-[50px] -translate-y-1/2 w-auto max-w-full h-auto object-contain z-10"
                        style={{ y: zenitsuImgY }}
                    />
                    <motion.div
                        className="absolute top-[120px] left-[280px]"
                        style={{ y: zenitsu1Y }}
                    >
                        <img
                            src={zenitsu1}
                            alt="zenitsu1"
                            className="w-auto max-w-full h-auto object-contain"
                        />
                    </motion.div>
                    <motion.div
                        className="absolute bottom-[70px] left-[650px]"
                        style={{ y: zenitsu2Y }}
                    >
                        <img
                            src={zenitsu2}
                            alt="zenitsu2"
                            className="w-auto max-w-full h-auto object-contain"
                        />
                    </motion.div>
                    <AnimatePresence mode="wait">
                        {showZenitsuTitles && (
                            <motion.div
                                key="zenitsu-titles"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <motion.img
                                    src={zenitsuTitle1}
                                    alt="zenitsuTitle1"
                                    className="absolute bottom-[310px] left-[370px] w-auto max-w-full h-auto object-contain z-10"
                                    style={{ y: zenitsuTitle1Y }}
                                />
                                <motion.img
                                    src={zenitsuTitle2}
                                    alt="zenitsuTitle2"
                                    className="absolute bottom-[190px] left-[370px] w-auto max-w-full h-auto object-contain z-10"
                                    style={{ y: zenitsuTitle1Y }}
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <AnimatePresence mode="wait">
                        {showZenitsuDescription && (
                            <motion.div
                                key="zenitsu-description"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute w-[450px] h-[170px] bottom-[190px] left-[370px] z-10 flex flex-col gap-2"
                                style={{ y: zenitsuDescY }}
                            >
                                <h4 className="text-[#f42e35] text-xl font-bold">젠이츠</h4>
                                <h2
                                    className="text-white text-[35px] font-bold"
                                    style={{ letterSpacing: '-2px' }}
                                >
                                    번개의 호흡을 사용하는 소년
                                </h2>
                                <p
                                    className="text-white text-[16px]"
                                    style={{ letterSpacing: '-1.3px' }}
                                >
                                    젠이츠는 겁이 많지만, 위기 상황에서 잠재된 힘을 발휘한다.
                                    <br />
                                    스승의 죽음에 대한 단서를 찾아내고, 스승의 복수를 위해
                                    <br />
                                    사형인 카이가쿠를 찾으러 간다.
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* 이노스케 */}
            <div className='relative w-full h-[980px]' ref={inosukeRef}>
                <motion.div
                    className="absolute top-0 left-0 w-full h-[100vh]"
                    style={{ opacity: inosukeOpacity }}
                >
                    <motion.img
                        src={inosuke}
                        alt="inosuke"
                        className="absolute top-1/4 left-[120px] -translate-y-1/2 w-auto max-w-full h-auto object-contain z-10"
                        style={{ y: inosukeImgY }}
                    />
                    <AnimatePresence mode="wait">
                        {showInosukeTitles && (
                            <motion.div
                                key="inosuke-titles"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <motion.img
                                    src={inosukeTitle1}
                                    alt="inosukeTitle1"
                                    className="absolute bottom-[330px] left-[960px] w-auto max-w-full h-auto object-contain z-10"
                                    style={{ y: inosukeTitle1Y }}
                                />
                                <motion.img
                                    src={inosukeTitle2}
                                    alt="inosukeTitle2"
                                    className="absolute bottom-[205px] left-[960px] w-auto max-w-full h-auto object-contain z-10"
                                    style={{ y: inosukeTitle2Y }}
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <motion.div
                        className="absolute top-[80px] right-[490px]"
                        style={{ y: inosuke1Y }}
                    >
                        <img
                            src={inosuke1}
                            alt="inosuke1"
                            className="w-auto max-w-full h-auto object-contain"
                        />
                    </motion.div>
                    <motion.div
                        className="absolute bottom-[120px] right-[280px]"
                        style={{ y: inosuke2Y }}
                    >
                        <img
                            src={inosuke2}
                            alt="inosuke2"
                            className="w-auto max-w-full h-auto object-contain"
                        />
                    </motion.div>
                    <AnimatePresence mode="wait">
                        {showInosukeDescription && (
                            <motion.div
                                key="inosuke-description"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute w-[450px] h-[170px] bottom-[205px] left-[960px] z-10 flex flex-col gap-2"
                                style={{ y: inosukeDescY }}
                            >
                                <h4 className="text-[#f42e35] text-xl font-bold">이노스케</h4>
                                <h2
                                    className="text-white text-[35px] font-bold"
                                    style={{ letterSpacing: '-2px' }}
                                >
                                    짐승의 호흡을 사용하는 소년
                                </h2>
                                <p
                                    className="text-white text-[16px]"
                                    style={{ letterSpacing: '-1.3px' }}
                                >
                                    이노스케는 어릴 때부터 산에서 멧돼지에게 길러져 짐승의 호흡을
                                    <br />
                                    사용한다. 상현二 도우마를 만나게 되며, 진짜 부모에 대한
                                    <br />
                                    진실을 알게 되며 자신을 알아간다.
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </motion.section>
    );
}

export default StorySection1;