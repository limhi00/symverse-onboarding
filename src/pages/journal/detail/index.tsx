import * as React from 'react';
import dynamic from 'next/dynamic';
import styled from "@emotion/styled";
import {NextPage} from 'next';
import {Container} from "@/src/styles/contentStyle";
import {Typography} from "@mui/material";
import Card from "@mui/material/Card";

const QuillEditor = dynamic(() => import('@/src/components/features/editors/QuillEditor'), {ssr: false}); // client 사이드에서만 동작되기 때문에 ssr false로 설정
const DraftEditor = dynamic(() => import('@/src/components/features/editors/DraftEditor'), {ssr: false}); // client 사이드에서만 동작되기 때문에 ssr false로 설정

const JournalDetailPage: NextPage = () => {

    // state
    const [QhtmlStr, setQHtmlStr] = React.useState<string>('');

    // ref
    const QviewContainerRef = React.useRef<HTMLDivElement>(null);

    // useEffect
    React.useEffect(() => {
        if (QviewContainerRef.current) {
            QviewContainerRef.current.innerHTML = '<h2>html 코드를 이용하여 만들어지는 View입니다.</h2>'
            QviewContainerRef.current.innerHTML += QhtmlStr;
        }
    }, [QhtmlStr])

    // state
    const [DhtmlStr, setDHtmlStr] = React.useState<string>('');

    // ref
    const DviewContainerRef = React.useRef<HTMLDivElement>(null);

    // useEffect
    React.useEffect(() => {
        if(DviewContainerRef.current) {
           DviewContainerRef.current.innerHTML = '<h2>html 코드를 이용하여 만들어지는 View입니다.</h2>'
           DviewContainerRef.current.innerHTML += DhtmlStr;
        }
    }, [DhtmlStr])

    return (
        <>
            <Container>
                <Typography variant={'h4'}>Quill Editor</Typography>
                <Card sx={{py: 5}}>
                    <EditorContainer>
                        <QuillEditor htmlStr={QhtmlStr} setHtmlStr={setQHtmlStr}/>
                    </EditorContainer>

                    <Contents.Container>
                        <Contents.HtmlContainer>
                            <h2>Quill Editor 를 통해 만들어진 html 코드입니다.</h2>
                            {QhtmlStr}
                        </Contents.HtmlContainer>

                        <Contents.ViewContainer ref={QviewContainerRef}/>
                    </Contents.Container>
                </Card>
                <br /><br />
                <Typography variant={'h4'}>Draft Editor</Typography>
                <Card sx={{py: 5}}>
                    <EditorContainer>
                        <DraftEditor htmlStr={DhtmlStr} setHtmlStr={setDHtmlStr} />
                    </EditorContainer>

                    <Contents.Container>
                        <Contents.HtmlContainer>
                            <h2>Draft Editor 를 통해 만들어진 html 코드입니다.</h2>
                            {DhtmlStr}
                        </Contents.HtmlContainer>

                        <Contents.ViewContainer ref={DviewContainerRef} />
                    </Contents.Container>
                </Card>
            </Container>
        </>
    );
};

export default JournalDetailPage;

// style
const EditorContainer = styled.div`
  width: 800px;
  height: 400px;

  margin: 0 auto;
`;

const Contents = {
    Container: styled.div`
      width: 1200px;

      margin: 0 auto;

      display: flex;
      gap: 40px;

      & > div {
        width: 600px;

        padding: 16px;

        box-sizing: border-box;
      }
    `,

    HtmlContainer: styled.div`
      border: 2px solid orange;
    `,

    ViewContainer: styled.div`
      border: 2px solid olive;

      // quill에서 가운데 정렬을 한 경우
      .ql-align-center {
        text-align: center;
      }

      // quill에서 코드 블럭을 사용한 경우
      .ql-syntax {
        background-color: #23241f;
        color: #f8f8f2;
        border-radius: 3px;
        padding: 5px;
        margin: 0 10px;
      }
    `,
}