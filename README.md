    React 공부/참조 목적을 위한 React Components/예제 모음

# [React](https://github.com/yi5oyu/Study/blob/main/React.js/%EA%B0%9C%EB%85%90)
    웹 프레임워크. UI를 만들기 위한 JavaScript 라이브러리

`컴포넌트(Component)`

    UI의 독립적인 부분을 만들어 재사용 가능하고 독립적으로 상태 관리할 수 있음
    다른 컴포넌트와 조합하여 전체 애플리케이션을 구성
    
`가삼 DOM(Virtual DOM)`

    실제 DOM을 수정하기 전에 가상 DOM에서 변경 사항을 비교, 변경된 부분만 실제 DOM에 반영해 성능을 향상시킴
    가상 DOM: 메모리 상에서만 존재하는 DOM의 복사본

`JSX(JavaScript XML)`

     JavaScript 코드 내에서 HTML과 유사한 문법을 사용할 수 있음

`상태관리`: React의 상태 변화에 따라 자동으로 UI가 갱신됨
`유지보수`: 컴포넌트 재사용으로 코드 중복을 줄이고 유지보수가 쉬운 구조를 만들 수 있음
`성능`: 가상 DOM 사용으로 DOM 업데이트 성능을 최적화, 불필요한 리렌더링 방지함

## HTML,CSS,JavaScript

`HTML(HyperText Markup Language)`

    웹 페이지 구조 정의하는 마크업 언어
    콘텐츠를 작성하고 각 요소는 태그로 구분

`CSS(Cascading Style Sheets)`

    HTML로 작성된 콘텐츠 스타일 지정(글꼴, 색상, 여백 등...)

`JavaScript`

    웹 페이지에서 동적인 기능을 구현하는 데 사용
    사용자의 상호작용에 반응해 콘텐츠 업데이트, 서버에서 데이터 가져와 표시 등...

`상태관리`: 페이지가 새로고침될 때마다 전체 페이지르 다시 렌더링 해야함   
`유지보수`: HTML, CSS, JavaScript로 작성된 코드가 많아지면 코드의 복잡도가 증가하고 유지보수가 어려워 질 수 있음    
`성능`: 매번 DOM을 직접 수정하는 방식은 성능에 부담을 줄 수 있음    


## [react-pages](https://github.com/yi5oyu/react/tree/master/react-pages)
    GitHub Pages를 활용한 정적 웹호스팅 목적으로한 프로젝트

### 목차
- [create-react-app 프로젝트](./react-pages/README.md#create-react-app-프로젝트)
- [GitHub Pages](./react-pages/README.md#github-pages)
- [HashRouter](./react-pages/README.md#hashrouter)
- [스크립트](./react-pages/README.md#스크립트)

## [react-vite](https://github.com/yi5oyu/react/tree/master/react-vite)
    React 공부, 실습, 테스트를 위한 프로젝트
    React + Vite (React + JavaScript)

### 목차
- [React + Vite](./react-vite/README.md#react--vite)
- [Settings](./react-vite/README.md#settings)
- [Example](./react-vite/README.md#example)
- [스크립트](./react-vite/README.md#스크립트)

### VSCode 플러그인

-  ES7+ React/Redux/React-Native snippets
-  Material Icon Theme   
-  One Dark Pro   
-  Markdown All in One   
-  Prettier

> Prettier 설정    
> VSCode Settings(Ctrl + ,)    
> Editor format on save(저장시 자동 포메팅(Ctrl + s))   
> Editor Default Formmatter(기본 포메터 설정)  
> Open User Settings(JSON)(Ctrl + Shift + p) > Settings.json   
[Settings.json](https://github.com/yi5oyu/Study/blob/main/IDE/VScode/Settings.json)

<details>
<summary>Git Commit Convention</summary>
  
- **init**: 파일 생성
- **feat**: 기능 추가/수정   
- **design**: 레이아웃 추가/수정
- **test**: 테스트 코드 추가/수정
- **docs**: 문서 추가/수정
- **fix**: 버그 수정
- **setting**: 환경설정
- **style**: 주석, 코드 모양 변경

</details>

### 라이브러리

이모지 마트
 - https://github.com/missive/emoji-mart

simple-icons
 - https://github.com/simple-icons/simple-icons






