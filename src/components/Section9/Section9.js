import { Apple, Google } from '@mui/icons-material'
import { Box, Button, Container, Grid, Typography, styled } from '@mui/material'
import { grey } from '@mui/material/colors'
import React from 'react'



function Section9() {

   

    const BlackButton = styled(Button)({
        backgroundColor: 'black',
        color: 'white',
        display: 'flex',
        marginTop: '20px',
        marginBottom: '30px',
        '&:hover':{
            backgroundColor: 'black',
            color: "white"
        }
    })
  return (
    <Box sx={{backgroundColor: '#f1f8e9'}}>
        <Container>
        <Box paddingY={10}>
            <Grid container>
                <Grid item xs={12} md= {7} lg={7}>
                    <Box >
                        <Typography variant='h3' marginY={4} fontWeight={500}>
                            Download App
                        </Typography>

                        <Typography>
                          Now finding the new job just got even easier with our new app!
                        </Typography>

                        <Box sx={{display: {xs: 'block', md: 'flex'}, gap: '10px'}}>
                            <BlackButton  startIcon= {<Apple/>} >
                               <Box>
                               <Typography color={grey[400]} fontSize={10} >
                                    Download On The
                                </Typography>
                                <Typography   fontSize={12}>
                                    Apple Store
                                </Typography>
                               </Box>
                            </BlackButton>
                            <BlackButton startIcon= {<Google/>}>
                               <Box>
                               <Typography color={grey[400]} fontSize={10} >
                                    Download From
                                </Typography>
                                <Typography   fontSize={12}>
                                    Google Play
                                </Typography>
                               </Box>
                            </BlackButton>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md= {5} lg={5}>
                    <Box>
                       <img src="https://zone-ui.vercel.app/assets/images/career/career_download_app.png" alt="" />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    </Container>
    </Box>
  )
}

export default Section9