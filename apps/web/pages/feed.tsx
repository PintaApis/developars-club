import { Navbar,Feed } from '@developars/ui'
import {
  Container,
} from '@chakra-ui/react';


export default function Home() {
  return (
    <Container maxW={'1128px'}>
      <Navbar />
      <Container maxW={'100%'} py={12}>
        <Feed></Feed>
      </Container>
    </Container>
  );
}
