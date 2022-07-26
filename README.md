# O-House-Clone

### 개인프로젝트

#### 사용 언어 및 라이브러리

- Front: `NextJS` `Typescript` `masonic` `react-query` `emotion` `Antd`

배포여부: O

배포링크: https://o-house-clone.cy3589.com/store

Git: https://github.com/cy3589/o-house-clone

- summary : 오늘의집의 클론 프로젝트이며 무한스크롤이 적용되어있는 store 페이지만 진행하였습니다.

- description: 오늘의집 사이트의 네트워크 요청을 기반으로 분석해보니 API가 오픈되어 있는 것을 확인하여 진행한 웹사이트 클론 프로젝트 입니다.
- Learned
  - NextJS의 api라우팅 기능을 이용하여 CORS에러 회피를 구현하며 api라우팅 사용법을 알게 되었습니다.
  - react-virtualized, react-window 등 돔 렌더성능 최적화를 위한 라이브러리를 경험하고 필요에 따라 라이브러리를 선택할 수 있게 되었습니다.
  - masonic 라이브러리를 이용한 돔 가상화의 구현, 해당 라이브러리 사용법, 성능상 이점 등을 알게 되었습니다.
- Directory
  - components
    - 컴포넌트들이 들어있는 디렉토리 입니다.
  - interfaces
    - 타입과 인터페이스가 들어있는 디렉토리 입니다.
  - layouts
    - 전체 레이아웃을 잡는 컴포넌트가 들어있는 디렉토리 입니다.
      AppLayout.tsx는 children을 props로 받으며 pages 내 컴포넌트를 AppLayout으로 랩핑하여 사용합니다.
  - pages
    - NextJS의 기본 pages 디렉토리 입니다.
  - public
    - 정적 파일들이 들어있는 디렉토리 입니다.
  - slices
    - RTK의 slice가 들어있는 디렉토리 입니다.
  - store
    - RTK의 store와 reducer가 들어있는 디렉토리 입니다.
  - styles
    - 스타일을 지정하는 css파일이 들어있는 디렉토리 입니다.
  - utils
    - 커스텀 함수가 들어있는 디렉토리 입니다.
      무한 스크롤을 위한 fetcher가 들어있습니다.
