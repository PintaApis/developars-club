/* eslint-disable react-hooks/rules-of-hooks */
import {
    Box,
    Grid,
  } from '@chakra-ui/react';
  import { FeedItem } from '@developars/ui'
    
  export default function Feed() {
    return (
      <Box >
        <FeedItems />
      </Box>
    );
  }
  
  const FeedItems = () => {  
    return (
        <Grid templateColumns='repeat(2, 1fr)' gap={6}>
        {FEED_ITEMS.map((feedItem) => (
            <FeedItem feedItem={feedItem} />
        ))}
        </Grid>
    );
  };


  interface FeedItem {
    name: string;
    photo?: string;
    description?: string;
    skills?: string[];
    role?: string;
    href?: string;
  }
  
  const FEED_ITEMS: Array<FeedItem> = [
    {
      name: 'Juan Pablo',
      photo:'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
      description: 'Actress, musician, songwriter and artist. PM for work inquires or #tag me in your posts',  
      skills: ['React', 'Node', 'MongoDB'],
        role: 'Full Stack Developer',
    },
    {
        name: 'Lucia Perez',
        photo:'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
        description: 'Actress, musician, songwriter and artist. PM for work inquires or #tag me in your posts',  
        skills: ['React', 'Node', 'MongoDB'],
          role: 'Full Stack Developer',
      },
      {
        name: 'Pedro Alvarado',
        photo:'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
        description: 'Actress, musician, songwriter and artist. PM for work inquires or #tag me in your posts',  
        skills: ['React', 'Node', 'MongoDB'],
          role: 'Full Stack Developer',
      },
  
  ];