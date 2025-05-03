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

function ProductionIntro() {
    return (
        <section
            className="relative w-full h-[10905px] bg-[#000000] px-[40px]"
            style={{ zIndex: 30 }}
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

                <div className='w-full h-[960px] relative text-[#ffffff]'>
                    <div className='text-[96px] flex'><h1 className='text-[red]'>UFOTABLE</h1><h1>DECIDED TO PRODUCE</h1></div>
                    <div className='text-[96px] absolute left-[973px]'><h1>KIMETSU NO YAIBA </h1></div>
                    <img src={vs} alt="vs" />
                </div>


            </div>
        </section>
    )
}

export default ProductionIntro
