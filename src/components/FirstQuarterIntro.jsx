// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// import leftDoor1 from '../images/firstquarter/leftdoor1.png';
// import leftDoor2 from '../images/firstquarter/왼쪽문2.png';
// import rightDoor1 from '../images/firstquarter/오른쪽 문 1.png';
// import rightDoor2 from '../images/firstquarter/오른쪽 문 2.png';
// import bg from '../images/firstquarter/배경.png';

// import akaza from '../images/firstquarter/아카자.png'
// import akazaName from '../images/firstquarter/아카자 이름.png'

// import dakiGyutaro from '../images/firstquarter/다키규타로.png'
// import dakiGyutaroName from '../images/firstquarter/다키 규타로 이름.png'

// import gyokko from '../images/firstquarter/쿗코.png'
// import gyokkoName from '../images/firstquarter/쿗코 이름.png'

// // GSAP ScrollTrigger 등록
// gsap.registerPlugin(ScrollTrigger);

// function FirstQuarterIntro() {
//     const sectionRef = useRef(null);
//     const leftDoor2Ref = useRef(null);
//     const rightDoor2Ref = useRef(null);
//     const leftDoor1Ref = useRef(null);
//     const rightDoor1Ref = useRef(null);
//     const bgRef = useRef(null);

//     const akazaRef = useRef(null);
//     const dakiRef = useRef(null);
//     const gyokkoRef = useRef(null);

//     useEffect(() => {
//         const section = sectionRef.current;
//         const vw = window.innerWidth;
//         gsap.to(bgRef.current, {
//             opacity: 1,
//             scrollTrigger: {
//                 trigger: section,
//                 start: '+=100%', // 문 닫힐 때
//                 end: '+=100%',
//                 scrub: true,
//             },
//         });
//         // Door2 애니메이션 (왼쪽문1: -1/4 -> 1/4, 오른쪽문2: +1/4 -> 4/4)
//         gsap.fromTo(
//             leftDoor1Ref.current,
//             { x: -vw / 4 }, // 시작: -1/4
//             {
//                 x: 0, // 끝: 1/4
//                 ease: 'none',
//                 scrollTrigger: {
//                     trigger: section,
//                     start: 'top top',
//                     end: '+=100%',
//                     scrub: true,
//                 },
//             }
//         );

//         gsap.fromTo(
//             rightDoor2Ref.current,
//             { x: vw / 4 }, // 시작: +1/4
//             {
//                 x: 0, // 끝: 4/4 (right-0)
//                 ease: 'none',
//                 scrollTrigger: {
//                     trigger: section,
//                     start: 'top top',
//                     end: '+=100%',
//                     scrub: true,
//                 },
//             }
//         );

//         // Door1 애니메이션 (왼쪽문2: -1/4 -> 2/4, 오른쪽문1: +1/4 -> 3/4)
//         gsap.fromTo(
//             leftDoor2Ref.current,
//             { x: -vw / 4 }, // 시작: -1/4
//             {
//                 x: vw / 4, // 끝: 2/4
//                 ease: 'none',
//                 scrollTrigger: {
//                     trigger: section,
//                     start: '+=100%',
//                     end: '+=200%',
//                     scrub: true,
//                 },
//             }
//         );

//         gsap.fromTo(
//             rightDoor1Ref.current,
//             { x: vw / 4 }, // 시작: +1/4
//             {
//                 x: -vw / 4, // 끝: 3/4
//                 ease: 'none',
//                 scrollTrigger: {
//                     trigger: section,
//                     start: '+=100%',
//                     end: '+=200%',
//                     scrub: true,
//                 },
//             }
//         );

//         // 1단계: leftDoor2 & rightDoor1 먼저 열림
//         gsap.fromTo(
//             leftDoor2Ref.current,
//             { x: vw / 4 },
//             {
//                 x: -vw / 4,
//                 ease: 'none',
//                 scrollTrigger: {
//                     trigger: section,
//                     start: '+=200%',
//                     end: '+=250%',
//                     scrub: true,
//                 },
//             }
//         );

//         gsap.fromTo(
//             rightDoor1Ref.current,
//             { x: -vw / 4 },
//             {
//                 x: vw / 4,
//                 ease: 'none',
//                 scrollTrigger: {
//                     trigger: section,
//                     start: '+=200%',
//                     end: '+=250%',
//                     scrub: true,
//                 },
//             }
//         );

