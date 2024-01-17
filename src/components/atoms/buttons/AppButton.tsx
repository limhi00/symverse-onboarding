import React from 'react';
import { ButtonProps, styled, SxProps } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

interface AppButtonProps {
	children?: React.ReactNode;
	startIcon?: React.ReactNode;
	disabled?: boolean;
	loading?: boolean;
	onClick?: () => void;
	variant?: 'primary' | 'secondary' | 'default';
	sx?: SxProps;
	type?: 'button' | 'submit';
	fullWidth?: boolean;
}

const variantStyleSet = {
	primary: {
		className: 'primary-variant',
		variant: 'contained',
	} as ButtonProps,
	secondary: {
		className: 'secondary-variant',
		variant: 'contained',
	} as ButtonProps,
	default: {
		className: 'default-variant',
		variant: 'outlined',
	} as ButtonProps,
};

const AppButton: React.FC<AppButtonProps> = ({ variant = 'default', startIcon, loading, children, disabled, onClick, type = 'button', ...props }) => {
	return (
		<StyledButton
			disableElevation
			startIcon={startIcon}
			disabled={disabled}
			loading={loading}
			onClick={onClick}
			type={type}
			{...variantStyleSet[variant]}
			{...props}
		>
			{!loading && children}
		</StyledButton>
	);
};

const StyledButton = styled(LoadingButton)(({ theme }) => ({
	height: '40px',
	fontWeight: 500,
	[theme.breakpoints.down('md')]: {
		fontSize: '16px',
		height: '48px',
	},
	'&.primary-variant': {
		backgroundColor: 'primary.main',
		'&:hover': {
			backgroundColor: 'primary.dark',
		},
	},
	'&.default-variant': {
		border: ' 1px solid #E0E0E0',
		color: '#505050',
		'&:hover': {
			backgroundColor: '#dedede',
			border: ' 1px solid #E0E0E0',
		},
	},
	'&.secondary-variant': {
		backgroundColor: '#000',
		color: '#fff',
		'&:hover': {
			backgroundColor: '#8c8c8c',
		},
		'&.Mui-disabled': {
			backgroundColor: 'rgba(0, 0, 0, 0.12)',
		},
	},
}));

export default AppButton;
