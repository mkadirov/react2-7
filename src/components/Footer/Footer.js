import { Box, Button, Container, Grid, Typography, styled } from '@mui/material'
import { grey } from '@mui/material/colors'
import React from 'react'
import { Lists } from '../../Data/list';
import { Apple, Facebook, Google, Instagram, LinkedIn, Twitter } from '@mui/icons-material';

function Footer() {

    const list1 = Lists[0].list;
    const list2 = Lists[1].list;
    const list3 = Lists[2].list;
    const list4 = Lists[3].list;
    const list5 = Lists[4].list;

    const NavLink = styled(Typography)({
        fontSize: '12px',
        fontWeight: '400',
        cursor: 'pointer',
        marginTop: '10px',

        '&:hover': {
            textDecoration: 'underline'
        }
    });

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
    });

  return (
    <Box>
        <Container>
        <Box paddingY={12} sx={{borderBottom:'1px solid #e3f2fd'}}>
            <Grid container spacing={5}>
                <Grid item xs= {12} md={4} lg={5}>
                    <Box>
                       <Box marginY={3} sx={{width: {xs:'60px', md: '100px'}}}>
                           <svg xmlns="http://www.w3.org/2000/svg " width="100%" height="100%" fill="none" viewBox="0 0 1080 288"><ellipse cx="996" cy="204" fill="#FA541C" rx="60" ry="60"></ellipse><path fill="currentColor" d="M712 264h-58.815l-98.37-148.034V264H496V24h58.815l98.37 148.718V24H712v240zM801.265 70.838v48.547H880v45.128h-78.735v52.649H888V264H744V24h144v46.838h-86.735zM344.333 264c-22 0-42.222-5.118-60.666-15.355-18.223-10.236-32.778-24.478-43.667-42.726-10.667-18.47-16-39.165-16-62.086s5.333-43.505 16-61.752c10.889-18.248 25.444-32.49 43.667-42.726C302.111 29.118 322.333 24 344.333 24s42.111 5.118 60.334 15.355C423.111 49.59 437.556 63.833 448 82.08c10.667 18.247 16 38.831 16 61.752s-5.333 43.616-16 62.086c-10.667 18.248-25.111 32.49-43.333 42.726C386.444 258.882 366.333 264 344.333 264zm0-52.072c18.667 0 33.556-6.231 44.667-18.693 11.333-12.462 17-28.929 17-49.402 0-20.695-5.667-37.163-17-49.402-11.111-12.462-26-18.692-44.667-18.692-18.889 0-34 6.12-45.333 18.358-11.111 12.24-16.667 28.818-16.667 49.736 0 20.696 5.556 37.274 16.667 49.736 11.333 12.239 26.444 18.359 45.333 18.359zM89.71 216.137H192V264H24v-44.444L125.613 71.863H24V24h168v44.444L89.71 216.137z"></path></svg>
                        </Box>

                        <Typography color={grey[500]} marginBottom={5}>
                        The starting point for your next project based 
                        on easy-to-customize Material-UI © helps you 
                        build apps faster and better.
                        </Typography>

                        <Typography variant='h5'>
                           Community
                        </Typography>

                        <Typography variant='h6' fontSize={14} fontWeight={400} marginY={1}>
                           Documentation
                        </Typography>
                        <Typography variant='h6' fontSize={14} fontWeight={400} marginY={1}>
                           Changelog
                        </Typography>
                        <Typography variant='h6' fontSize={14} fontWeight={400} marginY={1}>
                           Contributing
                        </Typography>

                        <Typography variant='h5' marginTop={7}>
                          Let’s stay in touch
                        </Typography>

                        <Typography color={grey[400]} marginBottom={5} fontSize={12}>
                        Ubscribe to our newsletter to receive latest 
                        articles to your inbox weekly.
                        </Typography>

                        <Typography variant='h5' marginTop={7} marginBottom={1}>
                          Social
                        </Typography>

                        <Box sx={{display: 'flex'}}>
                            <Facebook sx={{color:'coral', marginRight:'5px'}}/>
                            <Instagram sx={{color:'coral', marginRight:'5px'}}/>
                            <LinkedIn sx={{color:'coral', marginRight:'5px'}}/>
                            <Twitter sx={{color:'coral', marginRight:'5px'}}/>
                        </Box>

                        <Typography variant='h5' marginTop={7} marginBottom={1}>
                          Apps
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
                <Grid item xs= {12} md={8} lg={7}>
                    <Box>
                        <Grid container>
                            <Grid item xs= {12} md={6}>
                                <Box>
                                    <Grid container>
                                    <Grid item xs= {6} >
                                        <Typography marginY={3} variant='h6' fontSize={16}>
                                            Marketing
                                        </Typography>
                                        {
                                            list1.map((item, index)=> {
                                                return(
                                                    <NavLink color={grey[500]} key={index+ item}>{item}</NavLink>
                                                )
                                            })
                                        }
                                        <Typography marginY={3} variant='h6' fontSize={16}>
                                            Travel
                                        </Typography>
                                        {
                                            list2.map((item, index)=> {
                                                return(
                                                    <NavLink color={grey[500]} key={index+ item}>{item}</NavLink>
                                                )
                                            })
                                        }

                                    </Grid>
                                    <Grid item xs= {6}>
                                        <Typography marginY={3} variant='h6' fontSize={16}>
                                            Career
                                        </Typography>
                                        {
                                            list3.map((item, index)=> {
                                                return(
                                                    <NavLink color={grey[500]} key={index+ item}>{item}</NavLink>
                                                )
                                            })
                                        }
                                        <Typography marginY={3} variant='h6' fontSize={16}>
                                            E-lerning
                                        </Typography>
                                        {
                                            list4.map((item, index)=> {
                                                return(
                                                    <NavLink color={grey[500]} key={index+ item}>{item}</NavLink>
                                                )
                                            })
                                        }
                                    </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                            <Grid item xs= {12} md={6}>
                            <Box>
                                    <Grid container>
                                    <Grid item xs= {6}>
                                        <Typography marginY={3} variant='h6' fontSize={16}>
                                            E-commerce
                                        </Typography>
                                        {
                                            list5.map((item, index)=> {
                                                return(
                                                    <NavLink color={grey[500]} key={index+ item}>{item}</NavLink>
                                                )
                                            })
                                        }
                                        
                                    </Grid>
                                    <Grid item xs= {6}>
                                        <Typography marginY={3} variant='h6' fontSize={16}>
                                            Common
                                        </Typography>
                                        {
                                            list2.map((item, index)=> {
                                                return(
                                                    <NavLink color={grey[500]} key={index+ item}>{item}</NavLink>
                                                )
                                            })
                                        }
                                        {
                                            list1.map((item, index)=> {
                                                return(
                                                    <NavLink color={grey[500]} key={index+ item}>{item}</NavLink>
                                                )
                                            })
                                        }
                                        
                                    </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Box>

        <Box paddingY={3} display='flex' justifyContent='space-between' sx={{flexDirection: {xs: 'column', md: 'row'}}}>
            <Typography color={grey[400]} fontSize={12}>
              © 2023. All rights reserved
            </Typography>

            <Box display='flex' gap={2}>
            <Typography color={grey[400]} fontSize={12}>
            Help Center
            </Typography>
            <Typography color={grey[400]} fontSize={12}>
            Terms of Service
            </Typography>
            </Box>
        </Box>
    </Container>
    </Box>
  )
}

export default Footer