// ReusableTable.js
import React from 'react';
import { useTable, useSortBy, useFilters, usePagination, useBlockLayout, useResizeColumns, useFlexLayout } from 'react-table';
//import { Table as BootstrapTable } from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';

const ReusableTable = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    page,
    state: { pageIndex, pageSize },
    setPageSize,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useSortBy,
    usePagination,
    useBlockLayout,
    useResizeColumns,
    useFlexLayout
  );

  return (
    <>
      <BootstrapTable {...getTableProps()} striped bordered hover responsive>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <div>{column.canResize && <div {...column.getResizerProps()} />}</div>
                  <div>{column.canFilter && column.render('Filter')}</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </BootstrapTable>
      <div>
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {Math.ceil(rows.length / pageSize)}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              setPageSize(page);
            }}
            style={{ width: '50px' }}
          />
        </span>
        <button onClick={() => setPageSize(10)}>10 rows</button>
        <button onClick={() => setPageSize(20)}>20 rows</button>
      </div>
    </>
  );
};

export default ReusableTable;
