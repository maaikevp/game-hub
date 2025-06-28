import { Stack, HStack, Text } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import logo from '../assets/controller.jpg';
import ColorModeSwitch from './ColorModeSwitch';

// import React from 'react'


const NavBar = () => {
    return (
        <>
            <HStack justifyContent='space-between' padding='15px'>
                <Image src={logo} boxSize='80px' />
                <Text fontSize='20px' color='yellow'>Navbar</Text>
                <ColorModeSwitch />
            </HStack>
        </>
    )
}

export default NavBar