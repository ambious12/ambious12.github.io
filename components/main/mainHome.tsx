import { Icon } from '@iconify/react';
import { useRef, useState } from 'react';

const MainHome = () => {
    const [isHover,setIsHover] = useState(false)
    const [isMoveBox , setIsMoveBox] = useState(false)

    const onMoveBox = () => {
        setIsMoveBox(prev => !prev)
        window.scrollTo({ top: 800, behavior: 'smooth' });
    }

    return (
        <div className="w-full h-screen bg-gradient-to-r from-red-500 via-orange-500 to-blue-500">
            <div className="flex flex-col justify-center items-center h-full">
                <div className="flex flex-col">
                    <h1 className="text-5xl overflow-hidden whitespace-nowrap font-light animate-slideInLeft">
                        신입개발자
                    </h1>
                    <h1 className="text-5xl overflow-hidden whitespace-nowrap font-light animate-slideInRight mt-5">
                        김홍태의 포트폴리오 입니다.
                    </h1>
                    <div className="flex justify-center items-center">
                    <button className="w-1/3 h-2/3 mt-20 border-2 border-gray hover:bg-gray-300 transition-all duration-300 group"
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                    onClick={onMoveBox}
                    >
                        <div className='flex justify-around items-center'>
                        <p className='font-light text-sm'>View My Portfolio</p>
                        <Icon icon='ph:arrow-right-bold' 
                        className={`text-md ${
                            isHover
                              ? 'transform rotate-90 transition-transform duration-500'
                              : 'transition-transform duration-500'
                          }`}/>
                        </div>
                    </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainHome
