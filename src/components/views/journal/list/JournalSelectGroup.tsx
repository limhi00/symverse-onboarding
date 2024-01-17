import CelebApprovalStatusSelect from '@/src/components/features/journal/selects/JournalApprovalStatusSelect';
import { Grid } from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
export const MenuProps = {
	PaperProps: {
		style: {
			width: 250,
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
		},
	},
};

const CelebSelectGroup = () => {
	return (
		<Grid container spacing={6} sx={{ mb: 3 }}>
			<Grid item sm={4} xs={12}>
				<CelebApprovalStatusSelect />
			</Grid>
		</Grid>
	);
};

export default CelebSelectGroup;
