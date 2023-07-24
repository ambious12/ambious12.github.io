import Header from '../header/header'
import { Icon } from '@iconify/react'

const Skill = () => {
    return (
        <div className="mx-auto flex flex-col items-center">
            <Header />

            <div className="flex flex-col justify-center items-center w-1/4 h-1/4 hover:text-blue-500 transition-all duration-300">
                <h1 className="text-4xl font-bold text-center flex flex-col items-center my-10">
                    SKILL
                    <span className="w-2/3 h-1/3 mt-2 border-b-4 border-gray-500" />
                </h1>
            </div>

            <div className="grid grid-row-9 gap-4 mt-8 w-full h-full place-items-center">
                <div className="flex w-1/2 h-1/9 items-center justify-evenly mb-5 hover:animate-wiggle border-2 border-gray-200 rounded-lg">
                    <div className="flex justify-center items-center">
                        <Icon icon="bxl:tailwind-css" className="text-7xl" />
                    </div>
                    <div className="w-2/3 h-1/6 my-2">
                        <h3 className='text-2xl font-medium pb-2'>Tailwind</h3>
                        <h3 className='text-sm pb-2 font-extralight'>Tailwind CSS를 사용하여 기본적인 스타일링과 레이아웃을 손쉽게 처리할 수 있으며,</h3>
                        <h3 className='text-sm pb-2 font-extralight'>Flex와 Grid를 사용하여 요소를 정렬하고, 반응형 디자인을 구현하는데 어려움이 없습니다</h3>
                        <h3 className='text-sm pb-2 font-extralight'>또한 커스텀 CSS를 추가하여 Tailwind 클래스에 스타일을 더할 수 있습니다.</h3>
                    </div>
                </div>

                <div className="flex w-1/2 h-1/9 items-center justify-evenly mb-5 hover:animate-wiggle border-2 border-gray-200 rounded-lg">
                    <div className="flex justify-center items-center">
                        <Icon icon="simple-icons:react" className="text-7xl" />
                    </div>
                    <div className="w-2/3 h-1/6 my-2 ">
                    <h3 className='text-2xl font-medium pb-2'>React</h3>
                        <h3 className='text-sm pb-2 font-extralight'>React를 사용하여 기본적인 컴포넌트를 만들고 상태(State)와 생명주기(Lifecycle)를 다룰 수 있습니다. </h3>
                        <h3 className='text-sm pb-2 font-extralight'>Hooks를 활용하여 함수형 컴포넌트에서 상태를 관리하고, 이벤트 처리 및 데이터 흐름을 구현하는 데에 어려움이 없습니다.</h3>
                        <h3 className='text-sm pb-2 font-extralight'>ReactQuery를 이용하여 데이터 관리가 가능합니다.</h3>
                    </div>
                </div>

                <div className="flex w-1/2 h-1/9 items-center justify-evenly mb-5 hover:animate-wiggle border-2 border-gray-200 rounded-lg">
                    <div className="flex justify-center items-center">
                        <Icon icon="devicon:nextjs" className="text-7xl" />
                    </div>
                    <div className="w-2/3 h-1/6 my-2">
                    <h3 className='text-2xl font-medium pb-2'>NextJS</h3>
                        <h3 className='text-sm pb-2 font-extralight'>Next.js의 기본 개념과 특징을 이해하고, 페이지 라우팅, 서버사이드 렌더링(SSR), 정적 사이트 생성(SSG) 등의 기능을 활용 할 수 있습니다.</h3>
                        <h3 className='text-sm pb-2 font-extralight'>API Route를 사용할 수 있고 , Next.js의 라이브러리와 플러그인을 활용하여 프로젝트를 확장하는 방법을 이해하고 사용합니다. </h3>
                    </div>
                </div>

                <div className="flex w-1/2 h-1/9 items-center justify-evenly mb-5 hover:animate-wiggle border-2 border-gray-200 rounded-lg">
                    <div className="flex justify-center items-center">
                        <Icon icon="nonicons:javascript-16" className="text-7xl" />
                    </div>
                    <div className="w-2/3 h-1/6 my-2">
                    <h3 className='text-2xl font-medium pb-2'>Javascript</h3>
                        <h3 className='text-sm pb-2 font-extralight'>sdad</h3>
                        <h3 className='text-sm pb-2 font-extralight'>sdad</h3>
                        <h3 className='text-sm pb-2 font-extralight'>sdad</h3>
                    </div>
                </div>

                <div className="flex w-1/2 h-1/9 items-center justify-evenly mb-5 hover:animate-wiggle border-2 border-gray-200 rounded-lg">
                    <div className="flex justify-center items-center">
                        <Icon  icon="devicon-plain:typescript" className="text-7xl" />
                    </div>
                    <div className="w-2/3 h-1/6 my-2">
                    <h3 className='text-2xl font-medium pb-2'>Typescript</h3>
                        <h3 className='text-sm pb-2 font-extralight'>sdad</h3>
                        <h3 className='text-sm pb-2 font-extralight'>sdad</h3>
                        <h3 className='text-sm pb-2 font-extralight'>sdad</h3>
                    </div>
                </div>

                <div className="flex w-1/2 h-1/9 items-center justify-evenly mb-5 hover:animate-wiggle border-2 border-gray-200 rounded-lg">
                    <div className="flex justify-center items-center">
                        <Icon icon="file-icons:nestjs" className="text-7xl" />
                    </div>
                    <div className="w-2/3 h-1/6 my-2">
                    <h3 className='text-2xl font-medium pb-2'>NestJS</h3>
                        <h3 className='text-sm pb-2 font-extralight'>sdad</h3>
                        <h3 className='text-sm pb-2 font-extralight'>sdad</h3>
                        <h3 className='text-sm pb-2 font-extralight'>sdad</h3>
                    </div>
                </div>

                <div className="flex w-1/2 h-1/9 items-center justify-evenly mb-5 hover:animate-wiggle border-2 border-gray-200 rounded-lg">
                    <div className="flex justify-center items-center">
                        <Icon icon="bxl:nodejs" className="text-7xl" />
                    </div>
                    <div className="w-2/3 h-1/6 my-2">
                    <h3 className='text-2xl font-medium pb-2'>NodeJS</h3>
                        <h3 className='text-sm pb-2 font-extralight'>sdad</h3>
                        <h3 className='text-sm pb-2 font-extralight'>sdad</h3>
                        <h3 className='text-sm pb-2 font-extralight'>sdad</h3>
                    </div>
                </div>

                <div className="flex w-1/2 h-1/9 items-center justify-evenly mb-5 hover:animate-wiggle border-2 border-gray-200 rounded-lg">
                    <div className="flex justify-center items-center">
                        <Icon icon="devicon-plain:mysql" className="text-7xl" />
                    </div>
                    <div className="w-2/3 h-1/6 my-2">
                    <h3 className='text-2xl font-medium pb-2'>SQL</h3>
                        <h3 className='text-sm pb-2 font-extralight'>sdad</h3>
                        <h3 className='text-sm pb-2 font-extralight'>sdad</h3>
                        <h3 className='text-sm pb-2 font-extralight'>sdad</h3>
                    </div>
                </div>

                <div className="flex w-1/2 h-1/9 items-center justify-evenly mb-5 hover:animate-wiggle border-2 border-gray-200 rounded-lg">
                    <div className="flex justify-center items-center">
                        <Icon icon="logos:github-actions" className="text-7xl" />
                    </div>
                    <div className="w-2/3 h-1/6 my-2">
                    <h3 className='text-2xl font-medium pb-2'>Tools</h3>
                        <h3 className='text-sm pb-2 font-extralight'>sdad</h3>
                        <h3 className='text-sm pb-2 font-extralight'>sdad</h3>
                        <h3 className='text-sm pb-2 font-extralight'>sdad</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill
