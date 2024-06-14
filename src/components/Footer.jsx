import React from 'react'
import { Avatar, Box, Stack, VStack, Text } from '@chakra-ui/react'
import img1 from "../assets/favpic.jpg"


const Footer = () => {

  return (
    <Box
    bgColor={'blackAlpha.900'}
    color={'whiteAlpha.700'}
    minH={'48'}
    px={'16'}
    py={['16','8']}
    >
        <Stack
        direction={['column','row']}
        h={'full'}
        alignItems={'center'}
        >
            <VStack
            w={'full'}
            alignItems={["center","flex-start"]}
            >
                <Text fontWeight={'bold'}>About Us</Text>
                <Text fontSize={'small'} letterSpacing={'widest'} textAlign={['center', 'left']}>We are the best Crypto trading app in India & Nepal, We provide guidance at a very reasonable price </Text>

            </VStack>
            <VStack>
                <Avatar boxSize={'28'} mt={['4','0']} src={img1}/>
                <Text>Our Founder</Text>
            </VStack>

        </Stack>
      
    </Box>
  )
}

export default Footer
