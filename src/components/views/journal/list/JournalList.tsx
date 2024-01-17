import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CustomChip from 'src/components/mui/chip';
import {ThemeColor} from 'src/components/layout/types';
import TableSearchForm from '@/src/components/features/tableSearchForm/TableSearchForm';
import TableDataGrid from '@/src/components/features/tables/TableDataGrid';
import {searchFilterAtom} from 'src/stories/tableSearchForm';
import {useAtomValue, useSetAtom} from 'jotai';
import {GridColumns} from '@mui/x-data-grid';
import {useGetCelebs} from 'src/fetchers/journal';
import {JournalListItem} from '@/src/fetchers/journal/types';
import {celebCategories, celebSignupStatus, celebTypes} from '@/src/configs/journal';
import JournalSelectGroup from 'src/components/views/journal/list/JournalSelectGroup';
import StyledLink from 'src/components/atoms/link/StyledLink';
import ListAvatar from 'src/components/atoms/avators/ListAvatar';
import React from 'react';
import {Container} from "@/src/styles/contentStyle";

interface SignupStatusType {
    [key: string]: ThemeColor;
}

export const signupStatusObj: SignupStatusType = {
    APPROVAL_WAIT: 'secondary',
    APPROVAL_COMPLETE: 'success',
    APPROVAL_REJECT: 'error',
    SEND_EMAIL: 'warning',
};

interface CellType {
    row: JournalListItem;
}

const columns: GridColumns = [
    {
        flex: 0.05,
        field: 'id',
        minWidth: 80,
        headerName: 'ID',
    },
    {
        flex: 0.15,
        minWidth: 230,
        filterable: false,
        hideable: false,
        field: 'first_name',
        headerName: 'First Name',
        renderCell: ({row}: CellType) => {
            const {first_name} = row;
            return (
                <Box sx={{display: 'flex', alignItems: 'center'}}>
                    <Box sx={{display: 'flex', alignItems: 'flex-start', flexDirection: 'column'}}>
                        <Typography>{first_name ? first_name : '이름 없음'}</Typography>
                    </Box>
                </Box>
            );
        },
    },
    {
        flex: 0.15,
        minWidth: 230,
        filterable: false,
        hideable: false,
        field: 'last_name',
        headerName: 'Last Name',
        renderCell: ({row}: CellType) => {
            const {last_name, id} = row;
            return (
                <Box sx={{display: 'flex', alignItems: 'center'}}>
                    <Box sx={{display: 'flex', alignItems: 'flex-start', flexDirection: 'column'}}>
                        <StyledLink href={`/journal/detail`}>{last_name ? last_name : '이름 없음'}</StyledLink>
                    </Box>
                </Box>
            );
        },
    },
    {
        flex: 0.15,
        minWidth: 230,
        filterable: false,
        hideable: false,
        field: 'email',
        headerName: 'E-Mail',
        renderCell: ({row}: CellType) => {
            const {email} = row;
            return (
                <Box sx={{display: 'flex', alignItems: 'center'}}>
                    <Box sx={{display: 'flex', alignItems: 'flex-start', flexDirection: 'column'}}>
                        <Typography>{email ? email : 'e-mail 없음'}</Typography>
                    </Box>
                </Box>
            );
        },
    },
    {
        flex: 0.15,
        minWidth: 230,
        filterable: false,
        hideable: false,
        field: 'gender',
        headerName: 'Gender',
        renderCell: ({row}: CellType) => {
            const {gender} = row;
            return (
                <Box sx={{display: 'flex', alignItems: 'center'}}>
                    <Box sx={{display: 'flex', alignItems: 'flex-start', flexDirection: 'column'}}>
                        <Typography>{gender ? gender : '성별 없음'}</Typography>
                    </Box>
                </Box>
            );
        },
    },
    {
        flex: 0.15,
        minWidth: 230,
        filterable: false,
        hideable: false,
        field: 'ip_address',
        headerName: 'IP Address',
        renderCell: ({row}: CellType) => {
            const {ip_address} = row;
            return (
                <Box sx={{display: 'flex', alignItems: 'center'}}>
                    <Box sx={{display: 'flex', alignItems: 'flex-start', flexDirection: 'column'}}>
                        <Typography>{ip_address ? ip_address : 'ip 없음'}</Typography>
                    </Box>
                </Box>
            );
        },
    },
    // {
    //     flex: 0.2,
    //     minWidth: 250,
    //     filterable: false,
    //     hideable: false,
    //     field: 'content',
    //     headerName: 'symId',
    //     renderCell: ({row}: CellType) => {
    //         return (
    //             <Typography noWrap variant='body2'>
    //                 <StyledLink
    //                     sx={{
    //                         fontSize: '14px',
    //                     }}
    //                     href={`/user/detail/${row.symId}`}
    //                 >
    //                     {row.symId}
    //                 </StyledLink>
    //             </Typography>
    //         );
    //     },
    // },
    // {
    //     flex: 0.15,
    //     field: 'img',
    //     minWidth: 150,
    //     filterable: false,
    //     hideable: false,
    //     headerName: '이미지',
    //     renderCell: ({row}: CellType) => {
    //         return (
    //             <Box sx={{display: 'flex', alignItems: 'center'}}>
    //                 <img src={row.img} />
    //             </Box>
    //         );
    //     },
    // },
];

const selectCategories = [
    {value: 'id', label: 'ID'},
    {value: 'title', label: 'Title'},
];

const JournalList: React.FC = () => {
    const {page, size, select, text} = useAtomValue(searchFilterAtom);

    const {data, isLoading} = useGetCelebs({
        page,
        size
    });

    const getRowId = (row: JournalListItem) => row.id;

    return (
        <>
            <Container>
                {/*<TableSearchForm placeholder={'검색'} selectCategories={selectCategories}>*/}
                {/*	<JournalSelectGroup />*/}
                {/*</TableSearchForm>*/}
                <h1>Journal list</h1>
                {data?.data && (
                    <TableDataGrid<JournalListItem> data={data.data} isLoading={isLoading} columns={columns}
                                                    title={"content"} getRowId={getRowId}/>
                )}
            </Container>
        </>
    );
};

export default JournalList;
