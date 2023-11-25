import React from "react"
import { Box, Heading } from "@chakra-ui/react"
import OrderNameTable from "../../components/Dashboard/ViewOrders/OrderNameTable"
import { Nav } from "../../components/Dashboard/Nav"

export const ViewOrders = () => {
  return (
    <>
      <Box maxW={1000} mx="auto" px={6} pt={24} fontSize="sm">
        <Heading mb={10}>Recent Orders</Heading>
        <OrderNameTable />
      </Box>

      <Nav />
    </>
  )
}
