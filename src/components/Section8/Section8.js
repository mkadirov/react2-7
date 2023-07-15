import { Box, Container, Grid, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import React from 'react'
import Carousel4 from '../Carousel/Carousel4'

function Section8() {
  return (
    <Container>
        <Box paddingY={12}>
            <Grid container justifyContent='center'>
                <Grid item xs={10} md= {8} lg={6}>
                    <Box align= 'center'>
                    <Typography variant='h3' marginY={3}>
                        Our Clients
                    </Typography>

                    <Typography color={grey[500]}>
                      Curabitur a felis in nunc fringilla tristique. 
                      Fusce egestas elit eget lorem. Etiam vitae tortor.
                    </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Box marginY={6}>
                <Carousel4/>
            </Box>
        </Box>
    </Container>
  )
}

export default Section8