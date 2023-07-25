import Header from '../header/header'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'

const Project = () => {
    const generateImagePaths = (count: number) => {
        const imagePaths = []
        for (let i = 1; i < count; i++) {
            imagePaths.push(`/project-images/mangoGif${i}.gif`)
        }
        return imagePaths
    }

    const mangoMarketImage = generateImagePaths(3)

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
        }
    }

    return (
        <div className="mx-auto flex flex-col items-center">
            <Header />

            <div className="flex flex-col justify-center items-center w-1/4 h-1/4 hover:text-blue-500 transition-all duration-300">
                <h1 className="text-4xl font-bold text-center flex flex-col items-center my-10">
                    Project
                    <span className="w-2/3 h-1/3 mt-2 border-b-4 border-gray-500" />
                </h1>
            </div>

            <div 
            className={`flex flex-col w-1/2 h-[70rem] items-center mb-7 border-2 border-gray-200 rounded-lg 
            transform transition-transform duration-300 hover:border-yellow-300 hover:scale-105`}
             >
                <Slider {...sliderSetting} className="w-full mb-5">
                    {mangoMarketImage.map((image, index) => (
                        <Image
                            key={index}
                            src={image}
                            width={500}
                            height={300}
                            alt={`mangomarket test`}
                        />
                    ))}
                </Slider>
                <div className="w-2/3 my-2">
                    <h1 className="text-4xl font-bold pb-3 border-b-2 border-gray-600 w-[14.5rem] mb-6 text-yellow-600">MangoMarket</h1>
                    <h3 className="text-lg text-yellow-500 mb-5">
                        MangoMarket은 위치서비스를 기반으로 동네인증을 하여 동네주민들과 
                        물물교환을 하는 플랫폼입니다. 동네인증을 위해 Geolocation API와 카카오 Map Api를 사용하였습니다.
                    </h3>
                    
                    <h3 className="text-lg text-yellow-500 mb-3">
                        판매자는 안쓰는 중고 물품을 , 구매자는 원하는 중고 물품을 선택하여 교환신청 할수 있습니다.
                    </h3>

                    <h3 className="text-lg text-yellow-500 mb-3">
                        단순한 중고 물물교환 플랫폼에 만족하지 않고, 지역 주민들 간의 소통을 더욱 활발하게 만드는 것이 MangoMarket의 또다른 목표입니다. 
                        지역 단위 기반의 물물거래 서비스를 구현하여 주민들이 서로 가까운 곳에서 물물교환이 가능하도록 지원합니다.
                    </h3>

                    <h3 className="text-lg text-yellow-500 mb-3">
                        우리는 망고와 같이 신선함과 풍요로움을 상징하는 이름으로 MangoMarket을 창조했습니다. 
                        망고는 달콤함과 향긋한 맛으로 사랑받는 과일이며, 
                        우리의 플랫폼도 사용자들에게 편안하고 즐거운 경험을 선사합니다.
                    </h3>
                    <div className='flex justify-center items-center mt-10'>
                        <button 
                        className='bg-yellow-300 border rounded-lg w-[12rem] h-[2rem] text-white hover:text-gray-500 hover:bg-yellow-400 transition-all duration-300'
                        onClick={()=>clickHandler("MangoMarket")}
                        >
                            MangoMarket 바로가기
                        </button>
                    </div>
                    <div className='flex items-center mt-10'>
                        <h2 className="text-md w-1/4 text-yellow-500">
                            Tech Stack
                        </h2>
                        <div className='flex w-full justify-around'>
                            <div className="flex w-1/6 justify-around items-center bg-yellow-300 rounded-lg">
                                <span className="text-gray-500 hover:text-white">React</span>
                            </div>
                            <div className="flex w-1/6 justify-around items-center bg-yellow-300 rounded-lg">
                                <span className="text-gray-500 hover:text-white">Redux</span>
                            </div>
                            <div className="flex w-1/6 justify-around items-center bg-yellow-300 rounded-lg">
                                <span className="text-gray-500 hover:text-white">Node.JS</span>
                            </div>
                            <div className="flex w-1/6 justify-around items-center bg-yellow-300 rounded-lg">
                                <span className="text-gray-500 hover:text-white">MySQL</span>
                            </div>
                            <div className="flex w-1/6 justify-around items-center bg-yellow-300 rounded-lg">
                                <span className="text-gray-500 hover:text-white">API</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                        {/* 구분점 */}
            <div 
            className={`flex flex-col w-1/2 h-[70rem] items-center mb-7 border-2 border-gray-200 rounded-lg 
            transform transition-transform duration-300 hover:border-indigo-500 hover:scale-105`}
             >
                <Slider {...sliderSetting} className="w-full mb-5">
                    {mangoMarketImage.map((image, index) => (
                        <Image
                            key={index}
                            src={image}
                            width={500}
                            height={300}
                            alt={`mangomarket test ${index + 1}`}
                        />
                    ))}
                </Slider>
                <div className="w-2/3 my-2">
                    <h1 className="text-4xl font-bold pb-3 border-b-2 border-gray-600 w-[14.5rem] mb-6 text-gray-600">
                        Roof-Top
                    </h1>
                    <h3 className="text-lg text-yellow-500 mb-5">
                        MangoMarket은 위치서비스를 기반으로 동네인증을 하여 동네주민들과 
                        물물교환을 하는 플랫폼입니다. 동네인증을 위해 Geolocation API와 카카오 Map Api를 사용하였습니다.
                    </h3>
                    
                    <h3 className="text-lg text-yellow-500 mb-3">
                        판매자는 안쓰는 중고 물품을 , 구매자는 원하는 중고 물품을 선택하여 교환신청 할수 있습니다.
                    </h3>

                    <h3 className="text-lg text-yellow-500 mb-3">
                        단순한 중고 물물교환 플랫폼에 만족하지 않고, 지역 주민들 간의 소통을 더욱 활발하게 만드는 것이 MangoMarket의 또다른 목표입니다. 
                        지역 단위 기반의 물물거래 서비스를 구현하여 주민들이 서로 가까운 곳에서 물물교환이 가능하도록 지원합니다.
                    </h3>

                    <h3 className="text-lg text-yellow-500 mb-3">
                        우리는 망고와 같이 신선함과 풍요로움을 상징하는 이름으로 MangoMarket을 창조했습니다. 
                        망고는 달콤함과 향긋한 맛으로 사랑받는 과일이며, 
                        우리의 플랫폼도 사용자들에게 편안하고 즐거운 경험을 선사합니다.
                    </h3>
                    <div className='flex justify-center items-center mt-10'>
                        <button 
                        className='bg-yellow-300 border rounded-lg w-[12rem] h-[2rem] text-white hover:text-gray-500 hover:bg-yellow-400 transition-all duration-300'
                        onClick={()=>clickHandler("MangoMarket")}
                        >
                            MangoMarket 바로가기
                        </button>
                    </div>
                    <div className='flex items-center mt-10'>
                        <h2 className="text-md w-1/4 text-yellow-500">
                            Tech Stack
                        </h2>
                        <div className='flex w-full justify-around'>
                            <div className="flex w-1/6 justify-around items-center bg-yellow-300 rounded-lg">
                                <span className="text-gray-500 hover:text-white">React</span>
                            </div>
                            <div className="flex w-1/6 justify-around items-center bg-yellow-300 rounded-lg">
                                <span className="text-gray-500 hover:text-white">Redux</span>
                            </div>
                            <div className="flex w-1/6 justify-around items-center bg-yellow-300 rounded-lg">
                                <span className="text-gray-500 hover:text-white">Node.JS</span>
                            </div>
                            <div className="flex w-1/6 justify-around items-center bg-yellow-300 rounded-lg">
                                <span className="text-gray-500 hover:text-white">MySQL</span>
                            </div>
                            <div className="flex w-1/6 justify-around items-center bg-yellow-300 rounded-lg">
                                <span className="text-gray-500 hover:text-white">API</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project
