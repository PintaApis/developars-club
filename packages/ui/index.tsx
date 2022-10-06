import * as React from 'react'
import { ChakraProvider as UIProvider} from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Feed from './components/Feed'
import FeedItem from './components/FeedItem'
import { theme } from './theme'

export {
    UIProvider,
    Navbar,
    Feed,
    FeedItem,
    theme
}
