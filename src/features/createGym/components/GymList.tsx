import { Box, Button } from '@/components/Elements';
import Table from '@/components/Elements/Table/Table';
import { GetGymResponseDTO } from '@/features/createGym';
import { CircularProgress } from '@mui/material';
import { ColumnDef } from '@tanstack/react-table';
import { useState } from 'react';
import { useAllGym } from '../api/getAllGym';

export const GymList = () => {
  const getGymQuery = useAllGym();

  const [currentPage, setCurrentPage] = useState<number | undefined>(1);
  const [searchItem, setSearchItem] = useState<string | undefined>('');

  if (getGymQuery.isLoading) {
    return (
      <>
        <CircularProgress size="lg" />
      </>
    );
  }

  const data = getGymQuery.data;
  if (!data) return null;
  console.log('value:', data);

  const itemsPerPage = 5;

  // search functionality
  const filteredData = data.data.filter((item) =>
    Object.values(item).some(
      (value) =>
        typeof value === 'string' &&
        value.toLowerCase().includes((searchItem ?? '').toLowerCase()),
    ),
  );

  // pagination functionality
  const totalItems = filteredData.length;
  const pageCount = Math.ceil(totalItems / itemsPerPage);
  const startIndex = ((currentPage ?? 1) - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, endIndex);
  const columnDef: ColumnDef<GetGymResponseDTO, unknown>[] = [
    { accessorKey: 'id', header: 'ID' },
    { accessorKey: 'name', header: ' Name' },
  ];
  const Header = (
    <Box display="flex" justifyContent="flex-end">
      <Button>Action Button</Button>
    </Box>
  );

  return (
    <div>
      <Table
        data={paginatedData}
        columns={columnDef}
        isFetching={false}
        headerComponent={Header}
        onClickRow={(_, row) => {
          console.log(row);
        }}
        pageCount={pageCount}
        page={setCurrentPage}
        search={setSearchItem}
        skeletonCount={3}
        skeletonHeight={50}
      />
    </div>
  );
};
