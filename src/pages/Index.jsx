import { Container, VStack, Text, Box, Input, Button, Flex, Heading } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [websiteType, setWebsiteType] = useState("");

  const handleInputChange = (e) => {
    setWebsiteType(e.target.value);
  };

  const handleSubmit = () => {
    alert(`Website type selected: ${websiteType}`);
  };

  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="blue.500" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="lg">AutoWebBuilder</Heading>
        <Box>
          <Button variant="ghost" colorScheme="whiteAlpha" mr={4}>Home</Button>
          <Button variant="ghost" colorScheme="whiteAlpha">About</Button>
        </Box>
      </Flex>
      <VStack spacing={8} mt={10} align="stretch">
        <Box textAlign="center">
          <Heading>Welcome to AutoWebBuilder</Heading>
          <Text fontSize="lg" mt={4}>Create your website effortlessly. Just tell us what you need!</Text>
        </Box>
        <Box>
          <Text fontSize="md" mb={2}>What type of website do you need?</Text>
          <Input 
            placeholder="e.g., Portfolio, E-commerce, Blog" 
            value={websiteType} 
            onChange={handleInputChange} 
            size="lg"
          />
          <Button 
            colorScheme="blue" 
            mt={4} 
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;