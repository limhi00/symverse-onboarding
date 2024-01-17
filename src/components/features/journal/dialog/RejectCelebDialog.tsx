import { Button, DialogActions, DialogContent, ListItemText, TextField } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { useAtomValue, useSetAtom } from 'jotai';
import { celebRejectReason, CelebRejectReasonType } from '@/src/configs/celeb';
import { celebRejectContentValueAtom, celebRejectReasonValueAtom } from '@/src/stories/celebRejectReason';

interface RejectCelebDialogProps {
	open: boolean;
	setOpen: (val: boolean) => void;
	handleRejectCeleb: () => void;
}

const RejectCelebDialog: React.FC<RejectCelebDialogProps> = ({ open, setOpen, handleRejectCeleb }) => {
	const celebRejectReasonValue = useAtomValue(celebRejectReasonValueAtom);
	const setCelebRejectReasonValue = useSetAtom(celebRejectReasonValueAtom);
	const celebRejectContentValue = useAtomValue(celebRejectContentValueAtom);
	const setCelebRejectContentValue = useSetAtom(celebRejectContentValueAtom);

	const handleChange = (event: SelectChangeEvent) => {
		setCelebRejectReasonValue(event.target.value as CelebRejectReasonType);
	};

	const handleClose = () => {
		setCelebRejectReasonValue(undefined);
		setCelebRejectContentValue('');
		setOpen(false);
	};

	const handleSubmit = () => {
		setOpen(false);
		handleRejectCeleb();
	};

	return (
		<Dialog open={open} onClose={handleClose} sx={{ '& .MuiPaper-root': { width: '100%', maxWidth: 512 } }}>
			<DialogTitle sx={{ textAlign: 'center', fontSize: '1.5rem !important' }}>커뮤니 거절 사유</DialogTitle>
			<DialogContent>
				<FormControl fullWidth size='small' sx={{ mt: 2 }}>
					<InputLabel id='celeb-reject-reason-label'>거절 사유 항목</InputLabel>
					<Select label='거절 사유 향목' value={celebRejectReasonValue} onChange={handleChange} labelId='celeb-reject-reason-label'>
						{Object.entries(celebRejectReason).map(([key, value]) => (
							<MenuItem key={key} value={key}>
								<ListItemText primary={value} />
							</MenuItem>
						))}
					</Select>
					<TextField
						size='small'
						type='text'
						label='거절 사유 간단한 텍스트'
						value={celebRejectContentValue}
						onChange={(e) => setCelebRejectContentValue(e.target.value)}
						sx={{ mt: 4 }}
					/>
				</FormControl>
			</DialogContent>
			<DialogActions sx={{ justifyContent: 'center' }}>
				<Button variant='outlined' color='secondary' onClick={handleClose}>
					취소
				</Button>
				<Button variant='contained' onClick={handleSubmit}>
					제출
				</Button>
			</DialogActions>
		</Dialog>
	);
};
export default RejectCelebDialog;
