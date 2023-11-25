import { Box, Heading } from "@chakra-ui/react";
import OrderNameTable from "./components/OrderNameTable";

function App() {
  return (
    <Box maxW={1000} mx="auto" px={6} pt={24} fontSize="sm">
      <Heading mb={10}>Recent Orders</Heading>
      <OrderNameTable />
    </Box>
  );
}

export default App;
