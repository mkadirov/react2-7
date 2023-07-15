import { BarChart, KeyboardArrowDown, Search, Settings } from '@mui/icons-material'
import { AppBar, Badge, Box, Button, Container, Fade, Grid, Menu, MenuItem, Popper, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import {  Lists } from '../../Data/list';

export default function Header() {

    const lists = Lists;
    

    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
  
    const openMenu = (event) => {
      setAnchorEl(event.currentTarget);
      setOpen(true);
    };

    const closeMenu = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen(false)
    }
  
    const canBeOpen = open && Boolean(anchorEl);
    const id = canBeOpen ? 'transition-popper' : undefined;

    
  return (
    <>
      
    <Box className= "dark-bg">
    <Container >
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" sx={{backgroundColor: "inherit", boxShadow: 'none'}} >
        <Toolbar >
         
          <Box display="flex"
               justifyContent="space-between"
               alignItems='center'
               width="100%"
               paddingY={3}>

                <Box sx={{width: {xs:'60px', md: '100px'}}}>
                  <Badge badgeContent={'V.2.1.0'}>
                     <Box paddingRight={2}>
                     <svg xmlns="http://www.w3.org/2000/svg " width="100%" height="100%" fill="none" viewBox="0 0 1080 288"><ellipse cx="996" cy="204" fill="#FA541C" rx="60" ry="60"></ellipse><path fill="currentColor" d="M712 264h-58.815l-98.37-148.034V264H496V24h58.815l98.37 148.718V24H712v240zM801.265 70.838v48.547H880v45.128h-78.735v52.649H888V264H744V24h144v46.838h-86.735zM344.333 264c-22 0-42.222-5.118-60.666-15.355-18.223-10.236-32.778-24.478-43.667-42.726-10.667-18.47-16-39.165-16-62.086s5.333-43.505 16-61.752c10.889-18.248 25.444-32.49 43.667-42.726C302.111 29.118 322.333 24 344.333 24s42.111 5.118 60.334 15.355C423.111 49.59 437.556 63.833 448 82.08c10.667 18.247 16 38.831 16 61.752s-5.333 43.616-16 62.086c-10.667 18.248-25.111 32.49-43.333 42.726C386.444 258.882 366.333 264 344.333 264zm0-52.072c18.667 0 33.556-6.231 44.667-18.693 11.333-12.462 17-28.929 17-49.402 0-20.695-5.667-37.163-17-49.402-11.111-12.462-26-18.692-44.667-18.692-18.889 0-34 6.12-45.333 18.358-11.111 12.24-16.667 28.818-16.667 49.736 0 20.696 5.556 37.274 16.667 49.736 11.333 12.239 26.444 18.359 45.333 18.359zM89.71 216.137H192V264H24v-44.444L125.613 71.863H24V24h168v44.444L89.71 216.137z"></path></svg>
                     </Box>
                  </Badge>
          
                </Box>
                <Box sx={{ display: { xs: 'none', md: 'flex' } }} gap={3}>
                    <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                         Home
                    </Button>
                    <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                         Components
                    </Button>
                    <Box onMouseEnter={openMenu} onMouseLeave={closeMenu}>

                    <Button aria-describedby={id}   sx={{ my: 2, color: 'white',  }} endIcon= {<KeyboardArrowDown/>}>
                        Toggle Popper
                    </Button>
                    
                        <Popper id={id} open={open} anchorEl={anchorEl} >
                        
                            <Box paddingX={2} paddingY={4} sx={{ border: 1, 
                                 
                                bgcolor: '#e1f5fe', 
                                width: "100vw",
                                
                                }}>
                              <Box>
                                <Grid container >
                                   {
                                    lists.map(list1 => {
                                        return (
                                            <Grid item md={2}>
                                            <Typography variant='h5'>{list1.title}</Typography>
                                            <Box 
                                            sx={{
                                            width: {md:  "90%", lg: '80%'}, 
                                            height: {xs: '80px', md: '120px'}, 
                                            overflow: 'hidden'}} 
                                            borderRadius={3}
                                            marginY={2} >
                                                <img src={list1.imgUrl} alt="" />
                                            </Box>
                                            {
                                                list1.list.map(item=> 
                                                    <Typography 
                                                    sx={{fontSize: '14px', paddingY: '5px', fontWeight: '400'}}
                                                    variant='h6' >{item}</Typography>
                                                )
                                            }
                                            
                                        </Grid>
                                        )
                                    })
                                   }
                                </Grid>
                              </Box>
                            </Box>
                        </Popper>

                    </Box>
                    <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                         Docs
                    </Button>
                </Box>

                <Box>
                  <Button color="inherit"><Search/></Button>
                  <Button color="inherit" >
                    <Box sx={{
                        animation: 'rotate 10s linear infinite',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                      <Settings/> 
                    </Box>
                  </Button>
                  <Button variant='text'  color="inherit" sx={{ display: { xs: 'none', md: 'inline' } }}>Buy Now</Button>
                </Box>

                <Button variant='text'  color="inherit" sx={{ display: { xs: 'inline', md: 'none' } }}>
                    <MenuIcon/>
                </Button>

          </Box>
        </Toolbar>
      </AppBar>
    </Box>
    </Container>
    </Box>
      
    </>
  )
}
