import React, { Component } from 'react';
import Slider from 'react-slick';
import img1 from '../../asset/images/slide01.jpg';
import './home.css';

class Home extends Component {
    render() {
        var settings = {
            dots: true,
            arrows: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            dotsClass: "my-dot"
        };

        return (
            <Slider {...settings}>
                <div><img src={img1} alt="01" className="slider-image" /></div>
                <div><h3>2</h3></div>
                <div><h3>3</h3></div>
                <div><h3>4</h3></div>
                <div><h3>5</h3></div>
            </Slider>
        )
    }
}

export default Home