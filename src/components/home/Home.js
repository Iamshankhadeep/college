import React from "react";
import { HomeWrapper } from "./Home.Styled";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";

const Home = () => {
  return (
    <HomeWrapper>
      <div>
        <h2>Header file</h2>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <img
              src="https://birparacollege.ac.in/wp-content/uploads/2020/08/IMG-20200808-WA0006.jpg"
              alt="7"
              title="7"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://birparacollege.ac.in/wp-content/uploads/2018/06/3.jpg"
              alt="Student"
              title="Student"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://birparacollege.ac.in/wp-content/uploads/2020/08/Staff-1400X400.jpg"
              alt="College Staff"
              title="College Staff"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://birparacollege.ac.in/wp-content/uploads/2020/08/Galaxy-IT-Station_Birpara-College_Web02_J2-App.jpg"
              alt="02_Birpara College_App"
              title="02_Birpara College_App"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://birparacollege.ac.in/wp-content/uploads/2020/08/Galaxy-IT-Station_Birpara-College_Web01.png"
              alt="01_Birpara College_Web 001"
              title="01_Birpara College_Web 001"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://birparacollege.ac.in/wp-content/uploads/2020/07/BC-WEB-IGNOU-2020-2-1.jpg"
              alt="02_BC WEB IGNOU"
              title="02_BC WEB IGNOU"
            />
          </SwiperSlide>
        </Swiper>
        {/* <Slider {...settings} style={{ width: "100%", heigth: "100%" }}>
          <div>
            <img
              src="https://birparacollege.ac.in/wp-content/uploads/2020/08/IMG-20200808-WA0006.jpg"
              alt="7"
              title="7"
            />
          </div>
          <div>
            <img
              src="https://birparacollege.ac.in/wp-content/uploads/2018/06/3.jpg"
              alt="Student"
              title="Student"
            />
          </div>
          <div>
            <img
              src="https://birparacollege.ac.in/wp-content/uploads/2020/08/Staff-1400X400.jpg"
              alt="College Staff"
              title="College Staff"
            />
          </div>
          <div>
            <img
              src="https://birparacollege.ac.in/wp-content/uploads/2020/08/Galaxy-IT-Station_Birpara-College_Web02_J2-App.jpg"
              alt="02_Birpara College_App"
              title="02_Birpara College_App"
            />
          </div>
          <div>
            <img
              src="https://birparacollege.ac.in/wp-content/uploads/2020/08/Galaxy-IT-Station_Birpara-College_Web01.png"
              alt="01_Birpara College_Web 001"
              title="01_Birpara College_Web 001"
            />
          </div>
          <div>
            <img
              src="https://birparacollege.ac.in/wp-content/uploads/2020/07/BC-WEB-IGNOU-2020-2-1.jpg"
              alt="02_BC WEB IGNOU"
              title="02_BC WEB IGNOU"
            />
          </div>
        </Slider> */}
      </div>
    </HomeWrapper>
  );
};

export default Home;
