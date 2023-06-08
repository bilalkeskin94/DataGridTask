import React from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

export default function NewAccountButton({ onClick }) {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={onClick}
      startIcon={<AddIcon />}
      sx={{
        backgroundColor: '#744BFC',
        borderRadius: 39,
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 14,
        lineHeight: '21px',
        textTransform: 'capitalize',
        color: 'white',
        padding: '10px 20px',
      }}
    >
      Yeni Hesap Ekle
    </Button>
  );
}


