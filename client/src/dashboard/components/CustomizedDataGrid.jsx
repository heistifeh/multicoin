import React from 'react';
import { Paper, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { columns, useTransactionData } from '../internals/data/gridData';  // Import the columns and hook

export default function CustomizedDataGrid() {
  const { rows, loading } = useTransactionData();  // Use the custom hook to get rows and loading

  // Customize pageTitle rendering
  const renderPageTitle = (params) => {
    // Check if the transaction type is "Deposit"
    const style = params.row.transactionType === 'Deposit'
      ? { backgroundColor: '#e0f7fa', fontWeight: 'bold', color: '#00796b' }
      : {};

    return <div style={style}>{params.value}</div>;
  };

  // Update the columns to include the custom render for pageTitle
  const customColumns = columns.map((col) => {
    if (col.field === 'pageTitle') {
      return {
        ...col,
        renderCell: renderPageTitle, // Use custom render for pageTitle
      };
    }
    return col;
  });

  return (
    <Paper sx={{ p: 3, height: '100%' }}>
      <Typography variant="h5" gutterBottom>
        Transaction Data
      </Typography>
      {loading ? (
        <Typography>Loading...</Typography>  // Display loading while fetching
      ) : (
        <DataGrid columns={customColumns} rows={rows} />  // Use custom columns with updated render
      )}
    </Paper>
  );
}
