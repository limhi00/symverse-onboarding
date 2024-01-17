import Box from '@mui/material/Box';
import DatePicker, { ReactDatePickerProps } from 'react-datepicker';
import CustomInput from './PickersCustomInput';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { nftEndDateAtom, nftStartDateAtom, searchNftEndDateValueAtom, searchNftStartDateValueAtom } from '@/src/stories/tableSearchForm';
import { useEffect } from 'react';
import { subtractMonths } from '@/src/utils/datetime';

export type DateType = Date | null | undefined;

interface PickersDateProps {
	popperPlacement?: ReactDatePickerProps['popperPlacement'];
	startLabel?: string;
	endLabel?: string;
	isDateUndefined?: boolean;
}

const PickersDate = ({ startLabel, endLabel, popperPlacement, isDateUndefined }: PickersDateProps) => {
	const startDate = useAtomValue(nftStartDateAtom);
	const endDate = useAtomValue(nftEndDateAtom);
	const setStartDate = useSetAtom(nftStartDateAtom);
	const setEndDate = useSetAtom(nftEndDateAtom);

	const [startDateValue, setStartDateValue] = useAtom(searchNftStartDateValueAtom);
	const [endDateValue, setEndDateValue] = useAtom(searchNftEndDateValueAtom);

	const handleStartDate = (date: Date) => {
		setStartDate(date);
		setStartDateValue(date);
	};

	const handleEndDate = (date: Date) => {
		setEndDate(date);
		setEndDateValue(date);
	};

	useEffect(() => {
		return () => {
			setStartDate(subtractMonths(new Date(), 3));
			setEndDate(new Date());
			setStartDateValue(undefined);
			setEndDateValue(undefined);
		};
	}, []);

	return (
		<Box sx={{ display: 'flex', flexWrap: 'wrap' }} className='demo-space-x'>
			<div>
				<DatePicker
					timeIntervals={15}
					selected={isDateUndefined ? startDateValue : startDate}
					id='date-picker'
					dateFormat='yyyy-MM-dd'
					popperPlacement={popperPlacement}
					onChange={(date: Date) => handleStartDate(date)}
					customInput={<CustomInput label={startLabel || 'NFT 등록 시작일자'} size='small' />}
				/>
			</div>
			<div>
				<DatePicker
					timeIntervals={15}
					selected={isDateUndefined ? endDateValue : endDate}
					id='date-picker'
					dateFormat='yyyy-MM-dd'
					popperPlacement={popperPlacement}
					onChange={(date: Date) => handleEndDate(date)}
					customInput={<CustomInput label={endLabel || 'NFT 등록 종료일자'} size='small' />}
				/>
			</div>
		</Box>
	);
};

export default PickersDate;
