import React from 'react';

// 탄지로
import tanjiroBg from '../images/serise/배경 탄지로.png'
import tanjiro from '../images/serise/앞 탄지로.png'
import p1 from '../images/serise/피1.png'
import p2 from '../images/serise/피2.png'

// 텐겐
import tengenBg from '../images/serise/배경 텐겐.png'
import tengen from '../images/serise/앞 텐겐.png'
import p3 from '../images/serise/피3.png'

// 무이치로
import muichiroBg from '../images/serise/배경 무이치로.png'
import muichiro from '../images/serise/앞 무이치로.png'

// 교메이
import GyomeiBg from '../images/serise/배경 교메이.png'
import Gyomei from '../images/serise/앞 교메이.png'
import p4 from '../images/serise/피4.png'

// https://okcest.cool/
function Serise() {
    return (
        <section className='relative w-full h-[3665px] bg-[#000000]'
            style={{ zIndex: 30 }}
        >
            {/* 탄지로 */}
            <div className='w-full h-auto'>
                <img src={tanjiroBg} alt="tanjiroBg" className='absolute top-0 left-[300px]' />
                <img src={tanjiro} alt="tanjiro" className='absolute top-[220px] left-[140px] z-10' />
                <div className='w-[530px] h-[220px] text-[#ffffff] flex flex-col absolute top-[435px] right-[365px] z-10'>
                    <span className='w-[210px] h-[34px] text-[46px] mb-[40px] tracking-tight' style={{ fontFamily: 'VELISTA' }}>SEASON I</span>
                    <span className='w-[415px] h-[61px] text-[66px] mb-[60px] font-bold tracking-tighter' style={{ fontFamily: 'Pretendard-Regular' }}>카마도 탄지로 입지편</span>
                    <span className='text-[20px]' style={{ fontFamily: 'Pretendard-Regular' }}>탄지로는 혈귀에게 가족을 잃고 여동생을 되살리기 위해 <br /> 혈귀 사냥꾼의 길을 걷기로 결심한다.</span>
                </div>
                <img src={p1} alt="피1" className='absolute top-[59px] right-[468px]' />
                <img src={p2} alt="피2" className='absolute -top-[139px] right-[197px]' />
            </div>

            {/* 텐겐 */}
            <div className='w-full h-auto'>
                <img src={tengenBg} alt="tengenBg" className='absolute top-[824px] right-[291px] ' />
                <img src={tengen} alt="tengen" className='absolute top-[1119px] right-[230px] z-10' />
                <div className='w-[530px] h-[220px] text-[#ffffff] flex flex-col absolute top-[1147px] left-[626px] z-10'>
                    <span className='w-[210px] h-[34px] text-[46px] mb-[40px] tracking-tight' style={{ fontFamily: 'VELISTA' }}>SEASON 2</span>
                    <span className='w-[415px] h-[61px] text-[66px] mb-[60px] font-bold tracking-tighter' style={{ fontFamily: 'Pretendard-Regular' }}>환락의거리편</span>
                    <span className='text-[20px]' style={{ fontFamily: 'Pretendard-Regular' }}>탄지로 일행은 귀살대 최고의 검사 '주' 중 한 명인 음주
                        <br /> 우즈이 텐겐과 함께 혈귀가 사는 유곽으로 향한다.</span>
                </div>
                <img src={p3} alt="피3" className='absolute top-[1068px] right-[261px]' />
            </div>

            {/* 무이치로 */}
            <div className='w-full h-auto'>
                <img src={muichiroBg} alt="muichiroBg" className='absolute bottom-[1087px] left-[315px]' />
                <img src={muichiro} alt="muichiro" className='absolute bottom-[1148px] left-[181px] z-10' />
                <div className='w-[515px] h-[220px] text-[#ffffff] flex flex-col absolute bottom-[1507px] left-[962px] z-10'>
                    <span className='w-[210px] h-[34px] text-[46px] mb-[40px] tracking-tight' style={{ fontFamily: 'VELISTA' }}>SEASON 3</span>
                    <span className='w-[415px] h-[61px] text-[66px] mb-[60px] font-bold tracking-tighter' style={{ fontFamily: 'Pretendard-Regular' }}>도공마을편</span>
                    <span className='text-[20px]' style={{ fontFamily: 'Pretendard-Regular' }}>113년 만에 상현 혈귀가 죽자 분개한 무잔은
                        <br /> 나머지 상현 혈귀들에게 또 다른 명령을 내린다.</span>
                </div>
            </div>

            {/* 교메이 */}
            <div className='w-full h-auto'>
                <img src={GyomeiBg} alt="GyomeiBg" className='absolute bottom-[523px] right-[193px]' />
                <img src={Gyomei} alt="Gyomei" className='absolute bottom-[204px] right-[57px] z-10' />
                <div className='w-[515px] h-[220px] text-[#ffffff] flex flex-col absolute bottom-[806px] left-[629px] z-10'>
                    <span className='w-[210px] h-[34px] text-[46px] mb-[40px] tracking-tight' style={{ fontFamily: 'VELISTA' }}>SEASON 4</span>
                    <span className='w-[415px] h-[61px] text-[66px] mb-[60px] font-bold tracking-tighter' style={{ fontFamily: 'Pretendard-Regular' }}>합동 강화 훈련편</span>
                    <span className='w-[515px] h-[64px] text-[20px] tracking-tight' style={{ fontFamily: 'Pretendard-Regular' }}>다가오는 키부츠지 무잔과의 결전에 대비하여 주와대원들이 저마다의
                        <br /> 생각을 가슴에 품고 죽도록 고통스러운 마지막 훈련을 시작한다.</span>
                </div>
                <img src={p4} alt="피4" className='absolute top-[1068px] right-[261px]' />
            </div>


        </section>
    )
}

export default Serise