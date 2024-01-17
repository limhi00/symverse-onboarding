import Icon from 'src/components/atoms/icon';

export type CelebSignupStatusType = 'APPROVAL_WAIT' | 'APPROVAL_COMPLETE' | 'APPROVAL_REJECT' | 'SEND_EMAIL';

export type CelebType = 'BRAND' | 'CREATOR';

export type CelebCategory =
	| 'OUTDOOR'
	| 'SPORT'
	| 'CULTURE'
	| 'DIGITAL_CONTENT'
	| 'MUSICIAN'
	| 'ARTIST'
	| 'DANCER'
	| 'SOCIAL_NETWORK'
	| 'HEALTH_BEAUTY';

export type CelebSns = 'FACEBOOK' | 'INSTAGRAM' | 'TWITTER' | 'YOUTUBE';

export type CelebRejectReasonType = 'LACK_DATA' | 'UNKNOWN_OWNER' | 'BAD_CONTENT' | 'LICENSE_PROBLEM' | 'ETC';

export const celebSignupStatus = {
	APPROVAL_WAIT: '승인 대기',
	APPROVAL_COMPLETE: '인증 완료',
	APPROVAL_REJECT: '승인 거절',
	SEND_EMAIL: '이메일 대기',
};

export const celebTypes = {
	BRAND: '브랜드',
	CREATOR: '크리에이터',
};

export const celebCategories = {
	OUTDOOR: '아웃도어/여행',
	SPORT: '운동/스포츠',
	CULTURE: '문화/공연',
	DIGITAL_CONTENT: '사진/영상',
	MUSICIAN: '음악/악기',
	ARTIST: '공예/예술',
	DANCER: '댄스/무용',
	SOCIAL_NETWORK: '사교/인맥',
	HEALTH_BEAUTY: '미용/건강',
	EDUCATION: '교육',
};

export const celebSns = {
	FACEBOOK: '페이스북',
	INSTAGRAM: '인스타그램',
	TWITTER: '트위터',
	YOUTUBE: '유튜브',
};

export const celebRejectReason = {
	LACK_DATA: '계정 승인에 부합하지 않는 조건입니다.',
	UNKNOWN_OWNER: '계정 승인 시 수집 컨텐츠가 본인 소유 작품인지 불명확합니다.',
	BAD_CONTENT: '계정 승인 시 수집 컨텐츠에 부적절한 내용이 포함되어 있습니다.',
	LICENSE_PROBLEM: '계정 승인 시 수집 SNS 또는 컨텐츠의 라이선스에 문제가 있습니다.',
	ETC: '기타',
};

export const celebApproveModalMessage = {
	approval: {
		icon: undefined,
		title: '커뮤니 승인',
		description: '해당 커뮤니를 승인하시겠습니까?',
		btnText: '네, 승인하겠습니다.',
		successTitle: '승인',
		successDescription: '커뮤니가 승인 되었습니다.',
	},
	reject: {
		icon: <Icon icon='mdi:alert-circle-outline' fontSize='5.5rem' />,
		title: '커뮤니 승인 거절',
		description: '해당 커뮤니의 승인을 거절하시겠습니까?',
		btnText: '네, 승인 거절하겠습니다.',
		successTitle: '승인 거절',
		successDescription: '커뮤니의 승인이 거절 되었습니다.',
	},
};
