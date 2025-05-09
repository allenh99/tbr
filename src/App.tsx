import { ChakraProvider, Box, Grid, GridItem } from '@chakra-ui/react'
import BookList from './pages/BookList'
import Stats from './pages/Stats'

function App() {
  return (
    <ChakraProvider>
      <Box minH="100vh" bg="gray.50">
        <Grid
          templateColumns={{ base: '1fr', lg: '300px 1fr' }}
          gap={6}
          maxW="1400px"
          mx="auto"
          px={4}
          py={8}
        >
          <GridItem>
            <Box position="sticky" top="8">
              <Stats />
            </Box>
          </GridItem>
          
          <GridItem>
            <BookList />
          </GridItem>
        </Grid>
      </Box>
    </ChakraProvider>
  )
}

export default App 