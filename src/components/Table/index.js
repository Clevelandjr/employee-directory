import React from 'react';
import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';

function Table({ employeeData }) {

  return (
    
    <ReactTable
      columns={[
        {
          Header: 'Image',
          filterable: false,
          Cell: (row) => {
            return <div><img src={row.original.picture.large} alt='User'/></div>
          },
        },
        {
          id: 'fullName',
          Header: 'Name',
          accessor: row => `${row.name.first} ${row.name.last}`,
        },
        {
          Header: 'Phone Number',
          accessor: 'cell',
        },
        {
          Header: 'Email',
          accessor: 'email',
        }
      ]}
      data={employeeData}
      filterable
    />
  )
}

export default Table;