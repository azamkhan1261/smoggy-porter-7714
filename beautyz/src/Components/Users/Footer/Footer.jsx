import React from 'react'
import BottomFooter from './BottomFooter'
import UpperFooter from './UpperFooter'
import { Box } from '@chakra-ui/react'
export default function Footer() {
  return (
    <Box mt={"200px"}>

        <UpperFooter/>
        <BottomFooter/>
        
    </Box>
  )
}