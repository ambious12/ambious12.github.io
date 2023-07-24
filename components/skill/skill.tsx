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
                        <h3 className='text-sm pb-2 font-extralight'>JavaScript 언어의 기본 문법과 개념을 잘 이해하고, 변수, 함수, 조건문, 반복문 등을 활용하여 간단한 웹 페이지나 기능을 구현할 수 있습니다</h3>
                        <h3 className='text-sm pb-2 font-extralight'>객체지향 프로그래밍(OOP)과 함수형 프로그래밍의 기본 원리를 이해하고 있습니다.</h3>
                        <h3 className='text-sm pb-2 font-extralight'>DOM(Document Object Model) 조작을 통해 웹 페이지의 요소를 동적으로 변경하고 상호작용할 수 있으며, 이벤트 처리에 대해서도 기본적인 이해를 갖고 있습니다.</h3>
                    </div>
                </div>

                <div className="flex w-1/2 h-1/9 items-center justify-evenly mb-5 hover:animate-wiggle border-2 border-gray-200 rounded-lg">
                    <div className="flex justify-center items-center">
                        <Icon  icon="devicon-plain:typescript" className="text-7xl" />
                    </div>
                    <div className="w-2/3 h-1/6 my-2">
                    <h3 className='text-2xl font-medium pb-2'>Typescript</h3>
                        <h3 className='text-sm pb-2 font-extralight'>Typescript의 기본적인 타입들을 활용하여 간단한 프로젝트를 구현할 수있습니다. </h3>
                        <h3 className='text-sm pb-2 font-extralight'>Interface를 활용하여 코드 타입을 안전하게 작성할 수 있습니다.</h3>
                        <h3 className='text-sm pb-2 font-extralight'>Typescript와 함께 주로 사용되는 다른 라이브러리나 프레임워크에 대한 이해도가 있습니다.</h3>
                    </div>
                </div>

                <div className="flex w-1/2 h-1/9 items-center justify-evenly mb-5 hover:animate-wiggle border-2 border-gray-200 rounded-lg">
                    <div className="flex justify-center items-center">
                        <Icon icon="file-icons:nestjs" className="text-7xl" />
                    </div>
                    <div className="w-2/3 h-1/6 my-2">
                    <h3 className='text-2xl font-medium pb-2'>NestJS</h3>
                        <h3 className='text-sm pb-2 font-extralight'> NestJS의 기본 구조와 모듈, 컨트롤러, 서비스 등의 개념을 이해하고 있습니다.</h3>
                        <h3 className='text-sm pb-2 font-extralight'>NestJS의 데코레이터와 의존성 주입(Dependency Injection)에 대한 이해도가 있습니다.</h3>
                        <h3 className='text-sm pb-2 font-extralight'>또한 LifeCycle인 MiddleWare - Guard - Interceptor - Pipe - Controller - Interceptor에 대한 이해도도 가지고 있습니다. </h3>
                    </div>
                </div>

                <div className="flex w-1/2 h-1/9 items-center justify-evenly mb-5 hover:animate-wiggle border-2 border-gray-200 rounded-lg">
                    <div className="flex justify-center items-center">
                        <Icon icon="bxl:nodejs" className="text-7xl" />
                    </div>
                    <div className="w-2/3 h-1/6 my-2">
                    <h3 className='text-2xl font-medium pb-2'>NodeJS</h3>
                        <h3 className='text-sm pb-2 font-extralight'> Node.js 환경에서 서버 사이드 개발을 수행할 수 있으며 , 비동기 프로그래밍에 대해 이해하고, 콜백 함수, 프로미스, async/await 등을 사용하여 비동기 작업을 처리할 수 있습니다.</h3>
                        <h3 className='text-sm pb-2 font-extralight'>Express를 사용하여 Node.js 프레임워크를 사용하여 웹서버를 구축하고 RESTful API를 설계할수 있습니다.</h3>
                        <h3 className='text-sm pb-2 font-extralight'>파일 시스템 접근, 데이터베이스 연동 등 Node.js의 다양한 내장 모듈을 활용하여 서버 기능을 구현할 수 있으며, 외부 라이브러리를 필요에따라 사용할수 있습니다.</h3>
                    </div>
                </div>

                <div className="flex w-1/2 h-1/9 items-center justify-evenly mb-5 hover:animate-wiggle border-2 border-gray-200 rounded-lg">
                    <div className="flex justify-center items-center">
                        <Icon icon="devicon-plain:mysql" className="text-7xl" />
                    </div>
                    <div className="w-2/3 h-1/6 my-2">
                    <h3 className='text-2xl font-medium pb-2'>SQL</h3>
                        <h3 className='text-sm pb-2 font-extralight'>MongoDB 와 MySQL 을 사용할줄 알고 , 기본적인 CRUD 작업을 수행할 수 있습니다.</h3>
                        <h3 className='text-sm pb-2 font-extralight'>데이터베이스에 데이터를 삽입, 조회, 수정, 삭제하는 방법을 잘 이해하고 있으며, 간단한 쿼리를 작성하여 데이터를 필터링하고 정렬하는 것이 가능합니다.</h3>
                        <h3 className='text-sm pb-2 font-extralight'>데이터베이스의 테이블 또는 컬렉션 간의 관계를 이해하고, 조인을 사용하여 복잡한 데이터 검색이 가능합니다.</h3>
                    </div>
                </div>

                <div className="flex w-1/2 h-1/9 items-center justify-evenly mb-5 hover:animate-wiggle border-2 border-gray-200 rounded-lg">
                    <div className="flex justify-center items-center">
                        <Icon icon="logos:github-actions" className="text-7xl" />
                    </div>
                    <div className="w-2/3 h-1/6 my-2">
                    <h3 className='text-2xl font-medium pb-2'>Tools</h3>
                        <h3 className='text-sm pb-2 font-extralight'>Git : 로컬 저장소에서의 Commit , Branch 생성과 Merge 및 충돌을 해결할수 있습니다. 원격 저장소와의 연동을 위해 코드를 Push하고 Pull 할 수 있으며, 다른 개발자들과 협업하는데 어려움이 없습니다.</h3>
                        <h3 className='text-sm pb-2 font-extralight'>Trello : Trello의 Board , List , Card 등 생성하고 관리하는것이 가능하며 , 작업구분을 통해 효율적으로 작업을 진행합니다.</h3>
                        <h3 className='text-sm pb-2 font-extralight'>Figma : 프로젝트 진행 시 , 초안으로 필요한 레이아웃을 그릴 수 있습니다. 간단한 디자인이 가능합니다.</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill
