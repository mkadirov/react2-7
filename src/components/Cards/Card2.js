import React from 'react'
import { Box, Card, Typography, styled } from "@mui/material";
import { grey } from '@mui/material/colors';


function Card2({item}) {

    const StyledCard = styled(Card)({
        border: '0',
        boxShadow:'none',
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '30px'
    })

    const StyledBoxWrapper = styled(Box)({
        width: '90%',
        borderRadius: '20px',
        overflow: 'hidden',
        border: '1px solid #f3e5f5'

    })

    const StyledBox = styled(Box)({
        width: '100%',
        height: '320px',
        overflow: 'hidden'
    })

    const HoverImage = styled('img')({
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'scale(1.2)',
        },
      });

  return (
    <StyledCard>
              <Box align='center'>
              <StyledBoxWrapper>
                    <Box >
                    <StyledBox>
                        <HoverImage src={item.imgUrl} alt="" />
                    
                    </StyledBox>
                    </Box>

                    <Box align='center'>
                        <Typography marginY={2}>
                            {item.country}
                        </Typography>
                        <Typography marginBottom={2} color={grey[400]} >
                            {item.job} jobs
                        </Typography>
                    </Box>
               </StyledBoxWrapper>
              </Box>
            </StyledCard>
  )
}

export default Card2