import {
  Box,
  VStack,
  Heading,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Progress,
  Text,
  HStack,
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

  const progressPercentage = stats.totalBooks > 0 
    ? (stats.booksRead / stats.totalBooks) * 100 
    : 0

  // var dateVariable = new Date()
  return (
    <Box bg="white" p={4} borderRadius="lg" boxShadow="sm">
      <VStack align="stretch" spacing={4}>
        <Heading size="md">{(new Date().getFullYear())} Progress</Heading>

        <Box>
          <HStack justify="space-between" mb={2}>
            <Text fontSize="sm" color="gray.600">Reading Progress</Text>
            <Text fontSize="sm" color="gray.600">{Math.round(progressPercentage)}%</Text>
          </HStack>
          <Progress 
            value={progressPercentage} 
            colorScheme="blue" 
            size="lg" 
            borderRadius="full"
          />
        </Box>

        <Stat>
          <StatLabel>Books Read</StatLabel>
          <StatNumber>{stats.booksRead}</StatNumber>
          <StatHelpText>out of {stats.totalBooks} total</StatHelpText>
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