import Table from '@/components/Elements/Table/Table';
import { dummyData } from './DummyData';

export const PlanList = () => {
  const data = dummyData;
  const ColumnData = [
    { id: 'id', header: 'ID', cell: 'id' },
    { id: 'first_name', header: 'First Name', cell: 'first_name' },
    { id: 'last_name', header: 'Last Name', cell: 'last_name' },
    { id: 'email', header: 'Email', cell: 'email' },
    { id: 'phone_number', header: 'Phone Number', cell: 'phone_number' },
    { id: 'date_of_birth', header: 'Date of Birth', cell: 'date_of_birth' },
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
        search={(value) => {
          console.log(value);
        }}
        skeletonCount={3}
        skeletonHeight={50}
      />
    </div>
  );
};
