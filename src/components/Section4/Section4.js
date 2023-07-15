import { AccountBalance, AddCard, ArrowDropDown, ArrowRightAltSharp, CurrencyBitcoin, Insights, ManageAccounts, MonitorHeart, QrCode2, Storefront,  } from '@mui/icons-material'
import { Box, Button, Card, Container, Grid, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import React from 'react'
import { styled } from '@mui/material'


function Section4() {

    const StyledCard = styled(Card)({
        boxShadow: 'none',
        border: '1px solid #e3f2fd'
    })

    const StyledButton = styled(Button)({
        border: '1px solid grey',
        color: "black"
    })
    
  return (
    <Container >
        <Box paddingY={15}>

            <Box align='center'>
                <Typography variant='h2' fontWeight={500} marginY={10}>
                  Hot Categories
                </Typography>
            </Box>
        <Grid container spacing={4}>
            <Grid item xs={12} md= {6} lg={3} >
                <StyledCard >
                    <Box align='center' paddingY={5}>
                    <CurrencyBitcoin sx={{fontSize: 80}}/>
                    <Typography fontSize={18} marginTop={3}>
                       Software Engineer
                    </Typography>
                    <Typography fontSize={14} color={grey[300]} marginTop={2}>
                       497 jobs
                    </Typography>
                    </Box>
                </StyledCard>
            </Grid>

            <Grid item xs={12} md= {6} lg={3} >
                <StyledCard >
                    <Box align='center' paddingY={5}>
                    <Storefront sx={{fontSize: 80}}/>
                    <Typography fontSize={18} marginTop={3}>
                      Marketing Manager
                    </Typography>
                    <Typography fontSize={14} color={grey[300]} marginTop={2}>
                      763 jobs
                    </Typography>
                    </Box>
                </StyledCard>
            </Grid>

            <Grid item xs={12} md= {6} lg={3} >
                <StyledCard >
                    <Box align='center' paddingY={5}>
                    <AddCard sx={{fontSize: 80}}/>
                    <Typography fontSize={18} marginTop={3}>
                      Financial Analyst
                    </Typography>
                    <Typography fontSize={14} color={grey[300]} marginTop={2}>
                       697 jobs
                    </Typography>
                    </Box>
                </StyledCard>
            </Grid>

            <Grid item xs={12} md= {6} lg={3} >
                <StyledCard >
                    <Box align='center' paddingY={5}>
                    <Insights sx={{fontSize: 80}}/>
                    <Typography fontSize={18} marginTop={3}>
                      Graphic Designer
                    </Typography>
                    <Typography fontSize={14} color={grey[300]} marginTop={2}>
                       355 jobs
                    </Typography>
                    </Box>
                </StyledCard>
            </Grid>

            <Grid item xs={12} md= {6} lg={3} >
                <StyledCard >
                    <Box align='center' paddingY={5}>
                    <QrCode2 sx={{fontSize: 80}}/>
                    <Typography fontSize={18} marginTop={3}>
                      Sales Representative
                    </Typography>
                    <Typography fontSize={14} color={grey[300]} marginTop={2}>
                       644 jobs
                    </Typography>
                    </Box>
                </StyledCard>
            </Grid>

            <Grid item xs={12} md= {6} lg={3} >
                <StyledCard >
                    <Box align='center' paddingY={5}>
                    <ManageAccounts sx={{fontSize: 80}}/>
                    <Typography fontSize={18} marginTop={3}>
                      Project Manager
                    </Typography>
                    <Typography fontSize={14} color={grey[300]} marginTop={2}>
                       688 jobs
                    </Typography>
                    </Box>
                </StyledCard>
            </Grid>

            <Grid item xs={12} md= {6} lg={3} >
                <StyledCard >
                    <Box align='center' paddingY={5}>
                    <MonitorHeart sx={{fontSize: 80}}/>
                    <Typography fontSize={18} marginTop={3}>
                      Data Scientist
                    </Typography>
                    <Typography fontSize={14} color={grey[300]} marginTop={2}>
                       311 jobs
                    </Typography>
                    </Box>
                </StyledCard>
            </Grid>

            <Grid item xs={12} md= {6} lg={3} >
                <StyledCard >
                    <Box align='center' paddingY={5}>
                    <AccountBalance sx={{fontSize: 80}}/>
                    <Typography fontSize={18} marginTop={3}>
                       Human Resources Coordinator
                    </Typography>
                    <Typography fontSize={14} color={grey[300]} marginTop={2}>
                       497 jobs
                    </Typography>
                    </Box>
                </StyledCard>
            </Grid>
        </Grid>

            <Box align='center' paddingTop={10} paddingBottom={5}>
            <StyledButton endIcon={<ArrowRightAltSharp/>}>
                View All Categories
            </StyledButton>
            </Box>
        </Box>
    </Container>
  )
}

export default Section4