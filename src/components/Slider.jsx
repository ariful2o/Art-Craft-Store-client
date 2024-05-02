import { useEffect } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import './Slider.css'

export default function Slider() {
    useEffect(() => {
        let next = document.querySelector('.next')
        let prev = document.querySelector('.prev')

        next.addEventListener('click', function () {
            let items = document.querySelectorAll('.item')
            document.querySelector('.slide').appendChild(items[0])
        })

        prev.addEventListener('click', function () {
            let items = document.querySelectorAll('.item')
            document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
        })
    }, [])

    return (
        <div className=''>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />

            <div className="container container-lg">
                <div className="slide">
                    <div className="item" style={{ backgroundImage: "url(https://capricathemes.com/opencart/OPC02/OPC020033/image/catalog/cms-banner.jpg)" }}>
                        <div className="content">
                            <div className="name">Ceramic Art</div>
                            <div className="des">Craft ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                            <button>See More</button>
                        </div>
                    </div>
                    <div className="item" style={{ backgroundImage: "url(https://capricathemes.com/opencart/OPC02/OPC020033/image/cache/catalog/main-banner-1-1903x975.jpg)" }}>
                        <div className="content">
                            <div className="name">Handmade Ceramics</div>
                            <div className="des">Craft ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                            <button>See More</button>
                        </div>
                    </div>
                    <div className="item" style={{ backgroundImage: "url(https://capricathemes.com/opencart/OPC02/OPC020033/image/cache/catalog/main-banner-2-1903x975.jpg)" }}>
                        <div className="content">
                            <div className="name">Wooden Crafts</div>
                            <div className="des">Craft ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                            <button>See More</button>
                        </div>
                    </div>
                    <div className="item" style={{ backgroundImage: "url(https://capricathemes.com/opencart/OPC02/OPC020033/image/cache/catalog/blog-5-893x752.jpg)" }}>
                        <div className="content">
                            <div className="name">Handmade Ceramics</div>
                            <div className="des">Craft ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                            <button>See More</button>
                        </div>
                    </div>
                    <div className="item" style={{ backgroundImage: "url(http://artcrafts.wpengine.com/wp-content/uploads/2017/07/12.jpg)" }}>
                        <div className="content">
                            <div className="name">Reprehander Pariatur</div>
                            <div className="des">Craft ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                            <button>See More</button>
                        </div>
                    </div>
                    <div className="item" style={{ backgroundImage: "url(https://bw-craftxtore.bzotech.com/wp-content/uploads/2023/07/blog-post-2.webp)" }}>
                        <div className="content">
                            <div className="name">Japanese ceramic</div>
                            <div className="des">Craft ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                            <button>See More</button>
                        </div>
                    </div>
                </div>

                <div className="button">
                    <button className="prev text-blue-400"><FaArrowLeft className='mx-auto' /></button>
                    <button className="next text-blue-400"><FaArrowRight className='mx-auto' /></button>
                </div>

            </div>
            <div className="container-mobile">
                <div className="carousel w-full min-h-40">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://capricathemes.com/opencart/OPC02/OPC020033/image/catalog/cms-banner.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://capricathemes.com/opencart/OPC02/OPC020033/image/cache/catalog/main-banner-1-1903x975.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://capricathemes.com/opencart/OPC02/OPC020033/image/cache/catalog/main-banner-2-1903x975.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src="https://capricathemes.com/opencart/OPC02/OPC020033/image/cache/catalog/blog-5-893x752.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src="https://bw-craftxtore.bzotech.com/wp-content/uploads/2023/07/blog-post-2.webp" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src="https://bw-craftxtore.bzotech.com/wp-content/uploads/2023/07/blog-post-2.webp" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}