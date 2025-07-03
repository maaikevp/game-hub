import { Button, HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import useData from '../hooks/useData';
import { Genre } from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url';

interface Props {
    onSelectGenre: (Genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
    const { data, isLoading } = useData<Genre>('/genres')

    if (isLoading) return <Spinner />;

    return (
        <List>
            {data.map((genre) => (
                <ListItem key={genre.id} paddingY='5px'>
                    <HStack>
                        <Image
                            boxSize="32px"
                            borderRadius={8}
                            src={getCroppedImageUrl(genre.image_background)}
                        />
                        <Button fontWeight={genre.id === selectedGenre?.id ? 'Bold' : 'normal'} onClick={() => onSelectGenre(genre)} fontSize='lg' variant='link'>{genre.name}</Button>
                    </HStack>
                </ListItem>
            ))}
        </List>
    )
}

export default GenreList