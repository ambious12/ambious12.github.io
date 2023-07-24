import Header from '../header/header'
import Lottie from 'lottie-react'
import loadingLottie from '../../asset/lottie/animation_lkbwcvfr.json'
import { useEffect, useState ,useRef} from 'react'

const Main = () => {

    return (
        <div className="mx-auto flex flex-col h-screen items-center">
            <Header />
            <div className='flex flex-col justify-center items-center w-1/4 h-1/4 hover:text-blue-500 transition-all duration-300'>
                <h1 className="text-4xl font-bold text-center flex flex-col items-center">
                    ABOUT
                <span className='w-2/3 h-1/3 mt-2 border-b-4 border-gray-500'/>
                </h1>
                
            </div>
            <div className="w-full h-full flex items-center justify-evenly" >
                <div className="w-3/12 h-1/2">
                    <Lottie animationData={loadingLottie}></Lottie>
                </div>
                <div className="flex flex-col items-center justify-center w-4/12 h-1/2 ">
                    <p className="text-2xl font-bold text-gray-700 mb-7">
                        안녕하세요! 긍정적인 신입 개발자 김홍태입니다.
                    </p>
                    <p className="text-2xl font-bold text-gray-700 mb-7">
                        프로그래밍에 대한 열정과 성장에 진심을 갖고 있으며,
                    </p>
                    <p className="text-2xl font-bold text-gray-700 mb-7">
                        항상 새로운 기술과 트렌드에 적응을 위해 노력합니다.
                    </p>
                    <p className="text-2xl font-bold text-gray-700 mb-7">
                        함께 성장하고 발전하는 기회를 기다리고 있습니다.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main
