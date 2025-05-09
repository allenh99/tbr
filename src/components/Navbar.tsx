import { Box, Flex, Link, Heading } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box bg="white" boxShadow="sm">
      <Flex
        maxW="1200px"
        mx="auto"
        px={4}
        py={4}
        align="center"
        justify="space-between"
      >
        <Heading size="md" color="blue.600">
          <Link as={RouterLink} to="/" _hover={{ textDecoration: 'none' }}>
            TBR Tracker
          </Link>
        </Heading>
        <Flex gap={6}>
          <Link as={RouterLink} to="/" color="gray.600" _hover={{ color: 'blue.600' }}>
            Dashboard
          </Link>
          <Link as={RouterLink} to="/books" color="gray.600" _hover={{ color: 'blue.600' }}>
            Books
          </Link>
          <Link as={RouterLink} to="/add" color="gray.600" _hover={{ color: 'blue.600' }}>
            Add Book
          </Link>
          <Link as={RouterLink} to="/stats" color="gray.600" _hover={{ color: 'blue.600' }}>
            Stats
          </Link>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Navbar 