import {
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import SearchIcon from "./icons/SearchIcon";
import FilterPopover from "./FilterPopover";

const Filters = ({ columnFilters, setColumnFilters }) => {
  const OrderName = columnFilters.find((f) => f.id === "OrderName")?.value || "";

  const onFilterChange = (id, value) =>
    setColumnFilters((prev) =>
      prev
        .filter((f) => f.id !== id)
        .concat({
          id,
          value,
        })
    );

  return (
    <HStack mb={6} spacing={3}>
      <InputGroup size="sm" maxW="12rem">
        <InputLeftElement pointerEvents="none">
          <Icon as={SearchIcon} />
        </InputLeftElement>
        <Input
          type="text"
          variant="filled"
          placeholder="OrderName "
          borderRadius={5}
          value={OrderName}
          onChange={(e) => onFilterChange("OrderName", e.target.value)}
        />
      </InputGroup>
      <FilterPopover
        columnFilters={columnFilters}
        setColumnFilters={setColumnFilters}
      />
    </HStack>
  );
};
export default Filters;
