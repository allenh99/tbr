import { ChakraProvider, Box, Grid, GridItem } from '@chakra-ui/react'
import { useState,useEffect } from 'react'
import BookList from './pages/BookList'
import Stats from './pages/Stats'
import { Book } from './types/book'

function App() {
  const [books, setBooks] = useState<Book[]>([])

  useEffect(() => {
    try {
      const saved = localStorage.getItem("tbrList");
      console.log('Initial localStorage value:', saved);
      if (saved && saved !== '[]') {  // Only parse if we have actual data
        const parsedBooks = JSON.parse(saved);
        console.log('Successfully parsed books:', parsedBooks);
        if (Array.isArray(parsedBooks) && parsedBooks.length > 0) {
          setBooks(parsedBooks);
        }
      }
    } catch (error) {
      console.error('Error loading books from localStorage:', error);
    }
  }, []);

  useEffect(() => {
    try {
      if (books.length > 0) {  // Only save if we have books
        console.log('Saving books to localStorage:', books);
        localStorage.setItem("tbrList", JSON.stringify(books));
      }
    } catch (error) {
      console.error('Error saving books to localStorage:', error);
    }
  }, [books]);

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
              <Stats books={books} />
            </Box>
          </GridItem>
          
          <GridItem>
            <BookList books={books} setBooks={setBooks} />
          </GridItem>
        </Grid>
      </Box>
    </ChakraProvider>
  )
}

export default App 