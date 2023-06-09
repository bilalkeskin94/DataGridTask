import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import { columns, initialRows } from '../constants';
import useLocalStorage from '../hooks/useLocalStorage';
import NewAccountModal from './NewAccountModal';
import NewAccountButton from './NewAccountButton';
import CustomDataGridComponent from './CustomDataGridComponent';
import SearchInput from './SearchInput';

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
		return rows.filter((row) =>
			columns.some((column) =>
				row[column.field]
					?.toString()
					.toLowerCase()
					.includes(searchValue.toLowerCase())
			)
		);
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
						'& .MuiDataGrid-iconSeparator': {
							display: 'none',
						},
						'&. .css-zylse7-MuiButtonBase-root-MuiIconButton-root.Mui': {
							display: 'none',
						},
						'& .css-zylse7-MuiButtonBase-root-MuiIconButton-root': {
							color: '#744bfc',
						},
						'& .css-194a1fa-MuiSelect-select-MuiInputBase-input.css-194a1fa-MuiSelect-select-MuiInputBase-input.css-194a1fa-MuiSelect-select-MuiInputBase-input':
							{
								border: '1px solid #cfc0ff',
								borderRadius: '39px',
							},
						'& .MuiDataGrid-withBorderColor': {
							borderColor: '#eaeaea',
						},
						'& .MuiDataGrid-columnHeaderTitleContainerContent:first-child, & .MuiDataGrid-cellContent:first-child':
							{
								marginLeft: '52px',
							},
						'& .MuiDataGrid-cellContent, & .MuiDataGrid-columnHeaderTitleContainerContent':
							{
								marginLeft: '27px',
							},
						'@media screen and (max-width: 600px)': {
							'& .MuiDataGrid-columnHeaderTitleContainerContent:first-child, & .MuiDataGrid-cellContent:first-child, & .MuiDataGrid-cellContent, & .MuiDataGrid-columnHeaderTitleContainerContent':
								{
									marginLeft: '10px',
								},
						},
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
							<CustomDataGridComponent
								columns={columns}
								getFilteredRows={getFilteredRows}
								pageSize={pageSize}
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
