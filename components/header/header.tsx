import { Button, HeaderLink } from './styled/Header.styled'
import { useEffect, useState } from 'react'
import Link from 'next/link'
const Header = () => {
    const [isOpenModal, setIsOpenModal] = useState(false)
    

    const moveScroll = (category:string) => {
        if(category === "HOME") {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }else if(category === "ABOUT") {
            window.scrollTo({ top: 1000, behavior: 'smooth' })
        }else if(category === "SKILL") {
            window.scrollTo({ top: 1960, behavior: 'smooth' })
        }else if(category === "PROJECT") {
            window.scrollTo({ top: 2960, behavior: 'smooth' })
        }
    }
    

    return (
        <>
            <header>
                {/* fixed */}
                <div
                    className="border-gray-200 px-4 lg:px-6 py-2.5 opacity-90 top-0 left-0 right-0 z-10"
                >
                    <div className="flex flex-wrap justify-around items-center mx-auto max-w-screen-xl">
                        <div className="flex items-center">
                            <HeaderLink onClick={()=>moveScroll("HOME")}>
                                <span className='relative z-10'>HOME</span>
                            </HeaderLink>
                            <HeaderLink onClick={()=>moveScroll("ABOUT")}>
                                <span className='relative z-10'>ABOUT</span>
                            </HeaderLink>
                            <HeaderLink onClick={()=>moveScroll("SKILL")}>
                                <span className='relative z-10'>SKILL</span>
                            </HeaderLink>
                            <HeaderLink onClick={()=>moveScroll("PROJECT")}>
                                <span className='relative z-10'>PROJECT</span>
                            </HeaderLink>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header
