/* eslint-disable react-hooks/rules-of-hooks */
import {
    Box,
    Badge,
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
 
  
const ItemImage = (props:any) => {
  return <Flex flex={1} >
          <Image
            alt="Feed Image"
            borderRadius= "lg"
            objectFit="cover"
            boxSize="100%"
            src={
              props.photo?props.photo:'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
            }
          />
      </Flex>
}

const ItemSkills = (props:any) => {
  return <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          {props.feedItem.skills?.map((skillItem:any) => (
            <Badge
            key={skillItem}
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #{skillItem}
            </Badge>
                ) )}
          </Stack>
}

const ItemActions = (props:any) => {
  return <Stack
              width={'100%'}
              mt={'2rem'}
              direction={'row'}
              padding={2}
              justifyContent={'space-between'}
              alignItems={'center'}>
              <Button
                flex={1}
                fontSize={'sm'}
                rounded={'lg'}
                _focus={{
                  bg: 'gray.200',
                }}>
                Message
              </Button>
              <Button
                flex={1}
                fontSize={'sm'}
                rounded={'lg'}
                bg={'teal.600'}
                color={'white'}
              
                _hover={{
                  bg: 'teal.500',
                }}
                _focus={{
                  bg: 'teal.500',
                }}>
                Follow
              </Button>
            </Stack>
}

const ItemHeader = (props:any) => {
  return <Stack
              flex={1}
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              p={1}
              pt={2}>
              <Heading fontSize={'2xl'} fontFamily={'body'}>
                {props.feedItem.name}
              </Heading>
              <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
                {props.feedItem.role}
              </Text>
              <Text
                textAlign={'center'}
                color={useColorModeValue('gray.700', 'gray.400')}
                px={3}>
                {props.feedItem.description}
              </Text>
              <ItemSkills feedItem={props.feedItem} />
              <ItemActions feedItem={props.feedItem} />
            </Stack>

}

 const FeedItem = (props:any) => {
    return (
        <Stack
            key={props.feedItem.name}
            borderWidth="1px"
            borderRadius="lg"
            w={{ sm: '100%', md: '540px' }}
            height={{ sm: '476px', md: '20rem' }}
            direction={{ base: 'column', md: 'row' }}
            bg={useColorModeValue('white', 'gray.900')}
            padding={4}>
            <ItemImage feedItem={props.feedItem} />
            <ItemHeader feedItem={props.feedItem}/>
          </Stack>
    );
  }

  export {
    FeedItem
  }