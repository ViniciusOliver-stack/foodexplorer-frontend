import { Container, Content } from './styles'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination, Navigation, HashNavigation } from "swiper";

export function Carousel({ children }) {
  return (
    <Container>
      <Content>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        hashNavigation={{
          watchState: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, HashNavigation]}
        className="mySwiper"
      >
        <SwiperSlide>{children}</SwiperSlide>
      </Content>
    </Container>
  )
}
