import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import useLocalStorage from '../hooks/useLocalStorage';
import { initialRows } from '../constants';

const CustomDataGrid = ({
	columns,
	getFilteredRows,
	pageSize,
	handleCellEditCommit,
}) => {
	const [rows, setRows] = useLocalStorage('rowsData', initialRows);

	return (
		<DataGrid
			rows={getFilteredRows()}
			columns={columns}
			pageSize={pageSize}
			initialState={{
				pagination: { paginationModel: { pageSize: 3 } },
			}}
			pageSizeOptions={[3, 6, 9, 12]}
			onCellEditCommit={handleCellEditCommit}
			disableSelectionOnClick
		/>
	);
};

export default CustomDataGrid;
