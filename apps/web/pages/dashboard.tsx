import Navbar from '../components/Navbar'
import {
  Container, Grid, GridItem, Image
} from '@chakra-ui/react';

export default function Home() {
  return (
    <Container maxW={'1128px'}>
      <Navbar login={true} />
      <Container maxW={'100%'} py={12}>
      <Grid
        templateColumns='repeat(5, 1fr)'
        gap={4}
      >
        <GridItem rowSpan={2}>
          <Image
            borderRadius='full'
            boxSize='150px'
            src='https://avatars.githubusercontent.com/u/499907?v=4'
            alt='Dan Abramov'
          />
          <p>Mi perfil aqui</p>
        </GridItem>
        <GridItem colSpan={4}>
          <p>Otros candidatos acá</p>
        </GridItem>
      </Grid>
      </Container>
    </Container>
  );
}