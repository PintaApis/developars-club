import Navbar from '../components/Navbar'
import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  Input,
  Button,
} from '@chakra-ui/react';
import Link from 'next/link'
import { ReactElement } from 'react';

export default function Home() {

  const handleLogin = () => {
    // redirect to dashboard page
    
  }

  return (
    <Container maxW={'1128px'}>
      <Navbar login={false} />
      <Container maxW={'100%'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Flex>
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={
                'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
              }
              objectFit={'cover'}
            />
          </Flex>
          <Stack spacing={6}>
            <Heading>
              Únete a la mayor comunidad profesional de Desarrolladoras/es
            </Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
              Al hacer clic en «Aceptar y unirse», aceptas las Condiciones de uso, la Política de privacidad y la Política de cookies de LinkedIn.
            </Text>
            <Input type={'email'} placeholder='Correo' />
            <Input type={'password'} placeholder='Contraseña (8+ caracteres)' />
            <Button
              as={'a'}
              fontSize={'sm'}
              fontWeight={400}
              colorScheme={'blue'}
              href={'/dashboard'}>Aceptar y unirse</Button>
            
          </Stack>
        </SimpleGrid>
      </Container>
    </Container>
  );
}