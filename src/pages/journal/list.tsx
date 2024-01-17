import {NextPage} from 'next';
import Grid from '@mui/material/Grid';
import JournalList from '@/src/components/views/journal/list/JournalList';
import AsyncComponentBoundary from '@/src/components/atoms/suspense/AsyncComponentBoundary';
import Spinner from '@/src/components/atoms/spinner';

const JournalListPage = () => {
    return (
        <Grid container spacing={6}>
            <Grid item xs={12}>
                <AsyncComponentBoundary pendingFallback={<Spinner/>}>
                    <JournalList/>
                </AsyncComponentBoundary>
            </Grid>
        </Grid>
    );
}

export default JournalListPage;