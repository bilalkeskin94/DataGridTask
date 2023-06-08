import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import FormHelperText from '@mui/material/FormHelperText';

export default function NewAccountModal({ open, handleClose, addNewRow }) {
  const [socialMediaLink, setSocialMediaLink] = useState('');
  const [socialMediaName, setSocialMediaName] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (socialMediaLink.length >= 3 && socialMediaName.length >= 3 && description.length >= 3) {
      addNewRow(socialMediaLink, socialMediaName, description);
      handleClose();
      setError(false);
    } else {
      setError(true);
    }

    setSocialMediaLink('');
    setSocialMediaName('');
    setDescription('');
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        <Button
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: '8px',
            top: '8px',
            minWidth: 'auto',
            borderRadius: '50%',
            padding: '6px',
            color: '#757575',
            '&:hover': {
              color: '#744BFC',
              background: 'transparent',
            },
          }}
        >
          <CloseIcon />
        </Button>
      </DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Sosyal Medya Linki"
          type="text"
          fullWidth
          value={socialMediaLink}
          onChange={(e) => setSocialMediaLink(e.target.value)}
          InputLabelProps={{
            style: {
              fontFamily: 'Poppins',
              fontStyle: 'normal',
              fontWeight: 500,
              fontSize: '13px',
              lineHeight: '20px',
              color: '#06163A',
              marginBottom: '5px',
            },
          }}
          error={error}
        />
        <TextField
          margin="dense"
          label="Sosyal Medya Adı"
          type="text"
          fullWidth
          value={socialMediaName}
          onChange={(e) => setSocialMediaName(e.target.value)}
          InputLabelProps={{
            style: {
              fontFamily: 'Poppins',
              fontStyle: 'normal',
              fontWeight: 500,
              fontSize: '13px',
              lineHeight: '20px',
              color: '#06163A',
              marginBottom: '5px',
            },
          }}
          error={error}
        />
        <TextField
          margin="dense"
          label="Açıklama"
          type="text"
          fullWidth
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          InputLabelProps={{
            style: {
              fontFamily: 'Poppins',
              fontStyle: 'normal',
              fontWeight: 500,
              fontSize: '13px',
              lineHeight: '20px',
              color: '#06163A',
              marginBottom: '5px',
            },
          }}
          error={error}
        />
        {error && (
          <FormHelperText error>
            All fields are required and minimum required character length is 3.
          </FormHelperText>
        )}
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleClose}
          style={{
            background: '#F5F7FF',
            borderRadius: '34px',
            width: '82px',
            height: '37px'
          }}
        >
          <span
            style={{
              fontFamily: 'Poppins',
              fontStyle: 'normal',
              fontWeight: 500,
              fontSize: '13.418px',
              lineHeight: '20px',
              color: '#744BFC',
              textTransform: 'capitalize',
            }}
          >
            Vazgeç
          </span>
        </Button>
        <Button
          onClick={handleSubmit}
          style={{
            background: '#744BFC',
            borderRadius: '34px',
            width: '82px',
            height: '37px'
          }}
        >
          <span
            style={{
              fontFamily: 'Poppins',
              fontStyle: 'normal',
              fontWeight: 500,
              fontSize: '13.418px',
              lineHeight: '20px',
              color: '#FFFFFF',
              textTransform: 'capitalize',
            }}
          >
            Kaydet
          </span>
        </Button>
      </DialogActions>
    </Dialog>
  );
}
