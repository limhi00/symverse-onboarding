import { FallbackProps } from 'react-error-boundary';
import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import AppButton from '@/src/components/atoms/buttons/AppButton';

export function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
	console.log(error);
	return (
		<Box
			role='alert'
			sx={{
				width: '100%',
				textAlign: 'center',
			}}
		>
			<Grid container justifyContent={'center'} alignItems={'center'}>
				<Grid item>
					<Typography variant={'subtitle1'}>정보를 불러오는데 실패하였습니다</Typography>
					<AppButton
						onClick={resetErrorBoundary}
						variant='secondary'
						sx={{
							mt: '5px',
						}}
					>
						다시 시도
					</AppButton>
				</Grid>
			</Grid>
		</Box>
	);
}
