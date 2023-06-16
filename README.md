This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

---

# Directory structure

- public - static 파일 ( image, icon 등 )
- src - 소스 코드 root 디렉토리입니다. ( 해당 설정은 아래 tsconfig.json 에서 추가 설명 )
- @core - ** BaaS팀 전용 패키지 디렉토리 입니다. 해당 디렉토리 내에 component, loginStyle, utils function 등이 포함되어 있습니다.
- components - 화면을 구성하는 Component 들의 집합입니다
- views: 서비스에 특화된 컴포넌트 집합 단위를 의미합니다. ( LoginForm, ProductTopMenu… )
- atoms: 서비스에 특화된 컴포넌트 개별을 의미합니다.( LoginInput, ProductMenuItem )
- features: 원자 단위의 컴포넌트를 의미합니다. ( Button, Input, Select..  )
- contexts - 전역적으로 핸들링이 필요한 React Context API 들의 집합입니다.
- fetchers - 서버 데이터를 호출하는 비동기 함수들의 집합니다. ( axios, react-query, swr 등 )
- hooks - 공통 Hook 형태 디렉토리로써, React 함수형 컴포넌트 기능 혹은 상태 관련 재사용 가능한 함수의 집합니다.
- pages - 페이지 단위 디렉토리입니다.
- stories - 공통적으로 관리할 상태에 대한 디렉토리입니다. ( recoil, jotai 등 )
- styles - css 및 style에 관련된 파일들의 집합입니다.

# Naming Guide

### File name

Component 파일
```
Pascalcase로 작성할 것
( 첫단어가 대문자로 시작하는 표기법 )
Header.tsx Footer.tsx MainBanner.tsx BlogList.tsx
```
Non-Component 파일
```
Camelcase 로 작성할 것
(중간 글자들은 대문자로 시작하지만 첫 글자가 소문자로 시작하는 표기법)
useAccessGateHook.ts userPage.tsx fetchApi.ts
```
Test 파일
```
Test 파일명은 대상 파일명과 동일하게 작성할 것
Header.test.tsx Footer.test.tsx
```


### Variable name

Component 명
```
Pascalcase로 작성할 것

ex) 
const Header: React.FC = () => {}
const Footer: React.FC = () => {}
```

Page 명
```
Pascalcase로 작성할것
접미사(suffix) 로 Page를 붙일 것

const NewsPage: React.FC = () => {}
const UserProfilePage: React.FC = () => {}
```

Prop Type 명
```
Pascalcase로 작성할것
파일명은 prop를 전달 받는 파일명과 동일하게 작성할 것
접미사(suffix)로 Prop를 붙일 것

type NewsPageProp = {}
type HeaderProp = {}
```

Hook 명

```
Camelcase 로 작성할 것
접두사(prefix)로 use 을 붙일 것

const useWalletStatus = {}
const useBreakpoint = {}
```

공통

```
var 금지 - let, const 를 사용할 것

스프레드 연산자 활용할 것
```

## Component Structure

```bash
/* import */
import React, { useState } from 'react';

/* Prop */
type OtherComponentProp = {
	title: string;
	description: string;
}

const OtherComponent: React.FC<OtherComponentProp> = ({ title, description }) => {

	/* State */
	const [use, setUse] = useState(true);
	
	/* Hook */

	/* Handle function */
	const handleFunction = () => {
		
	}

	return (
		<div>
			<h1>{title}</h1>
			<span>{description}</span>
			컴포넌트입니다.
		</div>
	);
};

export default OtherComponent;


// import → Prop → State → Hook → Handle function  → html 순으로 작성할 것 
```

## CSS 관리 규칙

- Native css 금지 → Object 형태의 Styled 사용할 것

## 참고할 만한 문서

[Google TypeScript Style Guide](https://google.github.io/styleguide/tsguide.html)
