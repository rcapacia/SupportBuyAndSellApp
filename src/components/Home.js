import React from "react";
import "../stylesheet/Hero.css";
import HeroImg from "../assets/hero.png";
import { CgShoppingBag } from "react-icons/cg";
import { BiRightArrow } from "react-icons/bi";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { SliderProducts } from "../Data/Product1";
import "../stylesheet/Slider.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../stylesheet/Reviews.css";
import ReviewImg from "../assets/review.png";
import { ReviewsData } from "../Data/ReviewsData";

import "../stylesheet/Footer.css";
import StandLogo from "../assets/logoTransparent.png";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialGithub } from "react-icons/ti";
import { TiSocialVimeo } from "react-icons/ti";

function Home() {
  return (
    <>
      <div className="hero">
        {/* leftSide */}
        <div className="sides">
          <span className="text1">Buy, Sell and Discover</span>
          <div className="text2">
            <span>Recent Supports</span>
            <span> Click now to find the item you've been looking for.</span>
          </div>
        </div>
        {/* middle */}

        <div className="home-wrapper">
          <div className="bg"></div>
          <img src={HeroImg} alt="" width={600} />
          <div className="cart2">
            <CgShoppingBag />
            <div className="home-signUp">
              <span>
                <a href="../sign-up"> Signup Now!</a>
              </span>
              <div>
                <BiRightArrow />
              </div>
            </div>
          </div>
        </div>

        {/* rightSide */}
        <div className="sides">
          <div className="traffic">
            <span>3.1m</span>
            <span>Views Monthly</span>
          </div>
          <div className="customers">
            <span>500k</span>
            <span>On going Supporters</span>
          </div>
        </div>
      </div>
      <br></br>
      {/* slider */}
      <div className="s-container">
        <Swiper
          modules={[Pagination, Navigation]}
          className="mySwiper"
          loopFillGroupWithBlank={true}
          navigation={true}
          slidesPerView={3}
          spaceBetween={40}
          slidesPerGroup={2}
          loop={true}
        >
          {SliderProducts.map((slide, i) => (
            <SwiperSlide>
              <div className="left-s">
                <div className="name">
                  <span>{slide.name}</span>
                  <span>{slide.detail}</span>
                </div>
                <span>${slide.price}</span>
                <div>
                  <a href="../all"> Support now</a>
                </div>
              </div>
              <img src={slide.img} alt="supports" className="img-support" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* supports section
      <Supports /> */}
      {/* reviews section */}
      <div className="reviews">
        <div className="r-wrapper">
          <div className="r-container">
            <span>Top Supporter</span>
            <span>
              Johnny says, This is the best site to buy pre-owned items anywhere
              on the internet!
            </span>
          </div>
          <img src={ReviewImg} alt="" />

          <div className="r-container">
            <span>300k</span>
            <span>Growing Supporters Worldwide</span>
          </div>
        </div>
        {/* reviews */}
        <div className="supporters">Testimonials</div>
        <div className="carousel">
          <Swiper
            slidesPerView={3}
            slidesPerGroup={1}
            spaceBetween={20}
            className="tCarousel"
          >
            {ReviewsData.map((reviews, i) => (
              <SwiperSlide>
                <div className="slideReviews">
                  <img src={reviews.image} alt="" />
                  <span>{reviews.comment}</span>
                  <hr />
                  <span>{reviews.name}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* footer */}
      <div className="footerWrapper">
        <hr />

        <div className="footer">
          <div className="footerLogo">
            <img src={StandLogo} alt="" />
          </div>
          <div className="block1">
            <div className="details">
              <span>SHOP</span>
              <span className="png">
                <span>Brands</span>
              </span>
              <span className="png">
                <span>Shop Local</span>
              </span>
              <span className="png">
                <span>Shop Online</span>
              </span>
              <span className="png">
                <span>Search</span>
              </span>
            </div>
          </div>

          {/* next block */}
          <div className="block1">
            <div className="details">
              <span>POLICY</span>
              <span className="png">
                <span>Safety Guidelines</span>
              </span>
              <span className="png">
                <span>Support Policy</span>
              </span>
              <span className="png">
                <span>Terms of Service</span>
              </span>
              <span className="png">
                <span>Privacy</span>
              </span>
            </div>
          </div>

          {/* next block */}
          <div className="block1">
            <div className="details">
              <span>COMPANY</span>
              <span className="png">
                <span>About Us</span>
              </span>
              <span className="png">
                <span>Contact US</span>
              </span>
              <span className="png">
                <span>Location</span>
              </span>
              <span className="png">
                <span>Blog</span>
              </span>
              <span className="png">
                <span>FAQs</span>
              </span>
              <span className="png">
                <span>Investors</span>
              </span>
            </div>
          </div>
          {/* social media block */}
          {/* next block */}
          <div className="block1">
            <div className="details">
              <span className="png">
                <TiSocialFacebook className="icon" />
              </span>
              <span>
                <TiSocialYoutube className="icon" />
              </span>
              <span>
                <TiSocialInstagram className="icon" />
              </span>
              <span>
                <TiSocialGithub className="icon" />
              </span>
              <span>
                <TiSocialVimeo className="icon" />
              </span>
            </div>
          </div>
        </div>
        <div className="copyRight">
          <span>Copyright @2023 by Support, Inc.</span>
          <span>All rights reserved </span>
        </div>
      </div>
    </>
  );
}

export default Home;
