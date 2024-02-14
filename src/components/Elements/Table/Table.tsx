import {
  Box,
  Grid,
  Table as MUITable,
  Paper,
  Skeleton,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from '@mui/material';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { debounce } from 'lodash';
import {
  ChangeEvent,
  Dispatch,
  FC,
  SetStateAction,
  useMemo,
  useState,
} from 'react';
import { StyledPagination, StyledTableRow } from './styled';

type TableProps<T> = {
  data: T[];
  columns: ColumnDef<unknown, unknown>[];
  isFetching: boolean;
  headerComponent: JSX.Element;
  onClickRow: (cell: unknown, row: unknown) => void;
  pageCount: number;
  page?: Dispatch<SetStateAction<number | undefined>>;
  search?: Dispatch<SetStateAction<string | undefined>>;
  searchLabel?: string;
  skeletonCount: number;
  skeletonHeight?: number;
};

const Table: FC<TableProps<unknown>> = (props: TableProps<unknown>) => {
  const {
    headerComponent,
    columns,
    data,
    search,
    searchLabel = 'Search',
    pageCount,
    page,
    onClickRow,
    skeletonCount,
    skeletonHeight,
    isFetching,
  } = props;
  const [paginationPage, setPaginationPage] = useState(1);

  const memoizedData = useMemo(() => data, [data]);
  const memoizedColumns = useMemo(() => columns, [columns]);
  const memoisedHeaderComponent = useMemo(
    () => headerComponent,
    [headerComponent],
  );

  const { getAllColumns, getHeaderGroups, getRowModel } = useReactTable({
    data: memoizedData,
    columns: memoizedColumns,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    pageCount,
  });

  const skeletons = Array.from({ length: skeletonCount }, (_, i) => i);
  const columnCount = getAllColumns().length;

  const handleSearch = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    search && search(e.target.value);
  };

  const handlePageChange = (_: ChangeEvent<unknown>, currentPage: number) => {
    setPaginationPage(currentPage === 0 ? 1 : currentPage);
    page?.(currentPage === 0 ? 1 : currentPage);
  };
  return (
    <TableContainer component={Paper}>
      <Box padding="1rem">
        {memoisedHeaderComponent && <Box>{memoisedHeaderComponent}</Box>}
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {search && (
            <TextField
              onChange={debounce(handleSearch, 1000)}
              size="small"
              label={searchLabel}
              margin="normal"
              variant="standard"
            />
          )}
        </Grid>
      </Grid>
      <MUITable>
        {!isFetching && (
          <TableHead>
            {getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableCell key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
        )}
        <TableBody>
          {!isFetching ? (
            getRowModel().rows.map((row) => (
              <StyledTableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    onClick={() => onClickRow?.(cell, row)}
                    key={cell.id}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </StyledTableRow>
            ))
          ) : (
            <>
              {skeletons.map((skeleton) => (
                <TableRow key={skeleton}>
                  {Array.from({ length: columnCount }, (_, i) => i).map(
                    (elm) => (
                      <TableCell key={elm}>
                        <Skeleton height={skeletonHeight} />
                      </TableCell>
                    ),
                  )}
                </TableRow>
              ))}
            </>
          )}
        </TableBody>
      </MUITable>
      {pageCount && page && (
        <StyledPagination
          count={pageCount}
          page={paginationPage}
          onChange={handlePageChange}
          color="primary"
        />
      )}
    </TableContainer>
  );
};

export default Table;
