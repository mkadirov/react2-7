import { Box, Button, Container, Grid, Typography, darken, styled } from '@mui/material'
import React from 'react'
import Animation from '../animation/Animation'
import SearchBox from '../SearchBox/SearchBox'
import { Search } from '@mui/icons-material'
import { grey } from '@mui/material/colors'




export default function Loading() {
    
    

    const HoverButton = styled(Button)({
        backgroundColor: 'coral',
        color: 'white',
        height: 'auto',
        padding: '10px',
        '&:hover': {
          
          backgroundColor: 'red',
          color: 'white',
        },
      });
  return (
    <>
      <Box className='dark-bg'>
      <Container className='dark-bg'>

<Grid container >
  <Grid item xs={12} md={12} lg={7} marginTop={10}>
      <Typography variant="h1" sx={{fontSize: {xs: '30px', md: '96px'}}} fontWeight='500' color="white">
         Get The<span className="coral"> Carrer </span>You Deserve</Typography>
      <Typography variant="h6" color='grey' marginY={8}>Etiam sollicitudin, ipsum eu pulvinar rutrum, 
         tellus ipsum laoreet sapien, quis venenatis ante
         odio sit amet eros.
      </Typography>
      <Box bgcolor='white' 
      paddingX={2} 
      paddingY={4} 
      display='inline-block'
      borderRadius={4}
      >
          <SearchBox/>
          <SearchBox/>
          
          <HoverButton >
              <Search/>
          </HoverButton>
          
      </Box>

      <Grid container spacing={3} paddingY={6}>
           <Grid item xs={6} md= {3} align='center'>
              <Typography variant='h5' color='grey' >
              airbnb
              </Typography>
           </Grid>
           <Grid item xs={6} md= {3} align='center'>
              <Typography variant='h5' color='grey' >
              Dropbox
              </Typography>
           </Grid>
           <Grid item xs={6} md= {3} align='center'>
              <Typography variant='h5' color='grey' sx={{fontWeight: 'bold'}} >
              facebook
              </Typography>
           </Grid>
           <Grid item xs={6} md= {3} align='center'>
              <Typography variant='h5' color='grey' sx={{fontWeight: '400'}} >
              Google
              </Typography>
           </Grid>

      </Grid>

      <Box sx={{display: {xs: 'none', md: 'flex'}}}  paddingY={6}>

          <Box paddingRight={4} sx={{borderRight: "1px dotted grey"}}>
              <Typography variant='h4' color={grey[200]}>
                  2m+
              </Typography>
              <Typography variant='h6' color={grey[500]}>
                  Jobs
              </Typography>
          </Box>
          <Box paddingX={4} sx={{borderRight: "1px dotted grey"}}>
              <Typography variant='h4' color={grey[200]}>
                  500k+
              </Typography>
              <Typography variant='h6' color={grey[500]}>
                Successful Hiring
              </Typography>
          </Box>
          <Box paddingX={4} sx={{borderRight: "1px dotted grey"}}>
              <Typography variant='h4' color={grey[200]}>
                  250k+
              </Typography>
              <Typography variant='h6' color={grey[500]}>
              Partners
              </Typography>
          </Box>
          <Box paddingX={4}>
              <Typography variant='h4' color={grey[200]}>
                 156k+
              </Typography>
              <Typography variant='h6' color={grey[500]}>
                 Employee
              </Typography>
          </Box>
      </Box>
  </Grid>
  <Grid item sx={{display:{xs: 'none', md: 'inline'}}} md={12} lg={5}>
    <Animation/>
  </Grid>
</Grid>
</Container>
      </Box>
    </>
  )
}