//         // 2단계: leftDoor1 & rightDoor2 나중에 열림
//         gsap.fromTo(
//             leftDoor1Ref.current,
//             { x: 0 },
//             {
//                 x: -vw / 4,
//                 ease: 'none',
//                 scrollTrigger: {
//                     trigger: section,
//                     start: '+=250%',
//                     end: '+=300%',
//                     scrub: true,
//                 },
//             }
//         );

//         gsap.fromTo(
//             rightDoor2Ref.current,
//             { x: 0 },
//             {
//                 x: vw / 4,
//                 ease: 'none',
//                 scrollTrigger: {
//                     trigger: section,
//                     start: '+=250%',
//                     end: '+=300%',
//                     scrub: true,
//                 },
//             }
//         );

//         gsap.utils.toArray([
//             { el: akazaRef.current, start: '+=500%', end: '+=600%' },
//             { el: dakiRef.current, start: '+=601%', end: '+=700%' },
//             { el: gyokkoRef.current, start: '+=701%', end: '+=800%' },
//         ]).forEach(({ el, start, end }) => {
//             gsap.fromTo(
//                 el,
//                 { opacity: 0 },
//                 {
//                     opacity: 1,
//                     scrollTrigger: {
//                         trigger: section,
//                         start,
//                         end,
//                         scrub: true,
//                     },
//                 }
//             );

//             gsap.to(el, {
//                 opacity: 0,
//                 scrollTrigger: {
//                     trigger: section,
//                     start: end,
//                     end: `+=50%`,
//                     scrub: true,
//                 },
//             });
//         });

//         // 컴포넌트 언마운트 시 ScrollTrigger 정리
//         return () => {
//             ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//         };
//     }, []);

//     return (
//         <div className="h-[1200vh] bg-black">
//             <section
//                 ref={sectionRef}
//                 className="w-full h-[980px] bg-[#000000] sticky top-0 overflow-hidden"
//                 style={{ zIndex: 30 }}
//             >
//                 <div className="w-full h-full relative">
//                     <img
//                         ref={leftDoor1Ref}
//                         src={leftDoor1}
//                         alt="leftDoor1"
//                         className="absolute top-0 left-0 w-1/4 h-full object-cover z-30"
//                     />
//                     <img
//                         ref={rightDoor2Ref}
//                         src={rightDoor2}
//                         alt="rightDoor2"
//                         className="absolute top-0 right-0 w-1/4 h-full object-cover z-30"
//                     />

//                     <img
//                         ref={leftDoor2Ref}
//                         src={leftDoor2}
//                         alt="leftDoor2"
//                         className="absolute top-0 left-0 w-1/4 h-full object-cover z-20"
//                     />
//                     <img
//                         ref={rightDoor1Ref}
//                         src={rightDoor1}
//                         alt="rightDoor1"
//                         className="absolute top-0 right-0 w-1/4 h-full object-cover z-20"
//                     />

//                     <div ref={akazaRef} className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 z-50">
//                         <img src={akaza} alt="akaza" className='absolute top-[148px] left-1/2 -translate-x-1/2 z-10'/>
//                         <img src={akazaName} alt="akazaName" className='absolute top-[265px] left-0 z-20' />
//                     </div>

//                     <div ref={dakiRef} className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 z-50">
//                         <img src={dakiGyutaro} alt="dakiGyutaro" className='absolute -top-[4px] left-1/2 -translate-x-1/2 z-10'/>
//                         <img src={dakiGyutaroName} alt="dakiGyutaroName" className='absolute top-[372px] left-0 z-20' />
//                     </div>

//                     <div ref={gyokkoRef} className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 z-50">
//                         <img src={gyokko} alt="gyokko" className='absolute top-[148px] left-1/2 -translate-x-1/2 z-10'/>
//                         <img src={gyokkoName} alt="gyokkoName" className='absolute top-[342px] left-0 z-20' />
//                     </div>


//                     <img
//                         ref={bgRef}
//                         src={bg}
//                         alt="bg"
//                         className="absolute top-0 left-0 w-full h-full object-cover z-10 opacity-0"
//                     />
//                 </div>
//             </section>
//         </div>
//     );
// }

// export default FirstQuarterIntro;