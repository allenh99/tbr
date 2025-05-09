import {
  Box,
  VStack,
  Heading,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
} from '@chakra-ui/react'
import { ReadingStatsSimple, Book } from '../types/book'

interface StatsProps {
  books: Book[];
}

const Stats = ({ books }: StatsProps) => {
  const stats: ReadingStatsSimple = {
    totalBooks: books.length,
    booksRead: books.filter(book => book.status === 'read').length,
    booksReading: books.filter(book => book.status === 'reading').length,
  }

  return (
    <Box bg="white" p={4} borderRadius="lg" boxShadow="sm">
      <VStack align="stretch" spacing={4}>
        <Heading size="md">Progress</Heading>

        <Stat>
          <StatLabel>Books Read</StatLabel>
          <StatNumber>{stats.booksRead}</StatNumber>
          <StatHelpText>of {stats.totalBooks} total</StatHelpText>
        </Stat>

        <Stat>
          <StatLabel>Currently Reading</StatLabel>
          <StatNumber>{stats.booksReading}</StatNumber>
        </Stat>
      </VStack>
    </Box>
  )
}

export default Stats 