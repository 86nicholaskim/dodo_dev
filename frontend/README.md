# dodo

## dodo start~!

## 개발환경 설정

### 1. 프론트엔드

- Node.js 설치 및 npm 등 설치

  - Node.js

    - 설치주소 : https://nodejs.org/ko/

    - 업데이트

  ```
  node -v  //현재 Node.js버전 확인
  sudo npm cache clean -f //강제로 캐시 삭제
  sudo npm install -g n  // n 모듈 설치
  sudo n stable // 다른 버전 설치하려면 sudo n 5.11.0 이런식
  -node -v //새로운 버전 확인
  ```

  - npm

    - 업데이트

  ```
  npm -v // 현재 npm 버전 확인
  sudo npm install -g npm //npm으로 npm 설치
  npm -v //새로운 npm 확인
  ```

- 패키지설치

  ```
  npm i react react-dom
  npm i -D webpack webpack-cli html-webpack-plugin webpack-dev-server
  npm i -D babel-loader @babel/core @babel/preset-env @babel/preset-react
  npm i dotenv-webpack
  ```

  - `react`, `react-dom`: React 개발에 필요한 필수 패키지

  - `webpack`: Webpack(웹팩) 라이브러리

  - `webpack-cli`: Webpack(웹팩)을 명령어로 조작하기 위한 라이브러리

  - `html-webpack-plugin`: Webpack(웹팩)에서 HTML을 다루기 위한 플러그인

  - `webpack-dev-server`: Webpack(웹팩)으로 로컬에서 개발하기 위한 테스트 서버

  - `babel-loader`: Webpack(웹팩)에서 babel(바벨)을 다루기 위한 라이브러리

  - `@babel/core`: babel(바벨)로 컴파일하기 위한 라이브러리

  - `@babel/preset-env`: babel(바벨)로 컴파일시 어떤 타겟으로 지정할지 설정하는 라이브러리

  - `@babel/preset-react`: React(리액트)를 babel(바벨)로 컴파일하기 위한 라이브러리

  - `dotenv-webpack`:Node의 환경변수에 접근하기 위한 플러그인. `.env`파일의 정보를 읽어와 변수에 담아 사용

- typescript 설치

```
Win
npm install –g typescript //현재 컴퓨터에 설치
npm install typescript //로컬로 설치(현재 위치의 폴더에 설치)

Mac os
$ sudo npm install -g typescript //현재 컴퓨터에 설치
$ sudo npm install typescript //로컬로 설치(현재 위치의 폴더에 설치)

(버전확인)
tsc -v
```

### 2. 백엔드
