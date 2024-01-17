import { MenuProps } from '@/src/components/views/journal/list/JournalSelectGroup';
import { celebSignupStatus, CelebSignupStatusType } from '@/src/configs/journal';
import { SelectChangeEvent, FormControl, InputLabel, Select, Box, Chip, MenuItem } from '@mui/material';
import { useAtomValue, useSetAtom } from 'jotai';

const JournalApprovalStatusSelect = () => {

	return (
		<FormControl size='small' fullWidth>
			<InputLabel id='celeb-approval-multiple-chip-label'>커뮤니 상태</InputLabel>
			<Select
				multiple
				label='커뮤니 상태'
				MenuProps={MenuProps}
				id='celeb-approval-multiple-chip'
				labelId='celeb-approval-multiple-chip-label'
				renderValue={(selected) => (
					<Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
						{(selected as unknown as CelebSignupStatusType[]).map((value) => (
							<Chip key={value} label={celebSignupStatus[value]} sx={{ m: 0.75 }} />
						))}
					</Box>
				)}
			>
				{Object.entries(celebSignupStatus).map(([key, category]) => (
					<MenuItem key={key} value={key}>
						{category}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export default JournalApprovalStatusSelect;
