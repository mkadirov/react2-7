import { KeyboardArrowRight } from '@mui/icons-material'
import { Box, Button, Container, Grid, Typography, styled } from '@mui/material'
import { grey } from '@mui/material/colors'
import React from 'react'
import Carousel2 from '../Carousel/Carousel2'

function Section5() {

    const BlackButton = styled(Button)({
        backgroundColor: 'black',
        color: 'white',

    })
  return (
    <Container>
        <Grid container paddingY={10}  justifyContent='center'>
            <Grid item xs={12} md={10} lg={4}>
                <Box marginBottom={5}>
                    <Typography variant='h2' fontWeight={500}>
                        Global Connections
                    </Typography>
                    <Typography color={grey[400]} marginY={5}>
                        Vesibulum fringilla pede sit amet augue. Nam
                        adipiscing. Nulla neque door, sagittis eget, iaculis quis.
                    </Typography>

                    <BlackButton endIcon={<KeyboardArrowRight/>}>
                        View All Jobs
                    </BlackButton>

                </Box>
            </Grid>
            <Grid item xs={10} md={10} lg={8} >
                <Carousel2/>
            </Grid>
        </Grid>
    </Container>
  )
}

export default Section5