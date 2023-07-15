import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Box, Button } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { countryList } from "../../Data/countryList";
import Card2 from "../Cards/Card2";


export default class Carousel2 extends Component {
    constructor(props) {
      super(props);
      this.next = this.next.bind(this);
      this.previous = this.previous.bind(this);
    }
    next() {
      this.slider.slickNext();
    }
    previous() {
      this.slider.slickPrev();
    }

    list = countryList;

    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
      ]
        
        };
      return (
        <div>
          
          <Slider ref={c => (this.slider = c)} {...settings}>

            {
                this.list.map((item, index) => {
                    return (
                        <Card2 item= {item} key={index + item.country}/>
                    )
                })
            }
          </Slider>

          <Box marginTop={8} sx={{ textAlign: "center" }}>
            <Button   onClick={this.previous} >
              <KeyboardArrowLeft/>
            </Button>
            <Button  onClick={this.next}>
              <KeyboardArrowRight/>
            </Button>
          </Box>
        </div>
      );
    }
  }