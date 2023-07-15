import { AccessTime, ArrowDropDown, BarChart, Favorite, FavoriteBorder, LockClock, Money, Person, PersonOffOutlined, Place } from '@mui/icons-material'
import { Box, Button, Card, CardHeader, Container, Grid, Typography, styled } from '@mui/material'
import { grey } from '@mui/material/colors'
import React from 'react'
import { cardList1 } from '../../Data/cardList1'
import Card1 from '../Cards/Card1'

function Section2() {
    const list1 = cardList1;

    const SectionStyle = styled(Container)({

        '.hover-text': {
            cursor: 'pointer',
            '&:hover': {
                textDecoration: 'underline'
            }
        }
    });

    const StyledButton = styled(Button)({
        border: '1px solid grey',
        color: "black"
    })
  return (
    <SectionStyle>
        <Grid container paddingY={10}>
            <Grid item xs={12} md={4}>
                <Typography variant='h6' fontSize={16} color={grey[400]}>
                   FEATURED JOBS
                </Typography>
            </Grid>
            <Grid item xs={12} md={8}>
                <Typography variant='h4' fontWeight='600'>
                Jobs available apply to Editorial Specialist, Account Manager, Human Resources Specialist and more!
                </Typography>
            </Grid>
        </Grid>

        <Grid container paddingY={10} spacing={5}>
            {
                list1.map(card => {
                    return(
                        <Grid item xs={12} md={6} lg={4}>
                           <Card1 list1= {card}/>
                        </Grid>
                    )
                })
            }
        </Grid>
        <Box align="center" marginY={8}>
            <StyledButton endIcon={<ArrowDropDown/>}>
                View All Jobs
            </StyledButton>
        </Box>
    </SectionStyle>
  )
}

export default Section2