import { Box, VStack, Heading, Text, Stat, StatLabel, StatNumber, StatHelpText } from '@chakra-ui/react'
import { Book } from '../types/book'

const Dashboard = () => {
  // This will be replaced with actual data management
  const mockStats = {
    totalBooks: 12,
    booksRead: 5,
    booksReading: 2,
    booksToRead: 5,
    averageRating: 4.2,
  }

  const recentBooks: Book[] = [
    {
      id: '1',
      title: 'The Midnight Library',
      author: 'Matt Haig',
      status: 'read',
      rating: 4,
      finishDate: '2024-03-15',
    },
    {
      id: '2',
      title: 'Project Hail Mary',
      author: 'Andy Weir',
      status: 'reading',
      startDate: '2024-03-20',
    },
  ]

  return (
    <Box bg="white" p={4} borderRadius="lg" boxShadow="sm">
      <VStack align="stretch" spacing={4}>
        <Heading size="md">Reading Progress</Heading>
        
        <Stat>
          <StatLabel>Books Read</StatLabel>
          <StatNumber>{mockStats.booksRead}</StatNumber>
          <StatHelpText>of {mockStats.totalBooks} total</StatHelpText>
        </Stat>

        <Stat>
          <StatLabel>Currently Reading</StatLabel>
          <StatNumber>{mockStats.booksReading}</StatNumber>
        </Stat>

        <Stat>
          <StatLabel>Average Rating</StatLabel>
          <StatNumber>{mockStats.averageRating}</StatNumber>
          <StatHelpText>out of 5</StatHelpText>
        </Stat>

        <Box pt={4} borderTop="1px" borderColor="gray.100">
          <Heading size="sm" mb={3}>Recent Activity</Heading>
          {recentBooks.map((book) => (
            <Box key={book.id} mb={3} pb={3} borderBottom="1px" borderColor="gray.100">
              <Text fontWeight="bold" fontSize="sm">{book.title}</Text>
              <Text color="gray.600" fontSize="xs">{book.author}</Text>
              <Text color="gray.500" fontSize="xs">
                {book.status === 'read' 
                  ? `Finished on ${book.finishDate}`
                  : book.status === 'reading'
                  ? `Started on ${book.startDate}`
                  : 'To be read'}
              </Text>
            </Box>
          ))}
        </Box>
      </VStack>
    </Box>
  )
}

export default Dashboard 