import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Carousel3 from '../Carousel/Carousel3'
import { blue } from '@mui/material/colors'

function Section7() {
  return (
    
        <Box paddingY={12} bgcolor={blue[50]}>
        <Box align = 'center'>
            <Typography variant='h3' fontWeight={500}>
                What Our Customer Say
            </Typography>
        </Box>
        <Grid container justifyContent='center'>
            <Grid item xs= {12} md={8} lg= {4}>
              <Carousel3/>
            </Grid>
        </Grid>
        </Box>
   

  )
}

export default Section7