# Create React App 프로젝트
    프로젝트 생성
    npx create-react-app 프로젝트명 > cd 프로젝트명(폴더 이동)

    /react-pages
    ├── public
    ├── src
    │   ├── assets
    │   ├── components
    │   ├── pages
    │   │   ├── Home
    │   │   ├── Test
    │   ├── App.css
    │   ├── App.js
    │   ├── index.js
    ├── package.json
    └── README.md

## GitHub Pages
정적 웹 호스팅 서비스   
gh-pages 브렌치에 커밋을 푸시하면 자동으로 빌드 및 배포

    npm install gh-pages  

    package.json 설정
    homepage": "https://username.github.io/repository-name",

    scripts 설정
    "scripts": {   
        "predeploy": "npm run build",   
        "deploy": "gh-pages -d build",  
    }  

    github pages 설정
    Settings > Pages > Source > gh-pages 브랜치 설정
    
    https://username.github.io/repository-name

[> package.json](https://github.com/yi5oyu/Study/blob/main/React.js/github%20pages/package.json)

> username, repository-name 수정

## HashRouter
    npm install react-router-dom

    import { HashRouter, Routes, Route } from "react-router-dom";     

    function App() {
        return (
            <HashRouter>
            <Routes basename="/react">
                <Route path="/" element={<Home />} />
                <Route path="/Test" element={<Test />}>
                {/* <Route path=":cardId" element={<DetailCard />} /> */}
                </Route>
            </Routes>
            </HashRouter>
        );
    }

    export default App;

>

    https://yi5oyu.github.io/react
    https://yi5oyu.github.io/react/#/test

[> App.js](https://github.com/yi5oyu/Study/blob/main/React.js/github%20pages/App.js)

## 스크립트
    package.json > scripts
    
- `npm start`   
  개발 모드에서 실행(http://localhost:3000)    
  ESLint를 사용해 코드 오류 콘솔 표시

- `npm test`   
  테스트 실행    
  파일의 변경을 감지하고 관련 테스트만 실행하도록 설정

- `npm run build`   
  프로덕션용으로 빌드    
  소스 파일의 크기를 줄여 배포 시 최적화된 상태로 애플리케이션을 제공

- `npm run eject`    
  일방향 명령어(실행 후에는 되돌릴 수 없음)
   모든 설정을 직접 커스터마이즈할 수 있음(webpack, Babel, ESLint 등...)

- `npm run predeploy`    
  pm run deploy 명령어가 실행되기 전에 자동으로 실행   
  프로덕션 빌드 상태로 만들어 build 폴더에 준비

- `npm run deploy`    
  gh-pages 패키지를 사용해 GitHub Pages에 애플리케이션을 배포   
  gh-pages 브런치, build 폴더생성