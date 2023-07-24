import Header from '../header/header'
import { Icon } from '@iconify/react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
import nextConfig from '../../next.config'

const Project = () => {
    const mangoMarketImage = [
        'mangoGif1.gif',
        'mangoGif2.gif',
        'mangoGif3.gif',
        'mangoGif4.gif',
        'mangoGif5.gif',
    ]
    const roofTopImage = []

    const basePath = nextConfig.basePath || 'https://ambious12.github.io'

    const sliderSetting = {
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        arrows: false,
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

            <div className="flex flex-col w-1/2 h-1/9 items-center justify-evenly mb-5 border-2 border-gray-200 rounded-lg">
                <Slider {...sliderSetting}>
                    {mangoMarketImage.map((image, index) => (
                        <div
                            key={index}
                            className="flex w-1/2 h-80 justify-center items-center bg-red-500 overflow-hidden"
                        >
                            <Image
                                src={`${basePath}/project-images/${image}`}
                                alt={`Slide ${index + 1}`}
                                width={500}
                                height={500}
                                className="h-full object-contain"
                            />
                        </div>
                    ))}
                </Slider>
                <div className="w-2/3 h-1/6 my-2">
                    <h1 className="text-2xl font-medium pb-2">MangoMarket</h1>
                    <h3 className="text-sm pb-2 font-extralight">
                        Git : 로컬 저장소에서의 Commit , Branch 생성과 Merge 및 충돌을 해결할수
                        있습니다. 원격 저장소와의 연동을 위해 코드를 Push하고 Pull 할 수 있으며,
                        다른 개발자들과 협업하는데 어려움이 없습니다.
                    </h3>
                </div>
            </div>

            <div className="flex flex-col w-1/2 h-1/9 items-center justify-evenly mb-5 border-2 border-gray-200 rounded-lg">
                <div className="flex w-1/2 h-80 justify-center items-center bg-red-500">
                    <Icon icon="logos:github-actions" className="text-7xl" />
                </div>
                <div className="w-2/3 h-1/6 my-2">
                    <h1 className="text-2xl font-medium pb-2">MangoMarket</h1>
                    <h3 className="text-sm pb-2 font-extralight">
                        Git : 로컬 저장소에서의 Commit , Branch 생성과 Merge 및 충돌을 해결할수
                        있습니다. 원격 저장소와의 연동을 위해 코드를 Push하고 Pull 할 수 있으며,
                        다른 개발자들과 협업하는데 어려움이 없습니다.
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default Project
