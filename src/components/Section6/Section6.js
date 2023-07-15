import { NoteAddOutlined } from '@mui/icons-material'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import React from 'react'

function Section6() {
  return (
    <Box className ='dark-bg' paddingY={10}>
        <Container>
            <Grid container>
                <Grid item xs={12} md={6} lg= {6}>
                    <Typography sx={{color: 'coral'}}>
                        FOR RECRUITERS
                    </Typography>
                    <Typography variant='h2' sx={{color: 'white'}} fontWeight={500} paddingY={4}>
                        Do You Have A Position To Post Job?
                    </Typography>

                    <Typography color={grey[500]}>
                       Donec mi odio, faucibus at, scelerisque quis, 
                       convallis in, nisi. Morbi mattis ullamcorper velit.
                    </Typography>

                    <Box  marginY={5}>
                        <Button sx={{backgroundColor: 'coral', color:'white'}} startIcon={<NoteAddOutlined/>}>
                            Post A Job
                        </Button>
                    </Box>
                </Grid>

                <Grid item xs={12} md={6} lg= {6}>
                    <Box>
                        <img src="https://zone-ui.vercel.app/assets/illustrations/illustration_recruitment.svg" alt="" />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    </Box>
  )
}

export default Section6