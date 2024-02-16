import Table from '@/components/Elements/Table/Table';
import { Box, Button, CircularProgress, Typography } from '@mui/material';
import { ColumnDef } from '@tanstack/react-table';
import { useState } from 'react';
import { dummyData } from './DummyData';
import { usePlan } from '../api/getPlan';
export const PlanList = () => {
  const apiData = usePlan();

  const data = dummyData;
  const [currentPage, setCurrentPage] = useState<number | undefined>(1);
  const [searchItem, setSearchItem] = useState<string | undefined>('');

  if (apiData.isLoading) {
    return (
      <>
        <CircularProgress size="lg" />
      </>
    );
  }

  if (!apiData.data) return null;

  const itemsPerPage = 5;

  const filteredData = data.filter((item) =>
    Object.values(item).some(
      (value) =>
        typeof value === 'string' &&
        value.toLowerCase().includes((searchItem ?? '').toLowerCase()),
    ),
  );

  const totalItems = filteredData.length;
  const pageCount = Math.ceil(totalItems / itemsPerPage);

  const startIndex = ((currentPage ?? 1) - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentData = filteredData.slice(startIndex, endIndex);

  const ColumnData: ColumnDef<unknown, unknown>[] = [
    { accessorKey: 'id', header: 'ID' },
    { accessorKey: 'first_name', header: 'First Name' },
    { accessorKey: 'last_name', header: 'Last Name' },
    { accessorKey: 'email', header: 'Email' },
    { accessorKey: 'phone_number', header: 'Phone Number' },
    { accessorKey: 'date_of_birth', header: 'Date of Birth' },
  ];

  const Header = (
    <Box display="flex" justifyContent="space-between">
      <Typography variant="h4" alignItems="center">
        User Table
      </Typography>
      <Button>Action Button</Button>
    </Box>
  );

  return (
    <div>
      <Table
        data={currentData}
        columns={ColumnData}
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
