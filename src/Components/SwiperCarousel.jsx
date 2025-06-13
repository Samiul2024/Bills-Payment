import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SwiperCarousel = () => {
    const slides = [
        {
            id: 1,
            image: "https://i.ibb.co/hJfR5Z88/nesco.png",
            title: "NESCO",
        },
        {
            id: 2,
            image: "https://i.ibb.co/FbxRbrrr/wapda.jpg",
            title: "WAPDA",
        },
        {
            id: 3,
            image: "https://i.ibb.co/MyqN107d/dwasa.png",
            title: "WASA",
        },
    ];

    return (
        <div className="w-full max-h-full min-h-full max-w-4xl mx-auto mb-4 p-4">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 2500 }}
                loop={true}
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="w-64 h-64 mx-auto mb-8 flex flex-col items-center justify-center text-center rounded-2xl shadow-lg">
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-fit h-fit mb-4 object-cover"
                            />
                            <div className="text-yellow-400 bg-gray-600 text-2xl font-semibold px-4 ">
                                {slide.title}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SwiperCarousel;
