import { Stack, HStack, Text } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import logo from '../assets/controller.jpg';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput, { Props } from './SearchInput';


const NavBar = ({ onSearch }: Props) => {
    return (
        <>
            <HStack padding='15px' >
                <Image src={logo} boxSize='100px' marginRight={4} marginLeft={6} marginTop={5} />
                <SearchInput onSearch={onSearch} />
                <Text fontSize='20px' color='yellow'></Text>
                <ColorModeSwitch />
            </HStack>
        </>
    )
}

export default NavBar