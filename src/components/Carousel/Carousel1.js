import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { companyList } from "../../Data/companyList";
import { Box, Card, Container, Typography, styled } from "@mui/material";
import { grey } from "@mui/material/colors";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: {xs: 'none', md: 'block'}}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: {xs: 'none', md: 'block' }}}
        onClick={onClick}
      />
    );
  }



    

export default class Carousel1 extends Component {


  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
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


    const StyledCard = styled(Card)({
        backgroundColor: 'inherit',
        border: '0',
        boxShadow: 'none',
        
        '&:hover': {
            backgroundColor: 'white',
        }
    })

    const StyledBox = styled(Box)({
       
    })

    

    const list = companyList;

    return (
      <div>

        <Container>
        <Slider  {...settings}>
          {
            list.map((item, index) => {
                return(
                    
                        <StyledCard sx={{height: '320px'}} >
                            <StyledBox >
                                <Box width={80} paddingTop={5}>
                                   <img src={item.logoUrl} alt="" />
                                </Box>
                                <Typography color={grey[400]} marginY={3}>
                                   {item.jobs} jobs
                                </Typography>
                                <Typography>
                                   {item.title}
                                </Typography>
                            </StyledBox>
                        </StyledCard>
                    
                )
            })
          }
        </Slider>
        </Container>
      </div>
    );
  }
}