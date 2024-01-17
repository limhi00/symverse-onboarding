import CustomAvatar from 'src/components/mui/avatar';

interface ListAvatarProps {
	src?: string;
}
const ListAvatar: React.FC<ListAvatarProps> = ({ src }) => {
	return (
		<>
			<CustomAvatar src={src} sx={{ mr: 3, width: '1.875rem', height: '1.875rem' }} />
		</>
	);
};

export default ListAvatar;
