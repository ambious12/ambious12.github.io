import { StyledOptions, StyledProps } from '../../../utils/types/style.interface'
import tw from 'tailwind-styled-components'

export const HeaderLink = tw.div`
    font-semibold text-lg lg:text-xl cursor-pointer ml-3 lg:ml-6 relative flex h-[50px] w-40 items-center justify-center overflow-hidden font-medium text-blue shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-blue-600 hover:shadow-blue-600 hover:before:border-[25px]
`

const backgroundColors: StyledOptions = {
    red: 'bg-red-500',
    orange: 'bg-red-500',
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    yellow: 'bg-yellow-500',
    gray: 'bg-gray-100',
}

const textSizes: StyledOptions = {
    sm: 'text-sm',
    md: 'text-md',
    lg: 'text-lg',
}

const textColors: StyledOptions = {
    white: 'text-white',
    black: 'text-black',
    gray: 'text-gray-900',
}

interface ButtonProps extends StyledProps {
    onClick: () => void
}



export const Button = ({ onClick, backgroundColor, color, fontSize, children }: ButtonProps) => {
    const buttonStyled: string = `inline-flex items-center order-0 py-1.5 px-3 mr-3 focus:outline-none hover:bg-gray-400 rounded text-base mt-4 md:mt-0 transition duration-300 ease-in-out`

    let bgColor = backgroundColors[backgroundColor ? backgroundColor : 'gray']
    let txtSize = textSizes[fontSize ? fontSize : 'sm']
    let txtColor = textColors[color ? color : 'black']

    return (
        <button onClick={onClick} className={`${bgColor} ${txtSize} ${txtColor} ${buttonStyled}`}>
            {children}
        </button>
    )
}

export const HeaderUserInfo = () => {
    const HeaderUserInfoStyled = tw.div`
    text-sm flex items-center md:space-x-3 py-2 px-3 mr-5 rounded-full text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 hover:bg-gray-300 hover:dark:bg-gray-500 cursor-pointer
  `

    return (
        <HeaderUserInfoStyled>
            
        </HeaderUserInfoStyled>
    )
}
