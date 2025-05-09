import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import bg from '../images/story1/배경.png';

// 탄지로 & 네즈코
import bns from '../images/story1/탄지로와 네즈코.png';
import tanjiroTitle1 from '../images/story1/제목1.png';
import tanjiroTitle2 from '../images/story1/제목2.png';
import tanjiro from '../images/story1/탄지로.png';

// 젠이츠
import zenitsu from '../images/story1/젠이츠.png';
import zenitsu1 from '../images/story1/젠이츠2.png';
import zenitsu2 from '../images/story1/젠이츠3.png'
import zenitsuTitle1 from '../images/story1/제목3.png';
import zenitsuTitle2 from '../images/story1/제목4.png';

// 이노스케
import inosuke from '../images/story1/이노스케.png'
import inosuke1 from '../images/story1/이노스케2.png'
import inosuke2 from '../images/story1/이노스케3.png'
import inosukeTitle1 from '../images/story1/제목5.png'
import inosukeTitle2 from '../images/story1/제목6.png'

function StorySection1() {
    const containerRef = useRef(null);
    const tanjiroRef = useRef(null);
    const zenitsuRef = useRef(null);
    const inosukeRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
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


// 탄지로: 0.05 ~ 0.25 보여지고, 0.26부터 사라짐
const tanjiroOpacity = useTransform(scrollYProgress, [0.05, 0.25, 0.26], [1, 1, 0]);

// 젠이츠: 0.3 ~ 0.7 보여지고, 0.71부터 사라짐
const zenitsuOpacity = useTransform(scrollYProgress, [0.3, 0.7, 0.71], [0, 1, 0]);
const zenitsuTitleOpacity = useTransform(scrollYProgress, [0.3, 0.5, 0.51], [1, 1, 0]);
const zenitsuDescriptionOpacity = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);

