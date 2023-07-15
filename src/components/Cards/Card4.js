import { Box, Card, styled } from '@mui/material'
import React from 'react'

function Card4({logoUrl}) {

    const StyledCard = styled(Card)({
        border: '0',
        boxShadow:'none',
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '40px'
    })

    const BoxWrapper = styled(Box)({
        display: 'flex',
        justifyContent: 'center'
    })

    const LogoBox = styled(Box)({
        width: '90%',
        borderRadius: '15px',
        overflow: 'hidden',
        border: '1px solid #f3e5f5',
        padding: '20px'
    })

  return (
    <StyledCard>
        <BoxWrapper>
            <LogoBox>
                <img src={logoUrl} alt="" />
            </LogoBox>
        </BoxWrapper>
    </StyledCard>
  )
}

export default Card4