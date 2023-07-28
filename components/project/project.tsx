import Header from '../header/header'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'

const Project = () => {
    const generateImagePaths = (count: number) => {
        const imagePath = []
        for (let i = 1; i < count; i++) {
            imagePath.push(`/project-images/mangoGif${i}.gif`)
        }
        return imagePath
    }

    const generateRoofTopImagePaths = (count: number) => {
        const imagePaths = []
        for (let i = 1; i < count; i++) {
            imagePaths.push(`/project-images/roofTopGif${i}.gif`)
        }
        return imagePaths
    }

    const mangoMarketImage = generateImagePaths(5)
    const roofTopImage = generateRoofTopImagePaths(5)
    const sliderSetting = {
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
    }

    const clickHandler = (projectName:string) => {
        if(projectName === 'MangoMarket'){
            window.open('https://mgmarket.store')
        }else if(projectName === 'RoofTop'){
            window.open('https://roof-top.shop')
        }
    }

    return (
        <div className="mx-auto flex flex-col items-center  overflow-hidden ">
            <Header />

            <div className="flex flex-col justify-center items-center w-1/4 h-1/4 hover:text-blue-500 transition-all duration-300">
                <h1 className="text-4xl font-bold text-center flex flex-col items-center my-10">
                    Project
                    <span className="w-2/3 h-1/3 mt-2 border-b-4 border-gray-500" />
                </h1>
            </div>

            <div 
            className={`flex flex-col w-1/2 h-[70rem] justify-around items-center mb-10 border-2 border-gray-200 rounded-lg overflow-y-scroll
            transform transition-transform duration-300 hover:border-yellow-300 hover:scale-105`}
             >
                
                    <Slider {...sliderSetting} className="w-full mb-5">
                        {mangoMarketImage.map((image, index) => (
                            <Image
                                key={index}
                                src={image}
                                width={500}
                                height={200}
                                alt={`mangomarket test`}
                            />
                        ))}
                    </Slider>
                

                <div className="w-2/3 my-2">
                    <h1 className="text-4xl font-bold pb-3 border-b-2 border-gray-600 w-[14.5rem] mb-6 text-yellow-600">MangoMarket</h1>
                    <h3 className="text-lg text-gray-500 mb-5">
                        MangoMarket은 위치서비스를 기반으로 동네인증을 하여 동네주민들과 
                        물물교환을 하는 플랫폼입니다. 동네인증을 위해 Geolocation API와 카카오 Map Api를 사용하였습니다.
                    </h3>
                    
                    <h3 className="text-lg text-gray-500 mb-3">
                        판매자는 안쓰는 중고 물품을 , 구매자는 원하는 중고 물품을 선택하여 교환신청 할수 있습니다.
                    </h3>

                    <h3 className="text-lg text-gray-500 mb-3">
                        단순한 중고 물물교환 플랫폼에 만족하지 않고, 지역 주민들 간의 소통을 더욱 활발하게 만드는 것이 MangoMarket의 또다른 목표입니다. 
                        지역 단위 기반의 물물거래 서비스를 구현하여 주민들이 서로 가까운 곳에서 물물교환이 가능하도록 지원합니다.
                    </h3>

                    <h3 className="text-lg text-gray-500 mb-3">
                        우리는 망고와 같이 신선함과 풍요로움을 상징하는 이름으로 MangoMarket을 창조했습니다. 
                        망고는 달콤함과 향긋한 맛으로 사랑받는 과일이며, 
                        우리의 플랫폼도 사용자들에게 편안하고 즐거운 경험을 선사합니다.
                    </h3>
                    <div className='flex justify-center items-center mt-10'>
                        <button 
                        className='bg-gray-400 mb-5 border rounded-lg w-[12rem] h-[2rem] text-white hover:text-gray-700 hover:bg-indigo-400 transition-all duration-300'
                        onClick={()=>clickHandler("MangoMarket")}
                        >
                            MangoMarket 바로가기
                        </button>
                    </div>
                    <div className='flex w-full items-center mt-10'>
                        <h2 className="flex-start text-base w-1/4 pl-3 text-gray-500">
                            Tech Stack
                        </h2>
                        <div className='flex w-1/2 justify-around'>
                            <div className="flex w-[5rem] justify-around items-center bg-gray-400 rounded-lg">
                                <span className="text-white hover:text-indigo-500">React</span>
                            </div>
                            <div className="flex w-[5rem] justify-around items-center bg-gray-400 rounded-lg">
                                <span className="text-white hover:text-indigo-500">Redux</span>
                            </div>
                        </div>
                    </div>
                    {/*asdasdas */}
                    <div className='flex w-full items-center mt-7'>
                        <div className='flex w-full justify-evenly'>
                            <div className="flex w-[5rem] justify-around items-center bg-gray-400 rounded-lg">
                                <span className="text-white hover:text-indigo-500">Node.JS</span>
                            </div>
                            <div className="flex w-[5rem] justify-around items-center bg-gray-400 rounded-lg">
                                <span className="text-white hover:text-indigo-500">MySQL</span>
                            </div>
                            <div className="flex w-[5rem] justify-around items-center bg-gray-400 rounded-lg">
                                <span className="text-white hover:text-indigo-500">API</span>
                            </div>
                        </div>
                    </div>
                    {/*asdasdas */}
                </div>
            </div>
            <div className='w-1/2 h-[3rem] mt-5 border-t-2 border-gray-500'/>
                        {/* 구분점 */}

            <div 
            className={`flex flex-col w-1/2 h-[70rem] justify-around items-center mt-5 border-2 border-gray-200 rounded-lg overflow-y-scroll
            transform transition-transform duration-300 hover:border-indigo-300 hover:scale-105`}
             >
                
                    <Slider {...sliderSetting} className="w-full mb-5">
                        {roofTopImage.map((image, index) => (
                            <Image
                                key={index}
                                src={image}
                                width={500}
                                height={200}
                                alt={`roofTop test`}
                            />
                        ))}
                    </Slider>
                

                <div className="w-2/3 my-2">
                    <h1 className="text-4xl font-bold pb-3 border-b-2 border-gray-600 w-[14.5rem] mb-6 text-gray-600">
                        Roof-Top
                    </h1>
                    <h3 className="text-lg text-gray-500 mb-5">
                        Roof-Top은 Mumbai Network 기반의 NFT MarketPlace입니다.
                        OpenSea, Blur와 같이 대량구매, Sweep, Auction, AirDrop이 가능합니다.
                    </h3>
                    
                    <h3 className="text-lg text-gray-500 mb-3">
                        Roof-Top은 다른 플랫폼들과 차별화를 주기 위해 생성형 AI를 도입했습니다. 
                        이러한 AI 기술은 접근장벽을 낮춰주어 누구나 손쉽게 자신의 아트워크를 만들수 있게 해줍니다.
                        이를 통해 초보자들도 쉽게 NFT를 생성하고 관리할 수 있습니다.
                    </h3>

                    <h3 className="text-lg text-gray-500 mb-3">
                        Creator에게는 거래가 이루어 질 시 수수료가 Market Owner와 Creator에게 전달됩니다.
                    </h3>
                    <h3 className="text-lg text-gray-500 mb-3">
                        Roof-Top은 다양한 아티스트들과 창작자들이 모여 더욱 다채로운 NFT 생태계를 형성하고
                        NFT의 세계로 들어가는 문턱을 낮추고, 누구나 창작과 문화적 교류에 참여할 수 있도록 해주는 플랫폼입니다.
                    </h3>
                    <div className='flex justify-center items-center mt-10'>
                        <button 
                        className='bg-gray-400 border rounded-lg w-[12rem] h-[2rem] text-white hover:text-gray-700 hover:bg-indigo-400 transition-all duration-300'
                        onClick={()=>clickHandler("RoofTop")}
                        >
                            Roof-Top 바로가기
                        </button>
                    </div>
                </div>
                <div className='flex w-full items-center mt-10'>
                        <h2 className="text-md w-1/5 pl-5 text-gray-500">
                            Tech Stack
                        </h2>
                        <div className='flex w-full justify-around'>
                            <div className="flex w-[5rem] justify-around items-center bg-gray-400 rounded-lg">
                                <span className="text-white hover:text-indigo-500">TypeScript</span>
                            </div>
                            <div className="flex w-[5rem] justify-around items-center bg-gray-400 rounded-lg">
                                <span className="text-white hover:text-indigo-500">Next.JS</span>
                            </div>
                            <div className="flex w-[5rem] justify-around items-center bg-gray-400 rounded-lg">
                                <span className="text-white hover:text-indigo-500">Tailwind</span>
                            </div>
                            <div className="flex w-[5rem] justify-around items-center bg-gray-400 rounded-lg">
                                <span className="text-white hover:text-indigo-500">NestJS</span>
                            </div>
                            <div className="flex w-[5rem] justify-around items-center bg-gray-400 rounded-lg">
                                <span className="text-white hover:text-indigo-500">MongoDB</span>
                            </div>
                        </div>
                </div>
                <div className='flex w-full items-center'>
                    <div className='flex w-full justify-evenly'>
                        <div className="flex w-[5rem] justify-around items-center bg-gray-400 rounded-lg">
                            <span className="text-white hover:text-indigo-500">Solidity</span>
                        </div>
                        <div className="flex w-[5rem] justify-around items-center bg-gray-400 rounded-lg">
                            <span className="text-white hover:text-indigo-500">Ethers</span>
                        </div>
                        <div className="flex w-[5rem] justify-around items-center bg-gray-400 rounded-lg">
                            <span className="text-white hover:text-indigo-500">Wagmi</span>
                        </div>
                        <div className="flex w-[5rem] justify-around items-center bg-gray-400 rounded-lg">
                            <span className="text-white hover:text-indigo-500">API</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-[7rem]'/>
        </div>
    )
}

export default Project
