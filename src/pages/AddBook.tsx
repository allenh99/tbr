import { useState,useEffect } from 'react'
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  VStack,
  Heading,
  useToast,
} from '@chakra-ui/react'
import { Book } from '../types/book'

const AddBook = () => {
  const toast = useToast()
  const [book, setBook] = useState<Partial<Book>>({
    title: '',
    author: '',
    status: 'to-read',
    genre: '',
    pages: undefined,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // This will be replaced with actual data management
    console.log('Adding book:', book)
    toast({
      title: 'Book added',
      description: `${book.title} has been added to your list`,
      status: 'success',
      duration: 3000,
      isClosable: true,
    })
    setBook({
      title: '',
      author: '',
      status: 'to-read',
      genre: '',
      pages: undefined,
    })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setBook((prev) => ({
      ...prev,
      [name]: name === 'pages' ? parseInt(value) || undefined : value,
    }))
  }

  return (
    <Box maxW="600px" mx="auto">
      <Heading mb={8}>Add New Book</Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <FormControl isRequired>
            <FormLabel>Title</FormLabel>
            <Input
              name="title"
              value={book.title}
              onChange={handleChange}
              placeholder="Enter book title"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Author</FormLabel>
            <Input
              name="author"
              value={book.author}
              onChange={handleChange}
              placeholder="Enter author name"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Status</FormLabel>
            <Select name="status" value={book.status} onChange={handleChange}>
              <option value="to-read">To Read</option>
              <option value="reading">Currently Reading</option>
              <option value="read">Read</option>
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>Genre</FormLabel>
            <Input
              name="genre"
              value={book.genre}
              onChange={handleChange}
              placeholder="Enter genre"
            />
          </FormControl>

          <FormControl>
            <FormLabel>Number of Pages</FormLabel>
            <Input
              name="pages"
              type="number"
              value={book.pages || ''}
              onChange={handleChange}
              placeholder="Enter number of pages"
            />
          </FormControl>

          <Button type="submit" colorScheme="blue" size="lg">
            Add Book
          </Button>
        </VStack>
      </form>
    </Box>
  )
}

export default AddBook  