// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';

SwiperCore.use([Navigation, Pagination]);


export default () => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay = {
        {delay : 500}
      }
    >
      <SwiperSlide>
        <div className="swiper_style">
          <h3>One</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores architecto velit, sunt quia quaerat error iusto perferendis optio atque dolor vero commodi rerum reiciendis recusandae mollitia fugit molestias aliquam id.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper_style">
          <h3>Two</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores architecto velit, sunt quia quaerat error iusto perferendis optio atque dolor vero commodi rerum reiciendis recusandae mollitia fugit molestias aliquam id.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper_style">
          <h3>Three</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores architecto velit, sunt quia quaerat error iusto perferendis optio atque dolor vero commodi rerum reiciendis recusandae mollitia fugit molestias aliquam id.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper_style">
        <h3>Four</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores architecto velit, sunt quia quaerat error iusto perferendis optio atque dolor vero commodi rerum reiciendis recusandae mollitia fugit molestias aliquam id.</p>
        </div>
      </SwiperSlide>
      
    </Swiper>
  );
};
