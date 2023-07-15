import { Box, Typography } from '@mui/material'
import React from 'react'
import Carousel1 from '../Carousel/Carousel1'
import { blue } from '@mui/material/colors'


function Section3() {
  return (
    <Box align='center' paddingY={10} bgcolor={blue[50]}>
        <Typography variant='h2' fontWeight={500} marginY={10}>
            Top Companies
        </Typography>

        <Box marginY={10}>
            <Carousel1/>
        </Box>
    </Box>
  )
}

export default Section3