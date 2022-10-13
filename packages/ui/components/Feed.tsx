/* eslint-disable react-hooks/rules-of-hooks */
import {
    Box,
    Grid,
  } from '@chakra-ui/react';
  import {FeedItem} from './FeedItem'
  import { FEED_ITEMS } from './data'

  interface FeedItem {
    id: string;
    name: string;
    photo?: string;
    description?: string;
    skills?: string[];
    role?: string;
    href?: string;
  }
  
const Feed =  () => {
    return (
      <Box >
        <FeedItems />
      </Box>
    );
  }
  
  const FeedItems = () => {  
    return (
        <Grid templateColumns='repeat(2, 1fr)' gap={6}>
        {FEED_ITEMS.map((feedItem: FeedItem) => (
            <FeedItem feedItem={feedItem} key={feedItem.id}/>
        ))}
        </Grid>
    );
  };


export {
  Feed
}; 
export type { FeedItem };
  
