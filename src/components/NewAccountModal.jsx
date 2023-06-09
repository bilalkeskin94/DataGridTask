import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	TextField,
	Button,
	Typography,
	FormHelperText,
} from '@mui/material';

export default function NewAccountModal({ open, handleClose, addNewRow }) {
	const [socialMediaLink, setSocialMediaLink] = useState('');
	const [socialMediaName, setSocialMediaName] = useState('');
	const [description, setDescription] = useState('');
	const [error, setError] = useState(false);

	const handleSubmit = () => {
		if (
			socialMediaLink.length >= 3 &&
			socialMediaName.length >= 3 &&
			description.length >= 3
		) {
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
			<DialogContent
				sx={{
					minWidth: '488px',
					minHeight: '280px',

					'@media (max-width: 600px)': {
						minWidth: '90vw',
						minHeight: '80vh',
					},
				}}
			>
				<Typography
					variant="subtitle1"
					component="div"
					sx={{
						fontFamily: 'Poppins',
						fontStyle: 'normal',
						fontWeight: 500,
						fontSize: '13px',
						lineHeight: '20px',
						color: '#06163A',
						marginBottom: '8px',
						marginTop: '14px',
					}}
				>
					Sosyal Medya Linki
				</Typography>
				<TextField
					autoFocus
					margin="dense"
					type="text"
					fullWidth
					value={socialMediaLink}
					onChange={(e) => setSocialMediaLink(e.target.value)}
					error={error}
					sx={{
						'& .MuiOutlinedInput-root': {
							borderRadius: '38px',
						},
					}}
				/>
				<Typography
					variant="subtitle1"
					component="div"
					sx={{
						fontFamily: 'Poppins',
						fontStyle: 'normal',
						fontWeight: 500,
						fontSize: '13px',
						lineHeight: '20px',
						color: '#06163A',
						marginBottom: '8px',
						marginTop: '18px',
					}}
				>
					Sosyal Medya Adı
				</Typography>
				<TextField
					margin="dense"
					type="text"
					fullWidth
					value={socialMediaName}
					onChange={(e) => setSocialMediaName(e.target.value)}
					error={error}
					sx={{
						'& .MuiOutlinedInput-root': {
							borderRadius: '38px',
						},
					}}
				/>
				<Typography
					variant="subtitle1"
					component="div"
					sx={{
						fontFamily: 'Poppins',
						fontStyle: 'normal',
						fontWeight: 500,
						fontSize: '13px',
						lineHeight: '20px',
						color: '#06163A',
						marginBottom: '8px',
						marginTop: '18px',
					}}
				>
					Açıklama
				</Typography>
				<TextField
					margin="dense"
					type="text"
					fullWidth
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					error={error}
					sx={{
						'& .MuiOutlinedInput-root': {
							borderRadius: '38px',
						},
					}}
				/>
				{error && (
					<FormHelperText error>
						All fields are required and the minimum required character length is
						3.
					</FormHelperText>
				)}
			</DialogContent>
			<DialogActions
				sx={{
					paddingBottom: '36px',
					marginRight: '15px',
				}}
			>
				<Button
					onClick={handleClose}
					style={{
						background: '#F5F7FF',
						borderRadius: '34px',
						width: '82px',
						height: '37px',
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
						height: '37px',
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
