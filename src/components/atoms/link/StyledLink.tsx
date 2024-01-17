import { ReactNode } from 'react';
import Link from 'next/link';
import { styled } from '@mui/material/styles';
import { SxProps } from '@mui/material';

interface StyledLinkProps {
	href: string;
	children?: ReactNode;
	sx?: SxProps;
}

const StyledLink: React.FC<StyledLinkProps> = ({ href, children, sx }) => {
	return (
		<>
			<StyleLink href={href} sx={sx}>
				{children}
			</StyleLink>
		</>
	);
};

export default StyledLink;

const StyleLink = styled(Link)(({ theme }) => ({
	fontWeight: 600,
	fontSize: '1rem',
	cursor: 'pointer',
	textDecoration: 'none',
	color: theme.palette.text.secondary,
	'&:hover': {
		color: theme.palette.primary.main,
	},
}));
