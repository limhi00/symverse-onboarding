import { callApi } from '@/src/fetchers';
import { apis } from '@/src/fetchers/apis';
import { QueryClient, useQuery } from 'react-query';
import { getCookie } from '@/src/utils/cookie';
import {
	ApproveCelebResult,
	GetCelebResult,
	GetCelebsRequest,
	GetCelebsResult,
	RejectCelebRequest,
	RejectCelebResult,
} from '@/src/fetchers/journal/types';

const storedToken = getCookie('accessToken')!;

export const getCelebsApi = (filter: GetCelebsRequest) => {
	return callApi<GetCelebsRequest, GetCelebsResult>({
		api: apis.GET_CELEB_LIST_API,
		queryString: filter,
		token: storedToken,
	});
};

// export const getCelebApi = (celebId: string, token?: string) => {
// 	return callApi<string, GetCelebResult>({
// 		api: apis.GET_CELEB_API,
// 		slug: { celebId },
// 		token: token,
// 	});
// };

// export const approveCelebApi = (celebId: string | number) => {
// 	return callApi<string | number, ApproveCelebResult>({
// 		api: apis.APPROVE_CELEB_API,
// 		slug: { celebId },
// 		token: storedToken,
// 	});
// };
//
// export const rejectCelebApi = (celebId: string | number, filter: RejectCelebRequest) => {
// 	return callApi<RejectCelebRequest, RejectCelebResult>({
// 		api: apis.REJECT_CELEB_API,
// 		slug: { celebId },
// 		body: filter,
// 		token: storedToken,
// 	});
// };

const queryKeys = {
	getCelebsKey: (filter: GetCelebsRequest) => ['celebs', filter] as const,
	getCelebKey: (id: string, token: string | undefined) => ['celebs', 'detail', id, token || null] as const,
};

export const useGetCelebs = (filter: GetCelebsRequest) => {
	return useQuery(queryKeys.getCelebsKey(filter), () => getCelebsApi(filter), {
		suspense: true,
		refetchOnReconnect: false,
		refetchOnWindowFocus: false,
	});
};

// export const useGetCeleb = (id: string, token?: string) => {
// 	return useQuery(queryKeys.getCelebKey(id, token), () => getCelebApi(id, token), {
// 		suspense: true,
// 		refetchOnReconnect: false,
// 		refetchOnWindowFocus: false,
// 	});
// };
//
// export const prefetchGetCeleb = (client: QueryClient, id: string, token?: string | null) => {
// 	const accessToken = token || undefined;
// 	return client.prefetchQuery(queryKeys.getCelebKey(id, accessToken), () => getCelebApi(id, accessToken));
// };
