import React, { useState } from 'react';
import { DataGrid, plPL } from '@mui/x-data-grid';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import NewAccountModal from './NewAccountModal';
import NewAccountButton from './NewAccountButton';
import SearchInput from './SearchInput';

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
	{
		id: 1,
		socialMediaLink: 'instagram.com/mobilerast/',
		socialMediaName: 'Instagram',
		description:
			"We'll help you to finish your development project successfully.",
	},
	{
		id: 2,
		socialMediaLink: 'tr.linkedin.com/company/rastmobile',
		socialMediaName: 'LinkedIn',
		description:
			'Hire vetted developers from Rast Mobile to scale up your tech projects.',
	},
	{
		id: 3,
		socialMediaLink: 'behance.net/rastmobile',
		socialMediaName: 'Behance',
		description:
			'Software Development Agency Rast Mobile Information Technology Ltd.',
	},
	{
		id: 4,
		socialMediaLink: 'twitter.com/rastmobile',
		socialMediaName: 'Twitter',
		description:
			'Software Development Agency Rast Mobile Information Technology Ltd.',
	},
];

export default function DataGridComponent() {
	const [open, setOpen] = useState(false);
	const [rows, setRows] = useState(initialRows);
	const [searchValue, setSearchValue] = useState('');

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const addNewRow = (link, name, description) => {
		const newId = Math.max(...rows.map((row) => row.id)) + 1;
		setRows([
			...rows,
			{ id: newId, socialMediaLink: link, socialMediaName: name, description },
		]);
	};

	const getFilteredRows = () => {
		if (searchValue === '') {
			return rows;
		}

		const lowerCaseSearchValue = searchValue.toLowerCase();

		return rows.filter((row) => {
			const { socialMediaLink, socialMediaName, description } = row;

			return (
				socialMediaLink.toLowerCase().includes(lowerCaseSearchValue) ||
				socialMediaName.toLowerCase().includes(lowerCaseSearchValue) ||
				description.toLowerCase().includes(lowerCaseSearchValue)
			);
		});
	};

	const theme = createTheme({
		components: {
			MuiDataGrid: {
				styleOverrides: {
					root: {
						margin: '0 auto',
						borderRadius: '8px',
						border: '1px solid #EAEAEA',
					},
					cell: {
						textAlign: 'left',
						border: 'none',
					},
					columnHeader: {
						backgroundColor: '#FFFFFF',
					},
					footer: {
						border: 'none',
						borderColor: 'transparent',
					},
					row: {
						fontFamily: 'Inter',
						fontStyle: 'normal',
						fontWeight: 400,
						fontSize: '12px',
						lineHeight: '15px',
						color: '#000000',
						'&:nth-child(odd)': {
							backgroundColor: '#FFFFFF',
						},
						'&:nth-child(even)': {
							background:
								'linear-gradient(180deg, #EFF2FF -30.56%, rgba(232, 236, 255, 0) 135.85%)',
						},
						'& > .MuiDataGrid-cell': {
							borderRight: '1px solid #C4CEE5',
						},
					},
				},
			},
		},
		palette: {
			plPL: {
				MuiDataGrid: {
					toolbar: {
						showColumnsTitle: 'Show',
					},
				},
			},
		},
	});

	return (
		<Box
			sx={{
				padding: '0 27px 31px 29px',
				'@media (max-width: 600px)': {
					padding: '0 10px 31px',
				},
			}}
		>
			<ThemeProvider theme={theme}>
				<Box
					sx={{
						background:
							'linear-gradient(180deg, #EFF2FF -30.56%, rgba(232, 236, 255, 0) 135.85%)',
						borderRadius: '8px',
					}}
				>
					<Box
						sx={{
							padding: '44px 74px 77px',
							'@media (max-width: 600px)': {
								padding: '20px',
							},
						}}
					>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
								marginBottom: '16px',
							}}
						>
							<SearchInput
								value={searchValue}
								onChange={(e) => setSearchValue(e.target.value)}
								placeholder="Search objects..."
							/>
							<NewAccountButton onClick={handleOpen} />
						</Box>
						<Box sx={{ width: '100%', overflowX: 'auto' }}>
							<DataGrid
								rows={getFilteredRows()}
								columns={columns}
								pageSize={4}
								rowsPerPageOptions={[15]}
								disableSelectionOnClick
								localeText={plPL}
								pageSizeOptions={[5, 10, 25]}
							/>
						</Box>
						<NewAccountModal
							open={open}
							handleClose={handleClose}
							addNewRow={addNewRow}
						/>
					</Box>
				</Box>
			</ThemeProvider>
		</Box>
	);
}
