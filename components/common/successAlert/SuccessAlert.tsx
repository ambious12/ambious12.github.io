import {
    AlertSecondDiv,
    AlertSecondDiv2,
    AlertSecondDiv3,
    AlertSecondBtn,
    AlertSecondP,
    AlertSecondSpan,
    AlertSuccessFirstDiv,
    AlertSuccessSvg,
    AlertSuccessWrapper,
    AlertCloseSvg,
} from './styled'
import { useState, useEffect } from 'react'
import { Icon } from '@iconify/react'

export const SuccessAlert = () => {
    const [visible, setVisible] = useState(true)

    const handleCloseAlert = () => {
        setVisible(false)
    }

    if (!visible) {
        return null
    }

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setVisible(false)
    //     }, 5000)

    //     return () => {
    //         clearTimeout(timer)
    //     }
    // }, [])

    return (
        <>
            <AlertSuccessWrapper>
                <AlertSuccessFirstDiv>
                    <AlertSuccessSvg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
                    </AlertSuccessSvg>
                </AlertSuccessFirstDiv>
                <AlertSecondDiv>
                    <AlertSecondDiv2>
                        <AlertSecondSpan>Success</AlertSecondSpan>
                        <AlertSecondP>Your Account was registered!</AlertSecondP>
                    </AlertSecondDiv2>
                </AlertSecondDiv>
                <AlertSecondDiv3>
                    <AlertSecondBtn onClick={handleCloseAlert}>
                        <AlertCloseSvg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                        >
                            <g
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-width="1"
                            >
                                <path
                                    strokeDasharray="60"
                                    strokeDashoffset="60"
                                    d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"
                                >
                                    <animate
                                        fill="freeze"
                                        attributeName="strokeDashoffset"
                                        dur="0.5s"
                                        values="60;0"
                                    />
                                </path>
                                <path
                                    strokeDasharray="8"
                                    strokeDashoffset="8"
                                    d="M12 12L16 16M12 12L8 8M12 12L8 16M12 12L16 8"
                                >
                                    <animate
                                        fill="freeze"
                                        attributeName="strokeDashoffset"
                                        begin="0.6s"
                                        dur="0.2s"
                                        values="8;0"
                                    />
                                </path>
                            </g>
                        </AlertCloseSvg>
                    </AlertSecondBtn>
                </AlertSecondDiv3>
            </AlertSuccessWrapper>
        </>
    )
}
