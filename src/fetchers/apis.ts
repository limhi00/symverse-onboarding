export const SERVER_API = process.env.NEXT_PUBLIC_API_HOST;

export const ERROR_CODE = {
	INVALID_EMAIL: 'CELLECT-ADMIN-0001',
	EMAIL_ALREADY_EXISTS: 'CELLECT-ADMIN-0002',
	INVALID_PASSWORD: 'CELLECT-ADMIN-0003',
	INVALID_APPROVE: 'CELLECT-ADMIN-0004',
	INVALID_ID: 'CELLECT-ADMIN-0005',
};

console.log('SERVER API HOST = ', SERVER_API);

type HtmlMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS';

export interface ApiInfo {
	uri: string;
	method: HtmlMethod;
	description?: string;
}
export const apis = {
	// LOGIN_API: { uri: '/admin/login', method: 'POST', description: '로그인 요청 API' },
	// REGISTER_API: { uri: '/admin', method: 'POST', description: '관리자 회원가입 요청 API' },
	// PROFILE_API: { uri: '/admin/profile', method: 'GET', description: 'Token 기반 관리자 프로파일 요청 API' },
	//
	// GET_ADMIN_LIST_API: { uri: '/admin', method: 'GET', description: '관리자 목록 요청 API' },
	// GET_ADMIN_API: { uri: '/admin/{id}', method: 'GET', description: '관리자 상세정보 요청 API' },
	// AUTHORITY_ADMIN_API: { uri: '/admin/authority', method: 'PUT', description: '관리자 승인, 승인취소 요청 API' },
	//
	// GET_USER_LIST_API: { uri: '/user', method: 'GET', description: '유저 목록 요청 API' },
	// GET_USER_API: { uri: '/user/{id}', method: 'GET', description: '유저 상세 정보 요청 API' },
	// BLOCK_USER_API: { uri: '/user/status', method: 'PUT', description: '유저 상태(BLOCK, UNBLOCK) 수정 요청 API' },
	// MODIFY_USER_INFO_API: { uri: '/user', method: 'PUT', description: '유저 정보 수정 요청 API' },
	// GET_USER_SALE_NFTS_API: { uri: '/user/sale/nft', method: 'GET', description: '유저가 구매한 NFT 목록 요청 API' },
	// GET_USER_PICK_NFTS_API: { uri: '/user/pick/nft', method: 'GET', description: '유저가 픽한 NFT 목록 요청 API' },
	// GET_USER_SUBSCRIBE_CELEBS_API: { uri: '/user/subscribe', method: 'GET', description: '유저가 구독한 셀럽 목록 요청 API' },
	// DELETE_USER_PICK_NFT_API: {
	// 	uri: '/user/{userSymId}/nft/{nftId}/basket/{nftBasketId}',
	// 	method: 'DELETE',
	// 	description: '유저의 장바구니 NFT 삭제 요청 API',
	// },
	// DELETE_USER_SUBSCRIBE_CELEB_API: {
	// 	uri: '/user/{userSymId}/celeb/{celebId}/subscribe/{celebSubscribeId}',
	// 	method: 'DELETE',
	// 	description: '유저의 셀럽 구독 취소 요청 API',
	// },
	//
	// GET_NFT_LIST_API: { uri: '/nft', method: 'GET', description: 'NFT 목록 요청 API' },
	// GET_NFT_API: { uri: '/nft/{nftId}', method: 'GET', description: 'NFT 상세 정보 요청 API' },
	// UPDATE_NFT_SALE_API: { uri: '/nft/{nftId}/nft-sale', method: 'PUT', description: 'NFT 판매 정보 수정' },
	// GET_NFT_COMMENTS_API: { uri: '/nft/{nftId}/comments', method: 'GET', description: 'NFT 응원하기 목록 요청 API' },
	// GET_NFT_PURCHASE_USERS_API: { uri: '/nft/{nftId}/sale-users', method: 'GET', description: 'NFT 구매 유저 목록 API' },
	//
	// UPDATE_NFT_COMMENT_API: { uri: '/nft/{nftId}/cheerup/{nftCommentId}', method: 'PUT', description: 'NFT 응원하기 수정 요청 API' },
	// DELETE_NFT_COMMENT_API: { uri: '/nft/{nftId}/cheerup/{nftCommentId}', method: 'DELETE', description: 'NFT 응원하기 삭제 요청 API' },

	GET_CELEB_LIST_API: { uri: '/journals', method: 'GET', description: 'Journal 목록 요청 API' },
	// GET_CELEB_API: { uri: '/celeb/{celebId}', method: 'GET', description: '셀럽 상세 정보 요청 API' },
	// APPROVE_CELEB_API: { uri: '/celeb/{celebId}/approve', method: 'PUT', description: '셀럽 승인 신청 API' },
	// REJECT_CELEB_API: { uri: '/celeb/{celebId}/reject', method: 'PUT', description: '셀럽 승인 거절신청 API' },
	// GET_NFTS_BY_CELEB_API: { uri: '/celeb/{celebId}/nfts', method: 'GET', description: '셀럽 NFT 목록 요청 API' },
	// GET_STORIES_BY_CELEB_API: { uri: '/celeb/{celebId}/storys', method: 'GET', description: '셀럽 스토리 목록 요청 API' },
	// DELETE_CELEB_STORY_API: { uri: '/celeb/{celebId}/story/{storyId}', method: 'DELETE', description: '셀럽 스토리 삭제 요청 API' },
	//
	// // 결제 조회
	// GET_PAYMENTS_API: { uri: '/payments', method: 'GET', description: '결제 내역 목록 조회 API' },
	// GET_PAYMENT_API: { uri: '/payment/{id}', method: 'GET', description: '결제 내역 상세 조회 API' },
	//
	// REFUND_PAYMENT_API: { uri: '/payment/{id}/cancel', method: 'POST', description: '환불 요청 API' },
	// ADMIN_REFUND_PAYMENT_API: { uri: '/payment/{id}/refund', method: 'GET', description: '관리자 수동 환불 완료 처리 API' },
	//
	// // 출금 조회
	// GET_WITHDRAWS_API: { uri: '/withdraw', method: 'GET', description: '셀럽 출금신청 목록 조회 API' },
	// GET_WITHDRAW_API: { uri: '/withdraw/{withdrawId}/withdrawDetail', method: 'GET', description: '셀럽 출금신청 상세 조회 API' },
	//
	// APPROVE_WITHDRAW_API: { uri: '/withdraw/{withdrawId}/approve', method: 'PUT', description: '셀럽 출금신청 승인 신청 API' },
	// REFUSE_WITHDRAW_API: { uri: '/withdraw/{withdrawId}/refuse', method: 'PUT', description: '셀럽 출금신청 승인 거절신청 API ' },
	//
	// // 유저 차단 관리
	// GET_BLOCK_USERS_API: { uri: '/user/blocks', method: 'GET', description: '유저 기능 차단 목록 요청 API' },
	// GET_BLOCK_USER_API: { uri: '/user/{symId}/block/{blockId}', method: 'GET', description: '유저 기능 차단 상세 요청 API' },
	// UPDATE_BLOCK_USER_API: { uri: '/user/{symId}/block/{blockId}', method: 'PUT', description: '유저 기능 차단 수정 요청 API' },
	// USER_BLOCK_API: { uri: '/user/block', method: 'POST', description: '유저 기능 차단 요청 API' },
	// USER_BLOCK_CANCEL_API: { uri: '/user/{symId}/block/{blockId}', method: 'DELETE', description: '유저 기능 차단 삭제(해제) 요청 API' },
	//
	// // 커뮤니 차단 관리
	// GET_BLOCK_CELEBS_API: { uri: '/celeb/blocks', method: 'GET', description: '셀럽 기능 차단 목록 요청 API' },
	// GET_BLOCK_CELEB_API: { uri: '/celeb/{celebId}/block/{blockId}', method: 'GET', description: '셀럽 기능 차단 상세 요청 API' },
	// UPDATE_BLOCK_CELEB_API: { uri: '/celeb/{celebId}/block/{blockId}', method: 'PUT', description: '셀럽 기능 차단 수정 요청 API' },
	// CELEB_BLOCK_API: { uri: '/celeb/block', method: 'POST', description: '셀럽 기능 차단 요청 API' },
	// CELEB_BLOCK_CANCEL_API: { uri: '/celeb/{celebId}/block/{blockId}', method: 'DELETE', description: '셀럽 기능 차단 삭제(해제) 요청 API' },
} as Record<string, ApiInfo>;
