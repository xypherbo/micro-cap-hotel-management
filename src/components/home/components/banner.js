import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import Slider from 'react-slick';
import img1 from '../../../asset/images/slide01.jpg';
import img2 from '../../../asset/images/slide02.jpg';
import '../home.css'
class Banner extends Component {
    render() {
        var settings = {
            dots: true,
            arrows: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            fade: true,
            dotsClass: "banner-dot",
            className: "banner-container"
        };

        return (
            <Slider {...settings}>
                <Parallax className="banner-slide" bgImage={img1} strength={700}>
                    <div className="inner">
                        <header>
                            <p>A free responsive web site template by <a href="https://templated.co">TEMPLATED</a></p>
                            <h2>Hielo</h2>
                        </header>
                    </div>
                </Parallax>
                <Parallax className="banner-slide" bgImage={img2} strength={700}>
                    <div className="inner">
                        <header>
                            <p>A free responsive web site template by <a href="https://templated.co">TEMPLATED</a></p>
                            <h2>Hielo</h2>
                        </header>
                    </div>
                </Parallax>
            </Slider>
        )
    }
}

export default Banner