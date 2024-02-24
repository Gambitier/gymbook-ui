import Table from '@/components/Elements/Table/Table';
import { Box, Button, CircularProgress, Typography } from '@mui/material';
import { CellContext, ColumnDef } from '@tanstack/react-table';
import { useState } from 'react';
import { usePlan } from '../api/getPlan';
import { GetPlanResponse } from '../types';
import { DeletePlan } from './DeletePlan';
import { UpdatePlan } from './UpdatePlan';

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

  const columnDef: ColumnDef<GetPlanResponse, unknown>[] = [
    { accessorKey: 'id', header: 'ID' },
    { accessorKey: 'name', header: ' Name' },
    { accessorKey: 'price', header: 'Price' },
    { accessorKey: 'durationInMoths', header: 'Duration In Months' },
    {
      accessorKey: '',
      header: 'Action',
      cell: (props: CellContext<GetPlanResponse, unknown>) => {
        return (
          <>
            <DeletePlan
              planId={props.row.original.id}
              gymId={props.row.original.gymId}
            />
            <UpdatePlan planId={props.row.original.id} />
          </>
        );
      },
    },
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