// 이노스케: 0.7 ~ 1.0 보여지고, 1.0에서 사라짐
const inosukeOpacity = useTransform(scrollYProgress, [0.7, 1.0, 1.0], [0, 1, 0]);
const inosukeTitleOpacity = useTransform(scrollYProgress, [0.7, 0.85, 0.86], [1, 1, 0]);
const inosukeDescriptionOpacity = useTransform(scrollYProgress, [0.85, 1.0], [0, 1]);



    return (
        <motion.section
            ref={containerRef}
            style={{
                height: '1000vh',
                zIndex: 0,
            }}
        >
            {/* 배경 이미지 */}
            <img
                src={bg}
                alt="bg"
                className="w-full h-screen object-cover fixed top-0 left-0"
                style={{ zIndex: 0 }}
            />

            {/* 탄지로와 네즈코 */}
            <motion.div
                style={{ opacity: tanjiroOpacity }}
                className="fixed top-0 left-0 w-full h-screen bg-[rgba(0,0,0,0.3)]"
            >
                {/* 메인 이미지 */}
                <motion.img
                    src={bns}
                    alt="탄지로와 네즈코"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, ease: 'easeInOut', delay: 0 }}
                    className="fixed top-1/2 right-[450px] -translate-y-1/2 w-auto max-w-full h-auto object-contain z-10"
                />
                {/* 제목 */}
                <img
                    src={tanjiroTitle1}
                    alt="tanjiroTitle1"
                    className="fixed top-[165px] right-[250px] w-auto max-w-full h-auto object-contain z-10"
                />
                <img
                    src={tanjiroTitle2}
                    alt="tanjiroTitle2"
                    className="fixed top-[220px] right-[130px] w-auto max-w-full h-auto object-contain z-10"
                />
                {/* 서브 이미지 */}
                <div
                    className="fixed bottom-[220px] left-[215px]"
                >
                    <img
                        src={tanjiro}
                        alt="tanjiro"
                        className="w-auto max-w-full h-auto object-contain"
                    />
                </div>
                {/* 설명 */}
                <div className="fixed w-[450px] h-[170px] top-[270px] left-[215px] z-10 flex flex-col gap-2">
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
                </div>
            </motion.div>

            {/* 젠이츠 */}
            <motion.div
                style={{ opacity: zenitsuOpacity }}
                className="fixed h-[300vh] top-0 left-0 w-full  bg-[rgba(0,0,0,0.3)]"
            >
                {/* 메인 이미지 */}
                <img
                    src={zenitsu}
                    alt="zenitsu"
                    className="fixed top-1/2 right-[50px] -translate-y-1/2 w-auto max-w-full h-auto object-contain z-10"
                />
                {/* 제목 */}
                <motion.div style={{ opacity: zenitsuTitleOpacity }}>
                    <img
                        src={zenitsuTitle1}
                        alt="zenitsuTitle1"
                        className="fixed bottom-[310px] left-[370px] w-auto max-w-full h-auto object-contain z-10"
                    />
                    <img
                        src={zenitsuTitle2}
                        alt="zenitsuTitle2"
                        className="fixed bottom-[190px] left-[370px] w-auto max-w-full h-auto object-contain z-10"
                    />
                </motion.div>
                {/* 서브 이미지 */}
                <div
                    className="fixed top-[120px] left-[280px]"
                >
                    <img
                        src={zenitsu1}
                        alt="zenitsu1"
                        className="w-auto max-w-full h-auto object-contain"
                    />
                </div>
                <div
                    className="fixed bottom-[70px] left-[650px]"
                >
                    <img
                        src={zenitsu2}
                        alt="zenitsu2"
                        className="w-auto max-w-full h-auto object-contain"
                    />
                </div>
                {/* 설명 */}
                <motion.div
                    style={{ opacity: zenitsuDescriptionOpacity }}
                    className="fixed w-[450px] h-[170px] bottom-[190px] left-[370px] z-10 flex flex-col gap-2"
                >
                    <h4 className="text-[#f42e35] text-xl font-bold">젠이츠</h4>
                    <h2 className="text-white text-[35px] font-bold" style={{ letterSpacing: '-2px' }}>
                        번개의 호흡을 사용하는 소년
                    </h2>
                    <p className="text-white text-[16px]" style={{ letterSpacing: '-1.3px' }}>
                        젠이츠는 겁이 많지만, 위기 상황에서 잠재된 힘을 발휘한다.
                        <br />
                        스승의 죽음에 대한 단서를 찾아내고, 스승의 복수를 위해
                        <br />
                        사형인 카이가쿠를 찾으러간다.
                    </p>
                </motion.div>
            </motion.div>

            {/* 이노스케 */}
            <motion.div
                style={{ opacity: inosukeOpacity }}
                className="fixed top-0 left-0 w-full h-[300vh] bg-[rgba(0,0,0,0.3)]"
            >
                {/* 메인 이미지 */}
                <img
                    src={inosuke}
                    alt="inosuke"
                    className="fixed top-1/2 left-[120px] -translate-y-1/2 w-auto max-w-full h-auto object-contain z-10"
                />
                {/* 제목 */}
                <motion.div style={{ opacity: inosukeTitleOpacity }}>
                    <img
                        src={inosukeTitle1}
                        alt="inosukeTitle1"
                        className="fixed bottom-[330px] left-[960px] w-auto max-w-full h-auto object-contain z-10"
                    />
                    <img
                        src={inosukeTitle2}
                        alt="inosukeTitle2"
                        className="fixed bottom-[205px] left-[960px] w-auto max-w-full h-auto object-contain z-10"
                    />
                </motion.div>
                {/* 서브 이미지 */}
                <div
                    className="fixed top-[80px] right-[490px]"
                >
                    <img
                        src={inosuke1}
                        alt="inosuke1"
                        className="w-auto max-w-full h-auto object-contain"
                    />

                </div>
                <div
                    className="fixed bottom-[120px] right-[280px]"
                >
                    <img
                        src={inosuke2}
                        alt="inosuke2"
                        className="w-auto max-w-full h-auto object-contain"
                    />
                </div>
                {/* 설명 */}
                <motion.div
                    style={{ opacity: inosukeDescriptionOpacity }}
                    className="fixed w-[450px] h-[170px] bottom-[205px] left-[960px] z-10 flex flex-col gap-2"
                >
                    <h4 className="text-[#f42e35] text-xl font-bold">이노스케</h4>
                    <h2 className="text-white text-[35px] font-bold" style={{ letterSpacing: '-2px' }}>
                        짐승의 호흡을 사용하는 소년
                    </h2>
                    <p className="text-white text-[16px]" style={{ letterSpacing: '-1.3px' }}>
                        이노스케는 어릴 때부터 산에서 멧돼지에게 길러져 짐승의 호흡을
                        <br />
                        사용한다. 상현二 도우마를 만나게 되며, 진짜 부모에 대한
                        <br />
                        진실을 알게 되며 자신을 알아간다.
                    </p>
                </motion.div>
            </motion.div>
        </motion.section>
    );
}

export default StorySection1;