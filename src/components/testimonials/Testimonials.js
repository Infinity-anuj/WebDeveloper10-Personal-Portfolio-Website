import './Testimonials.css'
import Avatar1 from '../../assets/customer_150x150.jpg'
import Avatar2 from '../../assets/customer_150x150.jpg'
import Avatar3 from '../../assets/customer_150x150.jpg'
import Avatar4 from '../../assets/customer_150x150.jpg'

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {

    const data = [
        {
            avatar: Avatar1,
            name: 'Waiting for Reviews',
            review: 'This part of website is withheld, as soon as i recivce reviews from you poeple after viewing this portfolio i will add those review to this section of my portfolio website. '
        },
        {
            avatar: Avatar2,
            name: '...',
            review: '..'
        },
        {
            avatar: Avatar3,
            name: '...',
            review: '...'
        },
        {
            avatar: Avatar4,
            name: '...',
            review: '...'
        }
    ]

    return (
        <section id={"testimonials"}>
            <h5>Review from Clients</h5>
            <h2>Testimonials</h2>

            <Swiper
                className={"container testimonials__container"}
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{clickable: true}} >

                {
                data.map(({ avatar, name, review }, index) => {
                    return (
                        <SwiperSlide key={index} className={"testimonial"}>
                            <div className={"client__avatar"}>
                                <img src={avatar} alt={"Client Image"} />
                            </div>
                            <h5 className={"client__name"}>{name}</h5>
                            <small className={"client__review"}>{review}</small>
                        </SwiperSlide>
                    )
                })}



            </Swiper>

        </section>
    )
}

export default Testimonials