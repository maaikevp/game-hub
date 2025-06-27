import { Stack, HStack, Text } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import logo from './assets/controller3.jpg';
import ColorModeSwitch from './components/ColorModeSwitch';

// import React from 'react'


const NavBar = () => {
    return (
        <>
            <HStack>
                <Image src={logo} boxSize='80px' />
                <ColorModeSwitch />
                <Text fontSize='30px' color='yellow'>Navbar</Text>
            </HStack>
        </>
    )
}

export default NavBar