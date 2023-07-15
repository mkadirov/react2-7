import { Star } from '@mui/icons-material'
import { Box, Typography, styled } from '@mui/material'
import { grey } from '@mui/material/colors'
import React from 'react'



function Card3() {

    
  return (
    <Box align='center' paddingY={4}>
        <Box>
            <Star sx={{color: 'coral'}}/>
            <Star sx={{color: 'coral'}}/>
            <Star sx={{color: 'coral'}}/>
            <Star sx={{color: 'coral'}}/>
            <Star sx={{color: 'coral'}}/>
        </Box>

        <Typography marginY={5}>
            Amazing experience I love it a lot. Thanks to the team that
            dreams come true. I appreciate there attitude and approach.
        </Typography>
        <Typography fontWeight={500}>
            Harrison Stein
        </Typography>

        <Typography color={grey[400]}>
            UX/UI Designer
        </Typography>
    </Box>
  )
}

export default Card3