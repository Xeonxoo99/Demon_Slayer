import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import leftdoor1 from '../images/pub/door/leftdoor1.png'
import leftdoor2 from '../images/pub/door/leftdoor2.png'
import rightdoor1 from '../images/pub/door/rightdoor1.png'
import rightdoor2 from '../images/pub/door/rightdoor2.png'

gsap.registerPlugin(ScrollTrigger)

export default function Doors() {
    const left1 = useRef(null)
    const left2 = useRef(null)
    const right1 = useRef(null)
    const right2 = useRef(null)

    useEffect(() => {
        // 스크롤 막기 / 복원 함수
        const disableScroll = () => {
            document.body.style.overflow = 'hidden'
        }

        const enableScroll = () => {
            document.body.style.overflow = ''
        }

        // 문 닫힘 (Pillars 끝나는 지점)
        gsap.timeline({
            scrollTrigger: {
                trigger: '.scroll-target-pillars',
                start: 'bottom bottom+=200',
                toggleActions: 'play none none reverse',
                markers: true,
                onEnter: () => {
                    disableScroll()
                    setTimeout(() => {
                        enableScroll()
                    }, 3000) // 2초 후 복원
                },
            },
        })
            .to(left1.current, { x: '26vw', duration: 1 }, 0)
            .to(right2.current, { x: '-26vw', duration: 1 }, 0)
            .to(left2.current, { x: '50vw', duration: 1 }, 1)
            .to(right1.current, { x: '-51vw', duration: 1 }, 1)

        // 문 열림 (스크롤 더 내린 시점)
        gsap.timeline({
            scrollTrigger: {
                trigger: '.scroll-target-pillars',
                start: 'bottom bottom-=1000',
                toggleActions: 'play none none reverse',
                markers: true,
            },
        })
            .to(left2.current, { x: '0vw', duration: 1 }, 0)
            .to(right1.current, { x: '0vw', duration: 1 }, 0)
            .to(left1.current, { x: '0vw', duration: 1 }, 1)
            .to(right2.current, { x: '0vw', duration: 1 }, 1)

        // 문 닫힘 (FirstQuarterIntro 진입 시점)
        gsap.timeline({
            scrollTrigger: {
                trigger: '.scroll-target-intro',
                start: 'bottom bottom+=500',
                toggleActions: 'play none none reverse',
                markers: true,
                onEnter: () => {
                    disableScroll()
                    setTimeout(() => {
                        enableScroll()
                    }, 3000) // 2초 후 복원
                },
            },
        })
            .to(left1.current, { x: '26vw', duration: 1 }, 0)
            .to(right2.current, { x: '-26vw', duration: 1 }, 0)
            .to(left2.current, { x: '50vw', duration: 1 }, 1)
            .to(right1.current, { x: '-51vw', duration: 1 }, 1)

        // 문 열림 (Intro 더 스크롤 시점)
        gsap.timeline({
            scrollTrigger: {
                trigger: '.scroll-target-intro',
                start: 'bottom bottom-=1000',
                toggleActions: 'play none none reverse',
                markers: true,
            },
        })
            .to(left2.current, { x: '0vw', duration: 1 }, 0)
            .to(right1.current, { x: '0vw', duration: 1 }, 0)
            .to(left1.current, { x: '0vw', duration: 1 }, 1)
            .to(right2.current, { x: '0vw', duration: 1 }, 1)

    }, [])

    return (
        <>
            <img ref={left1} src={leftdoor1} className="door left-1" />
            <img ref={left2} src={leftdoor2} className="door left-2" />
            <img ref={right1} src={rightdoor1} className="door right-1" />
            <img ref={right2} src={rightdoor2} className="door right-2" />
        </>
    )
}
