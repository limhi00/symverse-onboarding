import { callApi } from '@/src/fetchers';
import { apis } from '@/src/fetchers/apis';
import { QueryClient, useQuery } from 'react-query';
import { getCookie } from '@/src/utils/cookie';
import {
	DeleteCelebStoryResult,
	GetCelebNftsRequest,
	GetCelebNftsResult,
	GetCelebStoriesRequest,
	GetCelebStoriesResult,
} from '@/src/fetchers/journal/lists/types';

const storedToken = getCookie('accessToken')!;

export const getNftsByCelebApi = (celebId: string, filter: GetCelebNftsRequest) => {
	return callApi<GetCelebNftsRequest, GetCelebNftsResult>({
		api: apis.GET_NFTS_BY_CELEB_API,
		slug: { celebId },
		queryString: filter,
		token: storedToken,
	});
};

export const getStoriesByCelebApi = (celebId: string, filter: GetCelebStoriesRequest) => {
	return callApi<GetCelebStoriesRequest, GetCelebStoriesResult>({
		api: apis.GET_STORIES_BY_CELEB_API,
		slug: { celebId },
		queryString: filter,
		token: storedToken,
	});
};

export const deleteCelebStoryApi = (celebId: number, storyId: number) => {
	return callApi<number, DeleteCelebStoryResult>({
		api: apis.DELETE_CELEB_STORY_API,
		slug: { celebId, storyId },
		token: storedToken,
	});
};

const queryKeys = {
	getCelebNftsKey: (id: string, filter: GetCelebNftsRequest) => ['celeb', id, 'nfts', filter] as const,
	getCelebStoriesKey: (id: string, filter: GetCelebStoriesRequest) => ['celeb', id, 'stories', filter] as const,
};

export const useGetCelebNfts = (id: string, filter: GetCelebNftsRequest) => {
	return useQuery(queryKeys.getCelebNftsKey(id, filter), () => getNftsByCelebApi(id, filter), {
		suspense: true,
		refetchOnReconnect: false,
		refetchOnWindowFocus: false,
	});
};

export const useGetCelebStories = (id: string, filter: GetCelebStoriesRequest) => {
	return useQuery(queryKeys.getCelebStoriesKey(id, filter), () => getStoriesByCelebApi(id, filter), {
		suspense: true,
		refetchOnReconnect: false,
		refetchOnWindowFocus: false,
	});
};
