import { NftCategory, SaleStatus } from '@/src/configs/nft';
import { IBaasResponse, IPageRequest, IPageResponse } from '@/src/fetchers/types';

export type GetCelebNftsResult = IBaasResponse<IPageResponse<CelebNftListItem>>;

export type GetCelebStoriesResult = IBaasResponse<IPageResponse<CelebStoryListItem>>;

export type DeleteCelebStoryResult = IBaasResponse<never>;

export interface GetCelebNftsRequest extends IPageRequest {
	userNickName?: string;
	nftCategory?: NftCategory[];
	nftName?: string;
}
export interface GetCelebStoriesRequest extends IPageRequest {
	contents?: string;
}

export interface CelebNftListItem {
	celebId: number;
	celebSymId: string;
	createTime: string;
	extension: string;
	id: number;
	imageUrl: string;
	likeCount: number;
	nftCategory: NftCategory;
	nftName: string;
	nftSaleCount: number;
	originFileName: string;
	price: number;
	saleCount: number;
	saleEndDate: number;
	saleStartDate: number;
	saleStatus: SaleStatus;
	storageId: number;
	updateTime: string;
	userNickName: string;
}

export interface CelebStoryListItem {
	celebId: number;
	celebName: string;
	celebSymId: string;
	contents: string;
	createTime: string;
	storyId: number;
	storyImages: StoryImage[];
	storyLikeCount: number;
	updateTime: string;
}

export interface StoryImage {
	extension: string;
	imageUrl: string;
	orderNo: number;
	originFileName: string;
	storageId: number;
}
