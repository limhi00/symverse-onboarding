import { CelebCategory, CelebRejectReasonType, CelebSignupStatusType, CelebSns, CelebType } from '@/src/configs/journal';
import { IBaasResponse, IPageRequest, IPageResponse } from '@/src/fetchers/types';

export type GetCelebsResult = IBaasResponse<IPageResponse<JournalListItem>>;

export type GetCelebResult = IBaasResponse<CelebDetailItem>;

export type ApproveCelebResult = IBaasResponse<ApproveCelebItem>;

export type RejectCelebResult = IBaasResponse<ApproveCelebItem>;

export interface GetCelebsRequest extends IPageRequest {
	useNickName?: string;
	symId?: string;
	celebCategory?: CelebCategory[];
	celebSignupStatuses?: CelebSignupStatusType[];
	celebType?: CelebType[];
}

export interface RejectCelebRequest {
	celebRejectReason?: CelebRejectReasonType;
	celebRejectContent?: string;
}

export interface JournalListItem {
	id: number;
	first_name: string;
	last_name: string;
	email: string;
	gender: string;
	ip_address: string;
}

export interface CelebDetailItem {
	celebSignupStatus: CelebSignupStatusType;
	celebChannel: CelebSns;
	celebCategory: CelebCategory;
	celebSubscribe: CelebSubscribe[];
	celebType: CelebType;
	channelId: string;
	createTime: string;
	email: string;
	extension: string;
	id: number;
	imageUrl: string;
	nftCount: number;
	nftLikeCount: number;
	originalFileName: string;
	storageId: number;
	storyCount: number;
	subscribeCount: number;
	symId: string;
	updateTime: string;
	userNickName: string;
	businessCert: Storage;
	storage: Storage;
}

interface CelebSubscribe {
	celebId: number;
	createTime: string;
	extension: string;
	id: number;
	imageUrl: string;
	originFileName: string;
	storageId: number;
	symId: string;
	updateTime: string;
	userNickname: string;
}

interface ApproveCelebItem {
	celebCategory: string;
	celebChannel: string;
	celebSignupStatus: string;
	celebType: string;
	channelId: string;
	createTime: string;
	email: string;
	extension: string;
	id: number;
	imageUrl: string;
	originFileName: string;
	storageId: number;
	updateTime: string;
	userNickName: string;
	userStatus: string;
	userSymId: string;
}

export interface Storage {
	fileId: number;
	fileName: string;
	id: number;
	staticUrl: string;
}
