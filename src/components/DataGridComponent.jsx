import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import NewAccountModal from './NewAccountModal';
import { ThemeProvider } from '@mui/material/styles';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { createTheme } from '@mui/material/styles';
import NewAccountButton from './NewAccountButton';

const columns = [
  {
    field: 'socialMediaLink',
    headerName: 'Sosyal Medya Linki',
    flex: 0.3,
    editable: true,
  },
  {
    field: 'socialMediaName',
    headerName: 'Sosyal Medya Adı',
    flex: 0.3,
    editable: true,
  },
  {
    field: 'description',
    headerName: 'Açıklama',
    flex: 0.4,
    editable: true,
  },
];

const initialRows = [
  { id: 1, socialMediaLink: 'Snow', socialMediaName: 'Jon', description: '35' },
  { id: 2, socialMediaLink: 'Lannister', socialMediaName: 'Cersei', description: '42' },
  { id: 3, socialMediaLink: 'Lannister', socialMediaName: 'Jaime', description: '45' },
];

export default function DataGridComponent() {
  const [open, setOpen] = useState(false);
  const [rows, setRows] = useState(initialRows);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addNewRow = (link, name, description) => {
    const newId = Math.max(...rows.map((row) => row.id)) + 1;
    setRows([...rows, { id: newId, socialMediaLink: link, socialMediaName: name, description }]);
  };

  const theme = createTheme({
    components: {
      MuiDataGrid: {
        styleOverrides: {
          root: {
            margin: '0 auto',
            borderRadis: '8px',
            '& .MuiDataGrid-columnHeader': {
              borderBottom: 'none',
              borderWidth: '0',
            },
            '& .MuiDataGrid-footer': {
              borderTop: 'none',
              borderWidth: '0',
            },
          },
          cell: {
            textAlign: 'left',
            border: 'none',
          },
          columnHeader: {
            backgroundColor: '#FFFFFF',
            border: 'none',
            borderBottom: 'none',
            borderColor: 'transparent',
          },
          footer: {
            border: 'none',
          },
          row: {
            '&:nth-child(odd)': {
              backgroundColor: '#FFFFFF',
            },
            '&:nth-child(even)': {
              background:
                'linear-gradient(180deg, #EFF2FF -30.56%, rgba(232, 236, 255, 0) 135.85%)',
            },
          },
        },
      },
    },
  });
  
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: '100%',
          background: 'linear-gradient(180deg, #EFF2FF -30.56%, rgba(232, 236, 255, 0) 135.85%)',
          borderRadius: '6px',
          padding: '40px'
        }}
      >
        <NewAccountButton onClick={handleOpen} />
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={1}
          rowsPerPageOptions={[4]}
          disableSelectionOnClick
          components={{
            Pagination: (props) => (
              <Pagination
                {...props}
                renderItem={(itemProps) => (
                  <PaginationItem
                    {...itemProps}
                    sx={{
                      borderColor: '#CFC0FF',
                      borderRadius: 39,
                    }}
                  />
                )}
              />
            ),
          }}
          componentsProps={{
            toolbar: {
              style: {
                flexDirection: 'row',
                justifyContent: 'space-between',
              },
            },
          }}
        />
        <NewAccountModal open={open} handleClose={handleClose} addNewRow={addNewRow} />
      </Box>
    </ThemeProvider>
  );
}
