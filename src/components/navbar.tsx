import { Stack, HStack, Text } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import logo from '../assets/controller.jpg';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput, { Props } from './SearchInput';




const NavBar = ({ onSearch }: Props) => {
    return (
        <>
            <HStack padding='15px' >
                <Image src={logo} boxSize='80px' />
                <SearchInput onSearch={onSearch} />
                <Text fontSize='20px' color='yellow'>Navbar</Text>
                <ColorModeSwitch />
            </HStack>
        </>
    )
}

export default NavBar