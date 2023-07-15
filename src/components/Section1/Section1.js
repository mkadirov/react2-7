import { UploadFile } from '@mui/icons-material';
import { Box, Button, Container, Grid, Typography, styled } from '@mui/material'
import { grey } from '@mui/material/colors';
import React from 'react'

function Section1() {

    const SectionStyle = styled(Container)({
        
    });

    const BlackButton = styled(Button)({
        backgroundColor: 'black',
        color: 'white',
        '&:hover': {
            backgroundColor: grey[700]
        }
    })
  return (
    <SectionStyle>
        <Box paddingTop={10} align="center">
            <Typography variant='h6' color={grey[500]} fontSize={14} paddingY={3}>
               FOR CANDIDATES
            </Typography>
            <Typography variant='h2'  paddingY={3} fontWeight='500'>
               Explore Thousands of Jobs
            </Typography>
            <Grid container justifyContent='center'>
                <Grid item xs={8} md={6} lg={6}>
                  <Typography variant='h6' color={grey[500]} fontSize={18} paddingY={3}>
                    Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. Morbi mattis ullamcorper velit.
                  </Typography>
                </Grid>
            </Grid>
        </Box>

        <Grid container spacing={5} paddingY={5}>
            <Grid item xs={12} md={4} lg={4}>
                <Box >
                    <Box paddingX={15} paddingY={3}>
                    <img  src="https://tse1.mm.bing.net/th?id=OIP.HduKKnd98JoT1FIw6pmJPQHaHa&pid=Api&rs=1&c=1&qlt=95&w=123&h=123" alt="" />
                    </Box>
                </Box>
                <Box align="center">
                <Typography variant='h6' color={grey[500]} fontSize={14} paddingY={1}>
                   STEP 1
                </Typography>
                <Typography variant='h6' fontSize={18} paddingY={1}>
                  Create an account
                </Typography>
                <Typography variant='h6' color={grey[500]} fontSize={14} paddingY={1}>
                  Nunc nonummy metus. Donec elit libero.
                </Typography>
                </Box>
                
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
                <Box >
                    <Box paddingX={15} paddingY={3}>
                    <img  src="https://tse1.mm.bing.net/th?id=OIP.HduKKnd98JoT1FIw6pmJPQHaHa&pid=Api&rs=1&c=1&qlt=95&w=123&h=123" alt="" />
                    </Box>
                </Box>
                <Box align="center">
                <Typography variant='h6' color={grey[500]} fontSize={14} paddingY={1}>
                   STEP 1
                </Typography>
                <Typography variant='h6' fontSize={18} paddingY={1}>
                  Create an account
                </Typography>
                <Typography variant='h6' color={grey[500]} fontSize={14} paddingY={1}>
                  Nunc nonummy metus. Donec elit libero.
                </Typography>
                </Box>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
                <Box >
                    <Box paddingX={15} paddingY={3}>
                    <img  src="https://tse4.mm.bing.net/th?id=OIP.ygyqckjb-OXrOKwQGZqX6wHaHa&pid=Api&P=0&h=180" alt="" />
                    </Box>
                </Box>
                <Box align="center">
                <Typography variant='h6' color={grey[500]} fontSize={14} paddingY={1}>
                   STEP 1
                </Typography>
                <Typography variant='h6' fontSize={18} paddingY={1}>
                  Create an account
                </Typography>
                <Typography variant='h6' color={grey[500]} fontSize={14} paddingY={1}>
                  Nunc nonummy metus. Donec elit libero.
                </Typography>
                </Box>

                
             </Grid>

            </Grid>
               <Box align="center" paddingY={10} >
                    <BlackButton startIcon={<UploadFile/>} variant='contained' >Upload Your CV</BlackButton>
                </Box>
    </SectionStyle>
  )
}

export default Section1