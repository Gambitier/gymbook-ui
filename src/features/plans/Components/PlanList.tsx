import Table from '@/components/Elements/Table/Table';
import { Box, Button, CircularProgress, Typography } from '@mui/material';
import { ColumnDef } from '@tanstack/react-table';
import { useState } from 'react';
import { usePlan } from '../api/getPlan';

export const PlanList = () => {
  const getPlansQuery = usePlan();

  const [currentPage, setCurrentPage] = useState<number | undefined>(1);
  const [searchItem, setSearchItem] = useState<string | undefined>('');

  if (getPlansQuery.isLoading) {
    return (
      <>
        <CircularProgress size="lg" />
      </>
    );
  }

  const data = getPlansQuery.data;
  if (!data) return null;

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
    { accessorKey: 'name', header: ' Name' },
    { accessorKey: 'price', header: 'Price' },
    { accessorKey: 'durationInMoths', header: 'Duration In Months' },
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
