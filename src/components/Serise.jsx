import React from 'react';
import tanjirobg from '../images/serise/배경 탄지로.png'
import tanjiro from '../images/serise/앞 탄지로.png'
import p1 from '../images/serise/피1.png'

// https://okcest.cool/
function Serise() {
    return (
        <section className='relative w-full h-[3700px] bg-[#000000]'
        style={{zIndex:30}}
        >
            {/* 탄지로 */}
            <div className='w-full h-auto'>
                <img src={tanjirobg} alt="tanjirobg" className='absolute top-0 left-[300px]'/>
                <img src={tanjiro} alt="tanjirobg" className='absolute top-[220px] left-[140px]'/>
                <div className='w-[520px] h-[220px] flex flex-col'>
                    <span className='text-[46px] mb-[34px]' style={{fontFamily: 'VELISTA'}}>SEASON1</span>
                    <span className='text-[66px] mb-[40px]'>카마도 탄지로 입지편</span>
                    <span className='text-[20px]'>탄지로는 혈귀에게 가족을 잃고 여동생을 되살리기 위해 <br/> 혈귀 사냥꾼의 길을 걷기로 결심한다.</span>
                </div>
            </div>
        </section>
    )
}

export default Serise