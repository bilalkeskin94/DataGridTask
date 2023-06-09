import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import useLocalStorage from '../hooks/useLocalStorage';
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
	const [searchValue, setSearchValue] = useState('');
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [pageSize, setPageSize] = useState(4);
	const [rows, setRows] = useLocalStorage('rowsData', initialRows);

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const addNewRow = (socialMediaLink, socialMediaName, description) => {
		const id = Math.floor(Math.random() * 10000);
		const newRow = { id, socialMediaLink, socialMediaName, description };
		setRows((prevRows) => [...prevRows, newRow]);
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

	useEffect(() => {
		const handleResize = () => setWindowWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	useEffect(() => {
		if (windowWidth <= 600) {
			setPageSize(2);
		} else {
			setPageSize(4);
		}
	}, [windowWidth]);

	const theme = createTheme({
		components: {
			MuiDataGrid: {
				styleOverrides: {
					root: {
						margin: '0 auto',
						borderRadius: '8px',
					},
					cell: {
						textAlign: 'left',
						borderBottom: '1px solid #C4CEE5',
						borderRight: '1px solid #C4CEE5',
						'&:last-child': {
							borderRight: 'none',
						},
					},
					columnHeader: {
						backgroundColor: '#FFFFFF',
						borderBottom: '1px solid #C4CEE5',
						borderRight: '1px solid #C4CEE5',
						'&:last-child': {
							borderRight: 'none',
						},
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
							backgroundColor:
								'linear-gradient(180deg, #EFF2FF -30.56%, rgba(232, 236, 255, 0) 135.85%)',
						},
					},
				},
			},
			MuiCssBaseline: {
				styleOverrides: {
					'.MuiDataGrid-footer': {
						borderTop: 'none !important',
						borderBottom: 'none !important',
					},

					'.MuiDataGrid-root .MuiDataGrid-columnHeader:focus, .MuiDataGrid-root .MuiDataGrid-cell:focus':
						{
							outline: 'none',
						},
					'.MuiDataGrid-root .MuiDataGrid-footerContainer': {
						borderBottom: 'none !important',
						borderTop: 'none !important',
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
								alignItems: 'end',
								justifyContent: 'space-between',
								flexWrap: 'wrap',
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
								pageSize={pageSize}
								initialState={{
									pagination: { paginationModel: { pageSize: 3 } },
								}}
								pageSizeOptions={[3, 6, 9, 12]}
								disableSelectionOnClick
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
