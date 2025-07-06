import { Card, CardBody, Heading, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Game } from '../hooks/useGames'
import getCroppedImageUrl from '../services/image-url'
import CriticScore from './CriticScore'
import PlatformIconList from './PlatformIconList'
import Emoji from './Emoji'

interface Props {
    game: Game
}

const GameCard = ({ game }: Props) => {
    return (
        <Card borderRadius={10} overflow='hidden' height='100%'>
            <Image src={getCroppedImageUrl(game.background_image)} />
            <CardBody>
                <HStack justifyContent='space-between' marginBottom={3}>
                    <PlatformIconList platforms={game.parent_platforms?.map(p => p.platform)} />
                    <CriticScore score={game.metacritic} />
                </HStack>
                <HStack justifyContent='align-bottom' >
                    <Heading fontSize='2xl' paddingRight={3}>{game.name} </Heading>
                    <Emoji rating={game.rating_top} />
                </HStack>
            </CardBody>
        </Card>
    )
}

export default GameCard