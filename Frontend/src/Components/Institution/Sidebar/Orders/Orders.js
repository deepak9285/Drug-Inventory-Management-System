import React, { useMemo } from 'react';
import { useTable, useSortBy, usePagination } from 'react-table';
import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';

const MyOrders = () => {
  const data = useMemo(
    () => [
      { orderId: '127464', vendor: 'Ram Pharma', amount: 2780, receivedOn: 'Not', remark: '-' },
      { orderId: '123421', vendor: 'Ashutosh Pharma', amount: 11850, receivedOn: 'Not', remark: 'Deliver today' },
      { orderId: '121432', vendor: 'Ram Pharma', amount: 5500, receivedOn: 'Not', remark: '-' },
      { orderId: '122121', vendor: 'Krishna Pharma', amount: 11850, receivedOn: '19-Aug-2024', remark: 'Deliver by Saturday' },
      { orderId: '123121', vendor: 'Indian Pharma', amount: 7000, receivedOn: '10-Aug-2024', remark: '-' },
      { orderId: '123121', vendor: 'Krishna Pharma', amount: 3540, receivedOn: '05-Aug-2024', remark: '-' },
      { orderId: '120328', vendor: 'Indore Pharma', amount: 8090, receivedOn: '27-July-2024', remark: '-' },
      { orderId: '123214', vendor: 'Ram Pharma', amount: 1240, receivedOn: '23-July-2024', remark: 'Deliver by Monday' },
      { orderId: '123211', vendor: 'Indore Pharma', amount: 7800, receivedOn: '20-July-2024', remark: '-' },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: 'Order Id',
        accessor: 'orderId',
      },
      {
        Header: 'Vendor',
        accessor: 'vendor',
      },
      {
        Header: 'Order Amount',
        accessor: 'amount',
      },
      {
        Header: 'Received On',
        accessor: 'receivedOn',
      },
      {
        Header: 'Remark',
        accessor: 'remark',
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    previousPage,
    state: { pageIndex },
  } = useTable(
    { columns, data, initialState: { pageSize: 5 } },
    useSortBy,
    usePagination
  );

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-6">My Orders</h2>
      <table {...getTableProps()} className="min-w-full bg-white border-collapse">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()} className="bg-gray-200">
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="border px-4 py-2 text-left"
                >
                  <div className="flex items-center">
                    {column.render('Header')}
                    <span className="ml-2">
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <FaSortDown />
                        ) : (
                          <FaSortUp />
                        )
                      ) : (
                        <FaSort />
                      )}
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="text-center odd:bg-gray-100 even:bg-gray-50">
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()} className="border px-4 py-2">
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-300"
        >
          Previous
        </button>
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
        <button
          onClick={() => nextPage()}
          disabled={!canNextPage}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MyOrders;
