# React + Vite

빠른 개발 속도, 최적화된 성능, 유연한 확장성을 통해 현대적이고 효율적인 웹 애플리케이션을 구축할 수 있음   
webpack과 같은 기존 번들러는 개발 서버를 시작하기 전에 전체 애플리케이션을 분석하고 번들링하므로 시작 시간이 느려짐  
Vue, Svelte 등 다양한 프레임워크를 지원, TypeScript 지원   
최신 웹 표준, SSR(서버 사이드 렌더링) 지원

### 개발 속도   
 - **개발 서버**  
    번들링없이 개발 서버 즉시 시작  
    ES 모듈(ECMAScript 모듈)을 통해 소스 파일 제공

 -  **HMR(Hot Module Replacement)**  
    런타임에 페이지 새로고침 없이 모듈을 자동으로 갱신   
    코드 변경 사항을 거의 실시간으로 반영

### 성능 최적화   
  - **최적화된 빌드**
    프로덕션 빌드에 Rollup을 사용하여 코드 분할 및 트리 쉐이킹과 같은 최적화를 제공   
  - **효율적인 번들링**
    ESBuild를 사용하여 Webpack보다 훨씬 빠른 번들링 속도를 제공


> **Rollup**  
> JavaScript 모듈 번들러 (https://rollupjs.org/)   
> 작은 코드 조각을 더 크고 효율적인 번들로 컴파일   
> 코드를 분석하고 사용되지 않는 부분을 제거(파일 크기 줄임)  
> 1. **모듈 해결**   
>    진입점이 가져오는 모든 파일 식별 추가  
>    한 모듈이 다른 모듈을 가져오는 경우 모든 파일이 수집될 때까지 계속됨
> 2. **종속성 그래프 작성**   
>    어떤 파일이 어떤 파일에 연결되어 있는지 보여주는 로드맵 생성  
>    Rollup이 모듈 간의 관계를 파악하여 최종 번들에서 올바른 순서로 정렬할 수 있도록 하는 네트워크 맵
> 3. **트리 쉐이킹**   
>    사용되지 않는 코드 제거(import/export 검사)   
>    실제로 실행되는 라이브 코드   
> 4. **최종 번들 생성**   
>    모든 조각을 단일 파일 or 몇 개의 최적화된 파일로 통합(스코프 호이스팅을 사용)   
> 5. **출력 형식**  
>    다양한 형식으로 번들 생성 가능    
>    ES 모듈(es), CommonJS(cjs), UMD(umd)
> 
> * 범위(Scope) 호이스팅    
>   호이스팅(Hoisting): 변수와 함수 선언이 그들이 속한 스코프의 최상단으로 끌어올려지는 것처럼 동작   
>   여러 모듈의 코드를 단일 함수 스코프로 병합   
>   함수 래퍼등을 제거하고 모든 것을 한 곳에서 액세스

> **ESLint**     
> JavaScript 및 React 애플리케이션의 코드 문제를 식별하고 해결하기 위한 정적 코드 분석 도구   
> 일관된 코딩 스타일을 적용하고 잠재적인 오류를 강조하여 코드 품질을 유지   
> 문법 검사, 코드 스타일, 버그 감지, 최신 ECMAScript 기능 지원

## Settings
    프로젝트 생성
     new Terminal > npm create vite@latest > 프로젝트명 
     > react > JavaScript > cd 프로젝트명(생성한 프로젝트로 이동)

    라이브러리 설치(node_modules)
    npm i
    (package.json 라이브러리 목록 다운로드)

## Example
 - [Component](#component)
 - [JSX](#jsx)
 - [props](#props)
 - [랜더링](#랜더링)
 - [React hook](#react-hook)

### Component
> root/components/ComponentExample.jsx

    컴포넌트(jsx)를 정의하는 방법

    import React, { Component } from "react";
    
    // 클래스
    class ClassComp extends Component {
    render() {
        return <p>Class</p>;
        }
    }

    // 함수
    function FunctionComp() {
        return <p>Function</p>;
    }

    // 에로우 함수
    const ArrowFunctionComp = () => {
        return <p>Arrow</p>;
    };

[> ComponentExample](https://github.com/yi5oyu/Study/blob/main/React.js/Components/ComponentExample.jsx)

#### import, export
> root/components/A.jsx

    default export or named export

    import React from 'react';
    // default export
    import ImportExport from './components/A';
    // named export
    import { A } from './components/A';

    const App = () => {
      return (
        <ImportExport />
        <A />
      );
    };
    
    export default App;

[> Import Export](https://github.com/yi5oyu/Study/blob/main/React.js/Components/A.jsx)  
[> jsx 확장자 오류](https://github.com/yi5oyu/Study/blob/main/React%20Native/Web/error/jsx%20%ED%99%95%EC%9E%A5%EC%9E%90)

### JSX
> root/components/B~C.jsx

[> 예제 B](https://github.com/yi5oyu/Study/blob/main/React.js/Components/B.jsx)  
[> 예제 C](https://github.com/yi5oyu/Study/blob/main/React.js/Components/C.jsx)

#### 규칙
    1. 하나의 엘리먼트만 반환되어야 함
    Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?
    
    <div>1</div>
    <div>2</div>
    =>
    <>
      <div>1</div>
      <div>2</div>
    </>
    
    2. 모든 태그 닫아줘야함
    Unterminated JSX contents
    
    <div><div>
    <input>
    =>
    <div></div>
    <input/>

    3. 대부분의 속성은 캐멀케이스
    HTML: background-color
    JSX: backgroundColor
    <div className="box"></div>

#### 중괄호 { }
JSX에서 중괄호를 사용하여 JavaScript를 사용할 수 있음
     
    ""를 {}로 바꿔 사용
    객체전달은 {{ ... }}를 사용해야함(JSX 중괄호 안에 있는 JS객체)

    import pic from '/assets/reactLOGO.svg';

    <img className="box" style={{width:"200px", height:"200px"}} src={pic}/>

### props
> root/components/D.jsx

컴포넌트간 데이터(문자열, 숫자, 배열, 객체, 함수 등..)/기능(이벤트 핸들러 등..) 주고 받음   
읽기 전용(변경 할 수 없음)   
defaultProps로 디폴트 값 설정할 수 있음

    function Greeting(props) {
      return <h1>Hello {props.name}</h1>;
    }

    Greeting.defaultProps = {
      name: "World"
    };

    function App() {
      return <Greeting name="Young" />;
    }

[> 예제 D](https://github.com/yi5oyu/Study/blob/main/React.js/Components/D.jsx)

#### props-types
props 타입 설정   
버그를 예방할 수 있음   
개발 모드에서만 동작함(빌드 과정에서 제거됨)   
개발자 모드의 콘솔창에서 확인 가능

    import PropTypes from 'prop-types';

    Greeting.propTypes = {
      name: PropTypes.string
    }

[> props-types 라이브러리](https://github.com/yi5oyu/Study/edit/main/React.js/%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC/props-types)

### 랜더링
> root/components/E~F.jsx

#### 조건부 랜더링

if문, &&, ? :(삼항연산자) 등으로 조건을 만들어 랜더링할 수 있음  

    function E(props){
      const ok = <h3 style={{ color:"red" }}> PW: {props.pw} </h3>
      const no = <div> no </div>

      return(props.ck ? ok : no);
    }

#### 리스트 랜더링

filter( ), map( )을 사용해 배열을 필터링하거나 매핑함  
map( )에 사용되는 엘리먼트에는 key가 반드시 필요함  
key는 고유한 값을 가져야고 변경되어선 안됨

    function F(){
      const fs = ["f","e","d","c","b","a"];
      const list = fs.map((f, index) => <div key={index}>{f}</div>);

      return(
        <div>{list}</div>
      )
    }

### React hook

> - useState( )  
> root/components/H~O.jsx   

> - useEffect( )  
> root/components/P~R.jsx

> - useContext( )  
> root/components/S~S2.jsx

> - useRef( )
> root/components/T~U.jsx

#### useState( )
상태가 변경될 때마다 다시 랜더링함

    import React, {useState} from 'react';
    
    정의
    const [count, setCount] = useState(0);
    const [현재값, 업데이트함수] = useState(초기값);

    - onClick
    const increment = () => {
      setName(c => c + 1);
    }

    <button onClick={increment}>클릭</button>

    const [count, setCount] = useState(() => {
      // 첫번째 랜더링에서만 호출됨
      return state();
    });

    - onChange
    function handleCountChange(event){
        setCount(event.target.value);
    }

    <input value={count} onChange={handleCountChange} type="number"/>
    <p>수: {count}</p>

#### useEffect( )
1. useEffect(() => { })  
   component가 랜더링될 때마다 발생하는 작업에 유용


2. useEffect(() => { }, [ ])  
   초기 렌더링 한 번만 실행 (API에서 데이터 가져오거나 이벤트 리스너 설정)


3. useEffect(() => { }, [value])  
   component가 랜더링될때와 값이 변경될 때마다 실행


    import React, {useState, useEffect} from 'react';

    const [count, setCount] = useState(0);
    
    // 랜더링될 때마다 실행   
    useEffect( ( ) => {
      document.title = `타이틀 : ${count}`;
    });

    // [ ] 초기 렌더링 후에 한 번만 실행   
    useEffect( ( ) => {
      document.title = `타이틀 : ${count}`;
    }, [ ]);

    // count가 변경될 때만 실행   
    useEffect( ( ) => {
      document.title = `타이틀 : ${count}`;
    }, [count]);

마운트(component가 DOM에 처음 추가됨) <-> 마운트 해제(component가 DOM에서 제거)   
메모리 누수 방지, 성능 최적화

    useEffect(() => {
      // 초기 랜더링 후에 이벤트리스너 등록됨
      window.addEventListener("resize", handleResize);

      return () => {
        // 마운트 해제되면 이벤트리스너 삭제
        window.removeEventListener("resize", handleResize);
      }
    }, []);

#### useContext( )
props를 대신해 createContext()와 useContext()를 사용해 값를 사용 수 있음

    - createContext() 컨텍스트 객체 생성
    import React, {useState, createContext} from 'react';

    export const AContext = createContext('a');

    const [name, setName] = useState('a');
    <AContext.Provider value={name}>
      <S1 />
    </AContext.Provider>

    - useContext() 컨텍스트 사용
    import React, { useContext } from 'react';
    import { AContext } from './S';

    const name = useContext(AContext);
    <div>{name}</div>

#### useRef()
useState()와 달리 랜더링없이 변경가능한 값을 생성하고 관리할 수 있음   
DOM 요소에 직접 접근할 수 있음

    import React, {useRef} from 'react';

    const ref = useRef(0);
    
    inputRef.current.focus();
    inputRef.current.style.background = "yellow";


## 스크립트
    package.json > scripts
    
- `npm run dev`   
  vite 개발 서버 실행(http://localhost:5173/)    
  ESLint를 사용해 코드 오류 콘솔 표시

- `npm run build`   
  프로덕션 배포용 빌드    
  dist 폴더 저장

- `npm run lint`    
  코드 스타일과 코드 품질을 검사  
  .eslintrc(eslint.config.js) 설정 커스터마이즈 가능

- `npm run preview`    
  로컬 서버로 빌드된 파일을 미리 보기(preview) 모드로 실행    
  배포된 사이트가 어떻게 동작할지 점검

  > **.eslintrc VS eslint.config.js**   
  > .eslintrc: JSON, YAML, JS 사용, 간단한 프로젝트에 적합   
  > eslint.config.js: JS사용, 복잡하거나 대규모 프로젝트에 적합(규칙 유연하게 적용 가능)