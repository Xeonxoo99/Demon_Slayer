import React from 'react'
import bg from '../images/movie/bg.png'

function Movie() {
    return (
        <section className='relative w-full h-[980px] bg-[#000000]'
            style={{ zIndex: 30, fontFamily: 'Pretendard-Regular' }}
        >

            {/* 위 */}
            <div
                className="absolute w-[1390px] h-[635px] top-[47px] left-[23px] text-[95px] text-[#ffffff] z-20 flex flex-col"
                style={{ letterSpacing: '-2.4px', lineHeight: '110px' }}
            >
                <div><span className="inline-block">전 세계 흥행수익,</span></div>
                <div><span className="inline-block">일본 역사상 최다 관객 동원</span></div>
                <div><span className="inline-block">애니메이션 최초 일본 아카데미상 수상,</span></div>
                <div><span className="inline-block">블루레이 & DVD 판매량 1위</span></div>
                <div><span className="inline-block">단권 만화 판매 세계 1위,</span></div>
                <div><span className="inline-block">TV 애니메이션 최고 시청률</span></div>
            </div>

            {/* 아래 */}
            {/* 전 세계 흥행 수익 */}
            <div className="absolute bottom-[23px] left-[23px] w-full h-auto text-[#ffffff] z-20">
                <div className="flex items-center gap-[30px]">
                    <span className="font-bold text-[120px] leading-none">¥ 500M</span>
                    <div className="flex flex-col justify-between h-[120px]">
                        <span className="text-[52px] w-fit h-fit flex items-start justify-center">
                            +
                        </span>
                        <span className="text-[14px] w-fit h-fit leading-[3px] pb-5 flex items-start">
                            전 세계 흥행수익
                        </span>
                    </div>
                </div>
            </div>
            
            <div className="absolute bottom-[23px] left-[677px] w-full h-auto text-[#ffffff] z-20">
                <div className="flex items-center gap-[30px]">
                    <span className="font-bold text-[120px] leading-none">2M</span>
                    <div className="flex flex-col justify-between h-[120px]">
                        <span className="text-[52px] w-fit h-fit flex items-start justify-center">
                            +
                        </span>
                        <span className="text-[14px] w-fit h-fit leading-[3px] pb-5 flex items-start">
                            일본 관객 동원
                        </span>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-[23px] left-[1072px] w-full h-auto text-[#ffffff] z-20">
                <div className="flex items-center gap-[30px]">
                    <span className="font-bold text-[120px] leading-none">1.5M</span>
                    <div className="flex flex-col justify-between h-[120px]">
                        <span className="text-[52px] w-fit h-fit flex items-start justify-center">
                            +
                        </span>
                        <span className="text-[14px] w-fit h-fit leading-[3px] pb-5 flex items-start">
                            단일권 만화 판매량
                        </span>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-[23px] left-[1502px] w-full h-auto text-[#ffffff] z-20">
                <div className="flex items-center gap-[30px]">
                    <span className="font-bold text-[120px] leading-none">21.4%</span>
                    <div className="flex flex-col justify-between h-[120px]">
                        <span className="text-[52px] w-fit h-fit flex items-start justify-center">
                            +
                        </span>
                        <span className="text-[14px] w-fit h-fit leading-[3px] pb-5 flex items-start">
                            시청률
                        </span>
                    </div>
                </div>
            </div>

            <div className='w-full h-full bg-[#000000] opacity-50 z-10'>
                <img src={bg} alt="bg" />
            </div>
        </section>
    )
}

export default Movie
