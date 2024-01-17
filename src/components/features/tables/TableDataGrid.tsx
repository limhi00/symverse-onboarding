import { useSetAtom, useAtomValue, useAtom } from "jotai";
import { searchPageValueAtom, searchSizeValueAtom } from '@/src/stories/tableSearchForm';
import Card from '@mui/material/Card';
import { DataGrid, GridColumns } from '@mui/x-data-grid';
import CardHeader from '@mui/material/CardHeader';
import { LinearProgress } from '@mui/material';
import { IPageResponse } from '@/src/fetchers/types';

interface TableDataGridProps<T> {
	data: IPageResponse<T>;
	isLoading?: boolean;
	columns: GridColumns;
	title: string;
	getRowId?: (row: T) => string | number;
}

const TableDataGrid = <T extends object>({ data, isLoading, columns, title, getRowId }: TableDataGridProps<T>) => {
	const [page, setPage] = useAtom(searchPageValueAtom);
	const [size, setSize] = useAtom(searchSizeValueAtom);

	return (
		<Card>
			<CardHeader sx={{ pt: 3, pb: 3, fontSize: 10 }} subheader={title} />
			<DataGrid
				autoHeight
				rows={data.content}
				rowCount={data.content.length}
				loading={isLoading}
				components={{
					LoadingOverlay: LinearProgress,
				}}
				columns={columns}
				page={page - 1}
				onPageChange={(newPage: number) => setPage(newPage + 1)}
				pagination
				paginationMode='server'
				pageSize={size}
				disableSelectionOnClick
				rowsPerPageOptions={[5, 10, 25, 50]}
				sx={{ '& .MuiDataGrid-columnHeaders': { borderRadius: 0 } }}
				onPageSizeChange={(newPageSize: number) => setSize(newPageSize)}
				getRowId={getRowId}
			/>
		</Card>
	);
};

export default TableDataGrid;
