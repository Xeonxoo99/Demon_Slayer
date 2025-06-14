# 250614

1. Section1
- 첫 opacity 켜지는 거 찾아서 제거
- 나머지 scale, opacity

2. Section3
하단의 코드 적용
https://nayea.vercel.app/about

3. Section4
framer 이용하여
스크롤로 useInView 써서 이 섹션 도착하면 사각형 width값 커지게

----------------------------------------------------------------------


4. Section6
위로 휠했을때는 반대로


import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Arrow from "@/components/svg/Arrow";

const Section02 = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // 스프링 효과를 사용하여 스크롤 진행도에 지연 효과 추가
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50, // 낮을수록 더 부드러운 효과 (기본값 100)
    damping: 20, // 높을수록 더 빨리 멈춤 (기본값 10)
    mass: 1, // 높을수록 더 무거운 느낌 (기본값 1)
  });

  // 이미지가 컨테이너 내에서만 움직이도록 범위 조정
  const parallaxY = useTransform(smoothProgress, [0, 1], ["0%", "-10%"]);

  return (
    <div
      ref={sectionRef}
      className="w-full h-[330px] relative overflow-hidden flex items-center justify-center"
    >
      {/* 패럴랙스 이미지 컨테이너 - 이미지를 담는 오버사이즈 컨테이너 */}
      <motion.div
        className="absolute inset-0 w-full h-[140%] -top-[20%]" // 이미지 컨테이너를 더 크게 만들고 위치 조정
        style={{ y: parallaxY }}
        initial={{ opacity: 0.9 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Image
          src="/images/sub/about/about_parallax_bg.jpg"
          alt="About Background"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center top",
            width: "100%",
            height: "100%",
          }}
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </motion.div>

      {/* 콘텐츠 영역 */}
      <motion.div
        className="relative z-10 text-white px-10 lg:px-40 flex justify-between items-center w-full "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div>
          <h2 className="text-3xl lg:text-6xl en400 mb-4 leading-tight">R&D</h2>
          <p className="opacity-70 font-light md:text-xl">
            나예코스메틱의 R&D를 확인해보세요!
          </p>
        </div>
        <div className="group">
          <Link href="/rnd">
            <div className="w-24 h-24 rounded-full border border-white flex items-center justify-center relative overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-white transform scale-0 transition-transform duration-300 group-hover:scale-110 group-hover rounded-full"></div>
              <Arrow
                size="lg"
                color="currentColor"
                className="w-12 h-12 relative z-10 group-hover:text-black transition-colors duration-300"
              />
            </div>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Section02;


# 귀멸의 칼날

## 🛠

## MainIntro

- 각 캐릭터들의 위치 수정
- 악귀멸살 텍스트가 너무 빨리 사라짐

## StorySection1

- 각 캐릭터와 요소들의 opacity 0~1 구간 수정 필요

## StorySection2

- 다음 섹션으로 넘어갈 때 아래 위치한 돌이 다음섹션과 함께 움직여야함

## SlideTxt

## Serise

- 효과 추가 필요

## Movie

- 효과 추가 필요

## Pillars

- 효과 추가 필요

## ProductionIntro

- 효과 추가 필요