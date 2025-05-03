import React from 'react'

// 상단 이미지 섹션
import tanjiro from '../images/production/2.png'
import fire from '../images/production/3.png'
import purple from '../images/production/4.png'
import organization from '../images/production/5.png'
import zenitsu from '../images/production/6.png'
import tengen from '../images/production/7.png'
import kyojuro from '../images/production/8.png'
import pillars from '../images/production/9.png'
import akaza from '../images/production/11.png'

// 인트로
import vs from '../images/production/렌고쿠vs아카자.png'

import blackKyojuro from '../images/production/흑백 렌고쿠.png'
import kyojurofr from '../images/production/흑백 렌고쿠 친구.png'

import blackTanjiro from '../images/production/흑백 탄지로.png'
function ProductionIntro() {
    return (
        <section
            className="relative w-full h-[10905px] bg-[#000000] px-[40px]"
            style={{ zIndex: 30, fontFamily: 'Pretendard-Regular' }}
        >
            <div className='relative w-full h-[927px] overflow-hidden mb-[200px]'>
                <img src={tanjiro} alt="tanjiro" className='absolute top-0 right-[211px]' />
                <img src={fire} alt="fire" className='absolute right-0' />
                <img src={purple} alt="purple" className='absolute bottom-[915px] right-[1425px]' />
                <img src={organization} alt="organization" className='absolute top-0 right-[308px]' />
                <img src={zenitsu} alt="zenitsu" className='absolute top-[260px] right-0' />
                <img src={tengen} alt="tengen" className='absolute' />
                <img src={kyojuro} alt="kyojuro" className='absolute top-[182px] left-[65px]' />
                <img src={pillars} alt="pillars" className='absolute top-[842px] left-[724px]' />
                <img src={akaza} alt="akaza" className='absolute top-[766px]' />
            </div>

            <div>


                <div className='w-full h-[1414px] relative text-[#ffffff]'>
                    <div className='text-[96px] h-[96px] flex'><h1 className='text-[#eb181f]'>UFOTABLE</h1><h1>DECIDED TO PRODUCE</h1></div>
                    <div className='text-[96px] h-[96px] absolute left-[973px]'><h1>KIMETSU NO YAIBA </h1></div>
                    <img src={vs} alt="vs" className='absolute top-[133px]' />
                    <div className='absolute w-[640px] h-[181px] top-[780px] left-[1012px]  flex flex-col '>
                        <div className='mb-[23px] text-[16px] leading-[25px]'><span>유포테이블(ufotable)은 단순한 애니메이션 스튜디오가 아니라, 완벽한 퀄리티와 독창적인 연출을 목표로
                            하는 제작 집단이다. 창립자 콘도 히카루(近藤 光)는 "우리가 만드는 애니메이션은 시간이 지나도 사람들의
                            기억에 남아야 한다"는 신념을 가지고, 극장판 수준의 작화와 연출을 TV 애니메이션에서도 유지하는 것을
                            철칙으로 삼았고 이를 단 한 프레임도 놓치지 않기로 유명하다. </span></div>
                        <div><span>유포테이블의 가장 큰 특징은 모든 작품에서 극장판 수준의 퀄리티를 유지하는 것이다. TV 애니메이션도
                            영화처럼 제작하며, 한 장면 한 장면을 세밀하게 완성세부적인 조명 효과, 배경 디테일,CG와 2D의 조화를
                            중요시하여 "작품 하나하나가 예술이어야 한다"는 철학을 ‘귀멸의 칼날’에도 반영했다.</span></div>
                    </div>
                </div>


                <div className='w-full h-[1337px] relative text-[#ffffff]'>
                    <div className='text-[96px] h-[96px] flex'><h1>UFOTABLE, A </h1><h1 className='text-[#eb181f]'>TOP-TIER</h1><h1>STUDIO</h1></div>
                    <div className='text-[96px] h-[96px] flex'><h1 className='text-[#eb181f]'>PROMISING</h1><h1>EXCEPTIONAL WORKS!</h1></div>
                    <img src={blackKyojuro} alt="blackKyojuro" className='absolute top-[258px] left-[56px] z-10' />
                    <img src={kyojurofr} alt="kyojurofr" className='absolute top-[342px] left-[454px]' />
                    <div className='absolute w-[640px] h-[181px] top-[318px] left-[920px]  flex flex-col '>
                        <div className='mb-[23px] text-[16px] leading-[25px]'><span>유포테이블(ufotable)은 단순한 애니메이션 스튜디오가 아니라, 완벽한 퀄리티와 독창적인 연출을 목표로
                            하는 제작 집단이다. 창립자 콘도 히카루(近藤 光)는 "우리가 만드는 애니메이션은 시간이 지나도 사람들의
                            기억에 남아야 한다"는 신념을 가지고, 극장판 수준의 작화와 연출을 TV 애니메이션에서도 유지하는 것을
                            철칙으로 삼았고 이를 단 한 프레임도 놓치지 않기로 유명하다. </span></div>
                    </div>
                    <div className='flex flex-col absolute top-[500px] left-[920px] text-[50px]'>
                        <div className=''>
                            <span className='text-[14px] text-[#eb181f]' style={{ fontFamily: 'VELISTA' }}>01</span>
                            <h1>"타협 없는 퀄리티" - 극장판 수준의 <br /> 작화 유지 </h1>
                        </div>
                        <div className=''>
                            <span className='text-[14px] text-[#eb181f]' style={{ fontFamily: 'VELISTA' }}>02</span>
                            <h1>"자체 제작 시스템" - 외주 최소화, <br /> 내부 완성도 극대화 </h1>
                        </div>
                        <div className=''>
                            <span className='text-[14px] text-[#eb181f]' style={{ fontFamily: 'VELISTA' }}>03</span>
                            <h1>"스토리와 감정 전달" - 액션뿐만 <br />  아니라 감동까지 </h1>
                        </div>
                    </div>
                </div>

                <div className='w-full h-[409px] relative text-[#ffffff]'>
                    <div className='h-[96px]' style={{ fontFamily: 'myriad-pro' }}><h1 className='text-[96px] text-[#eb181f]'>KIMETSU NO YAIBA</h1></div>
                    <div className='h-[320px]'><h1 className='text-[320px] whitespace-nowrap font-bold'>Original Creator</h1></div>
                    <div className='text-[20px] whitespace-nowrap flex absolute top-[479px]'>
                        <span className='mr-[245px]'>Story Planning</span>
                        <span className='mr-[258px]'>Character</span>
                        <span className='mr-[249px]'>WorldBuilding</span>
                        <span className='mr-[272px]'>Story Board</span>
                        <span className='mr-[292px]'>Direction</span>
                        <span className='mr-[245px]'>Collaboration</span>
                    </div>
                </div>

                <div className='w-full h-auto relative text-[#ffffff]'>
                    <img src={blackTanjiro} alt="blackTanjiro" className='absolute top-[90px] left-1/2 -translate-x-1/2' />
                    <span className='absolute top-[945px] left-[368px] text-[#eb181f] text-[20px]' style={{ fontFamily: 'VELISTA' }}>MESSAGE</span>
                    <div className='w-[443px] h-auto absolute top-[945px] left-[736px]'>
                        <div className='text-[38px] mb-[76px]'><h1 >인간의 강인함과 <br /> 가족의 소중함</h1></div>
                        <div className='flex flex-col gap-9'>
                            <span >
                                고토게 코요하루(吾峠呼世晴) 작가는 '귀멸의 칼날'을
                                통해 인간의 강인함과 가족의 소중함을 전하고자 했습니다. 작품
                                속에서 주인공 탄지로는 가족을 잃은 슬픔 속에서도 희망을 잃지 않고,
                                동료들과 함께 역경을 극복해 나갑니다. 이를 통해 작가는 희망, 용기,
                                연대의 중요성을 강조하고 있습니다.
                            </span>
                            <span>
                                또한, 고토게 코요하루는 인간의 감정과 관계를 깊이 있게 묘사하는 것을
                                중요하게 생각하며, 이를 통해 독자들에게 감동을 전하려 노력합니다.
                                이러한 신념은 '귀멸의 칼날'의 섬세한 캐릭터 설정과 스토리 전개에
                                잘 드러나 있습니다. 작품의 배경 스토리는 일본 다이쇼 시대를 기반으로
                                하여, 전통적인 일본 문화와 미신, 그리고 인간의 내면을 탐구하는 요소들이
                                결합되어 있습니다. 이를 통해 작가는 시대적 배경과 인간 본성에 대한
                                깊이 있는 이야기를 전달하고자 했습니다.`
                            </span>
                        </div>
                    </div>
                </div>

                <div className='w-full h-auto relative text-[#ffffff]'>
                    <span className='absolute top-[1631px] left-[736px] text-[#eb181f] text-[20px]' style={{ fontFamily: 'VELISTA' }}>PAIN POINT</span>
                    <div className='w-[443px] h-auto absolute top-[1631px] left-[1104px]'>
                        <div className='text-[38px] mb-[76px]'><h1 >캐릭터의 개성과 <br /> 감정표현, 액션 연출</h1></div>
                        <div className='flex flex-col gap-9'>
                            <span >
                                귀멸의 칼날은 주인공 일행과 주, 상현 등 많은 캐릭터가 등장하는
                                만큼, 각 인물의 개성을 살리면서 감정을 섬세하게 표현하는 것이 매우
                                중요했다. 주인공뿐만 아니라 조연 캐릭터들도 입체적으로 그리기 위해
                                각자의 과거와 성격을 깊이 고민하며 설정하려고 노력했다.
                            </span>
                            <span>
                                또한 몰입감을 높이기 위해 다양한 검술과 호흡 기술울 효과적으로
                                표현했고,빠른 전투 장면을 통해 이것을 극대화시키는 것이 큰 도전이었다.
                                전투의 흐름을 이해하기 쉽게 하면서도 박진감을 유지하기 위해 많은
                                수많은 실패와 연구, 수정을 거듭했다.
                            </span>
                        </div>
                    </div>
                </div>

                <div className='w-full h-auto relative text-[#ffffff]'>
                    <span className='absolute top-[2216px] left-0 text-[#eb181f] text-[20px]' style={{ fontFamily: 'VELISTA' }}>PAIN POINT</span>
                    <div className='w-[443px] h-auto absolute top-[2216px] left-[368px]'>
                        <div className='text-[38px] mb-[76px]'><h1 >인간의 강인함과 <br /> 가족의 소중함</h1></div>
                        <div className='flex flex-col gap-9'>
                            <span >
                                작가는 독자들의 긍정적인 반응과 작품의 인기를 통해
                                큰 보람과 희열을 느꼈습니다. 특히, 애니메이션화 이후 작품이
                                전 세계적으로 사랑받으며, 작가로서의 성취감을 크게 느꼈으며,
                                작가로서의 성장에서 오는 보람과  독자들과의 소통을 통해
                                많은 기쁨을 느꼈을 것입니다.
                            </span>
                        </div>
                    </div>
                </div>

                <div className='w-full h-auto relative text-[#ffffff]'>
                    <span className='absolute top-[2690px] left-[736px] text-[#eb181f] text-[20px]' style={{ fontFamily: 'VELISTA' }}>THANKS TO</span>
                    <div className='w-[443px] h-auto absolute top-[2690px] left-[1104px]'>
                        <div className='flex flex-col gap-9'>
                            <span >
                                처음 만화를 그리기 시작했을 때는 이렇게 많은 분들이 제 작품을
                                사랑해 주실 거라고는 상상도 못 했습니다. 항상 귀멸의 칼날을 읽어 주시고,
                                캐릭터들과 함께 울고 웃어 주신 모든 분들께 진심으로 감사드립니다.
                            </span>
                        </div>
                    </div>
                </div>

                <div className='w-full relative text-[#ffffff]'>
                    <h1 className='text-[153px] absolute top-[3210px] font-bold'>Production <br/> Crew</h1>
                </div>

            </div>
        </section>
    )
}

export default ProductionIntro
