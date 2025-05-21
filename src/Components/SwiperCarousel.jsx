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
            image: "https://i.ibb.co/21d8s4db/IMG-20250314-173142.jpg",
            title: "Tech Innovation",
        },
        {
            id: 2,
            image: "https://i.ibb.co/FkYYqhCm/IMG-20250314-173152.jpg",
            title: "Nature Vibes",
        },
        {
            id: 3,
            image: "https://i.ibb.co/chBcVYvP/IMG-20250314-175204.jpg",
            title: "Urban Cityscape",
        },
    ];

    return (
        <div className="w-full max-h-full min-h-full max-w-4xl mx-auto p-4">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 1000 }}
                loop={true}
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative w-full h-96 max-h-fit rounded-2xl overflow-hidden shadow-lg">
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-60 left-40 w-full  text-white text-7xl font-semibold px-4 py-2">
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
