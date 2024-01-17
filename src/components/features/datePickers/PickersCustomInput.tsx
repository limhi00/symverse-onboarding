/* eslint-disable react/display-name */
import { forwardRef } from 'react';
import TextField from '@mui/material/TextField';

interface PickerProps {
	label?: string;
	readOnly?: boolean;
	size?: 'small' | 'medium';
}

const PickersComponent = forwardRef(({ ...props }: PickerProps, ref) => {
	// ** Props
	const { label, readOnly, size } = props;

	return <TextField size={size} inputRef={ref} {...props} label={label || ''} {...(readOnly && { inputProps: { readOnly: true } })} />;
});

export default PickersComponent;
