import {
  Box,
  VStack,
  Heading,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
} from '@chakra-ui/react'
import { ReadingStats } from '../types/book'

const Stats = () => {
  // This will be replaced with actual data management
  const stats: ReadingStats = {
    totalBooks: 20,
    booksRead: 5,
    booksReading: 2,
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