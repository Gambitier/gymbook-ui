import Table from '@/components/Elements/Table/Table';
import { ColumnDef } from '@tanstack/react-table';
import { useState } from 'react';
import { dummyData } from './DummyData';

export const PlanList = () => {
  const data = dummyData;
  const [_, setCurrentPage] = useState<number | undefined>(1);

  const ColumnData: ColumnDef<unknown, unknown>[] = [
    { accessorKey: 'id', header: 'ID' },
    { accessorKey: 'first_name', header: 'First Name' },
    { accessorKey: 'last_name', header: 'Last Name' },
    { accessorKey: 'email', header: 'Email' },
    { accessorKey: 'phone_number', header: 'Phone Number' },
    { accessorKey: 'date_of_birth', header: 'Date of Birth' },
  ];
  return (
    <div>
      <h2>List of Plans</h2>
      <Table
        data={data}
        columns={ColumnData}
        isFetching={false}
        headerComponent={<div>Entered Plan Details</div>}
        onClickRow={(_, row) => {
          console.log(row);
        }}
        pageCount={2}
        page={setCurrentPage}
        search={(value) => {
          console.log(value);
        }}
        skeletonCount={3}
        skeletonHeight={50}
      />
    </div>
  );
};
