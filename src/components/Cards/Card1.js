import { AccessTime, BarChart,  FavoriteBorder, Money, Person, Place } from '@mui/icons-material'
import { Box, Card, Grid, Typography, styled } from '@mui/material'
import { grey } from '@mui/material/colors'
import React from 'react'

export default function Card1({list1}) {
  return (
    <>
       <Card >
            <Box sx={{padding: {xs:'10px', md: '20px'}, borderBottom: '1px dotted grey'}} >
                <Box display='flex' justifyContent='space-between'>
                    <Box width={50} borderRadius={4} overflow='hidden'>
                        <img src={list1.logoUrl} alt="" />
                    </Box>
                <Box>
                    <FavoriteBorder/>
                </Box>
                    </Box>
                    <Typography variant='h6' className='hover-text' marginTop={3}>
                        {list1.title}
                    </Typography>

                    <Typography variant='h6' fontSize={14}  marginTop={2} color='primary.light'>
                      Altenwerth, Medhurst and Roberts
                    </Typography>
                    <Box marginTop={1} display='flex' gap={1}>
                        <Place/>
                        <Typography variant='h6' fontSize={14}   color={grey[600]}>
                           {list1.country}
                        </Typography>
                    </Box>
                    <Typography variant='h6' fontSize={12} marginTop={1}   color={grey[400]}>
                        Posted day: 13 Jul 2023
                    </Typography>
                    </Box>

                    <Box sx={{padding: {xs:'5px', md: '20px'}}}>
                        <Grid container>
                            <Grid item xs={6}>
                                <Box display='flex' gap={1}>
                                    <BarChart/>
                                    <Typography variant='h6' fontSize={14}   color={grey[600]} fontWeight='400'>
                                        7 Year Exp
                                    </Typography>
                                </Box>
                            </Grid>

                            <Grid item xs={6}>
                                <Box display='flex' gap={1}>
                                    <AccessTime/>
                                    <Typography variant='h6' fontSize={14}   color={grey[600]} fontWeight='400'>
                                       Freelance
                                    </Typography>
                                </Box>
                            </Grid>

                            <Grid item xs={6}>
                                <Box display='flex' gap={1}>
                                    <Money/>
                                    <Typography variant='h6' fontSize={14}   color={grey[600]} fontWeight='400'>
                                        Competitive
                                    </Typography>
                                </Box>
                            </Grid>

                            <Grid item xs={6}>
                                <Box display='flex' gap={1}>
                                    <Person/>
                                    <Typography variant='h6' fontSize={14}   color={grey[600]} fontWeight='400'>
                                        Intern/Student
                                    </Typography>
                                </Box>
                    </Grid>
                </Grid>
            </Box>
        </Card>
    </>
  )
}
