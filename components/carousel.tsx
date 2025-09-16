'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import { Button } from './ui/button';
export default function Carousel() {
  const slides = [
    {
      title: 'WAN 2.2',
      subtitle: 'WAN 2.2 Image generation',
      desc: 'Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.',
      img: 'https://images.unsplash.com/photo-1422466654108-5e533f591881?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGxhaW5zfGVufDB8fDB8fHww',
      button: 'Try WAN 2.2',
    },
    {
      title: 'Open Source',
      subtitle: 'FLUX1 Krea',
      desc: "We're making the weights to our FLUX1 Krea model open-source...",
      img: 'https://images.unsplash.com/photo-1422466654108-5e533f591881?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGxhaW5zfGVufDB8fDB8fHww',
      button: 'Explore',
    },
    {
      title: 'Open Source',
      subtitle: 'FLUX1 Krea',
      desc: "We're making the weights to our FLUX1 Krea model open-source...",
      img: 'https://images.unsplash.com/photo-1422466654108-5e533f591881?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGxhaW5zfGVufDB8fDB8fHww',
      button: 'Explore',
    },
    {
      title: 'Open Source',
      subtitle: 'FLUX1 Krea',
      desc: "We're making the weights to our FLUX1 Krea model open-source...",
      img: 'https://images.unsplash.com/photo-1422466654108-5e533f591881?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGxhaW5zfGVufDB8fDB8fHww',
      button: 'Explore',
    },
    {
      title: 'Open Source',
      subtitle: 'FLUX1 Krea',
      desc: "We're making the weights to our FLUX1 Krea model open-source...",
      img: 'https://images.unsplash.com/photo-1422466654108-5e533f591881?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGxhaW5zfGVufDB8fDB8fHww',
      button: 'Explore',
    },
    {
      title: 'Open Source',
      subtitle: 'FLUX1 Krea',
      desc: "We're making the weights to our FLUX1 Krea model open-source...",
      img: 'https://images.unsplash.com/photo-1422466654108-5e533f591881?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGxhaW5zfGVufDB8fDB8fHww',
      button: 'Explore',
    },
    {
      title: 'Open Source',
      subtitle: 'FLUX1 Krea',
      desc: "We're making the weights to our FLUX1 Krea model open-source...",
      img: 'https://images.unsplash.com/photo-1422466654108-5e533f591881?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGxhaW5zfGVufDB8fDB8fHww',
      button: 'Explore',
    },
  ];
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination]}
        pagination={{
          clickable: true,
          el: '.custom-pagination',
          renderBullet: (index, className) => {
            const color = 'bg-gray-400';
            return `<span class="${className} custom-dot"></span>`;
          },
        }}
        navigation={{ prevEl: '.custom-prev', nextEl: '.custom-next' }}
        spaceBetween={50}
        // slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1.5 },
          1268: { slidesPerView: 2 },
        }}
        className="w-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              {/* Centered Title */}

              <div className="absolute inset-0  flex flex-col justify-end p-6 text-white">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <h2 className="text-4xl lg:text-7xl font-black text-center text-white drop-shadow-lg hidden md:block">
                    {slide.title}
                  </h2>
                </div>
                <div className="flex justify-between flex-col lg:flex-row">
                  <div className="max-w-[450px]">
                    <h2 className="text-2xl lg:text-3xl font-bold">
                      {slide.subtitle}
                    </h2>
                    <p className="mt-2 leading-3.5">{slide.desc}</p>
                  </div>
                  <button className="mt-4 lg:self-center bg-white text-black px-4 py-2 rounded-4xl">
                    {slide.button}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex ">
        <div className="custom-pagination mt-4 flex justify-center flex-1"></div>
        <div className="custom-navigation lg:flex gap-2 mt-2 hidden">
          <Button
            className="custom-prev bg-gray-200 text-black rounded-full"
            size={'icon'}
          >
            <ChevronLeftIcon />
          </Button>
          <Button
            className="custom-next bg-gray-200 text-black rounded-full"
            size={'icon'}
          >
            <ChevronRightIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}
