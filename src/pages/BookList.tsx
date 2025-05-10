import { useState } from 'react'
import {
  Box,
  Heading,
  SimpleGrid,
  VStack,
  Text,
  Badge,
  HStack,
  Button,
  FormControl,
  FormLabel,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useToast,
  Input,
  Select,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import { Book } from '../types/book'

interface BookListProps {
  books: Book[];
  setBooks: React.Dispatch<React.SetStateAction<Book[]>>;
}

const BookList = ({ books, setBooks }: BookListProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()
  const [newBook, setNewBook] = useState<Partial<Book>>({
    title: '',
    author: '',
    status: 'to-read',
    genre: '',
  })

  const handleAddBook = (e: React.FormEvent) => {
    e.preventDefault()
    const book: Book = {
      id: Date.now().toString(),
      title: newBook.title!,
      author: newBook.author!,
      status: newBook.status as Book['status'],
      genre: newBook.genre,
    }
    setBooks([...books, book])
    setNewBook({
      title: '',
      author: '',
      status: 'to-read',
      genre: '',
    })
    onClose()
    toast({
      title: 'Book added',
      description: `${book.title} has been added to your list`,
      status: 'success',
      duration: 3000,
      isClosable: true,
    })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setNewBook((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleStatusChange = (bookId: string, newStatus: Book['status']) => {
    setBooks(books.map(book => 
      book.id === bookId 
        ? { ...book, status: newStatus }
        : book
    ))
    toast({
      title: 'Status updated',
      status: 'success',
      duration: 2000,
      isClosable: true,
    })
  }

  const handleDeleteBook = (bookId: string) => {
    setBooks(books.filter(book => book.id !== bookId))
    toast({
      title: 'Book deleted',
      status: 'info',
      duration: 2000,
      isClosable: true,
    })
  }

  const getStatusColor = (status: Book['status']) => {
    switch (status) {
      case 'read':
        return 'green'
      case 'reading':
        return 'blue'
      case 'to-read':
        return 'gray'
      default:
        return 'gray'
    }
  }

  return (
    <Box>
      <HStack justify="space-between" mb={6}>
        <Heading>My Books</Heading>
        <Button colorScheme="blue" onClick={onOpen}>
          Add Book
        </Button>
      </HStack>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {books.map((book) => (
          <Box
            key={book.id}
            bg="white"
            p={6}
            borderRadius="lg"
            boxShadow="sm"
          >
            <VStack align="stretch" spacing={3}>
              <HStack justify="space-between">
                <Heading size="md">{book.title}</Heading>
                <Menu>
                  <MenuButton
                    as={Button}
                    size="sm"
                    variant="ghost"
                  >
                    Options
                  </MenuButton>
                  <MenuList>
                    <MenuItem onClick={() => handleStatusChange(book.id, 'to-read')}>
                      Mark as To Read
                    </MenuItem>
                    <MenuItem onClick={() => handleStatusChange(book.id, 'reading')}>
                      Mark as Reading
                    </MenuItem>
                    <MenuItem onClick={() => handleStatusChange(book.id, 'read')}>
                      Mark as Read
                    </MenuItem>
                    <MenuItem 
                      onClick={() => handleDeleteBook(book.id)}
                      color="red.500"
                    >
                      Delete Book
                    </MenuItem>
                  </MenuList>
                </Menu>
              </HStack>
              <Text color="gray.600">{book.author}</Text>
              <HStack>
                <Badge colorScheme={getStatusColor(book.status)}>
                  {book.status === 'to-read' ? 'To Read' :
                   book.status === 'reading' ? 'Reading' : 'Read'}
                </Badge>
                {book.genre && (
                  <Badge colorScheme="purple">{book.genre}</Badge>
                )}
              </HStack>
              {book.startDate && (
                <Text fontSize="sm" color="gray.500">
                  Started: {book.startDate}
                </Text>
              )}
              {book.finishDate && (
                <Text fontSize="sm" color="gray.500">
                  Finished: {book.finishDate}
                </Text>
              )}
            </VStack>
          </Box>
        ))}
      </SimpleGrid>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Book</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={handleAddBook}>
              <VStack spacing={4}>
                <FormControl isRequired>
                  <FormLabel>Title</FormLabel>
                  <Input
                    name="title"
                    value={newBook.title}
                    onChange={handleChange}
                    placeholder="Enter book title"
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Author</FormLabel>
                  <Input
                    name="author"
                    value={newBook.author}
                    onChange={handleChange}
                    placeholder="Enter author name"
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Status</FormLabel>
                  <Select name="status" value={newBook.status} onChange={handleChange}>
                    <option value="to-read">To Read</option>
                    <option value="reading">Currently Reading</option>
                    <option value="read">Read</option>
                  </Select>
                </FormControl>

                <FormControl>
                  <FormLabel>Genre</FormLabel>
                  <Input
                    name="genre"
                    value={newBook.genre}
                    onChange={handleChange}
                    placeholder="Enter genre"
                  />
                </FormControl>

                <Button type="submit" colorScheme="blue" width="full">
                  Add Book
                </Button>
              </VStack>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default BookList 