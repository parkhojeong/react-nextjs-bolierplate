# Jebs admin
React, Nextjs 기반으로 작성되는 Jebs admin

## How to run
### node, npm version
- node 16.13.0
- npm 8.1.0

### App 실행
* local, dev
```shell
npm run dev
```

* production
```shell
npm run build
npm run start # port 3000
```

## Code Convention
### Dir 구조
```text
- root
|- components
|  # 도메인이나 역할 분류에 따라 디렉토리 생성
|  # 디렉토리는 lower Camel Case, 컴포넌트는 Upper Camel Case
|- constants
|  # 공통 readonly 상수
|- pages
|  # route 구조에 따라 생성
|- public
|  # static 파일(이미지 등)
|- utils
|  # 각종 유틸 로직 (mappers, types 등등)
```

### 컴포넌트 내부 Container, Wrapper 사용규칙
- Container
  - 컴포넌트 내부 최상단 엘레먼트만 Container라는 이름을 가질 수 있음
  ```tsx
  // Bad Case
  function BadCase(): JSX.Element {
    return (
      <div>
        <Container></Container>
      </div>
    )
  }
  // Good Case
  function GoodCase(): JSX.Element {
    return (
      <Container>
        <div></div>
      </Container>
    )
  }
  ```

- Wrapper
  - Container 내부에서 컴포넌트를 감싸는 용도로 사용된다
   ```tsx
  // Bad Case
  function BadCase(): JSX.Element {
    return (
      <Wrapper>
        <Container>
          <div></div>
        </Container>
      </Wrapper>
    )
  }
  // Good Case
  function GoodCase(): JSX.Element {
    return (
      <Container>
        <TitleWrapper>
          <h1></h1>
        </TitleWrapper>
        <ContentWrapper>
          <article></article>
        </ContentWrapper>
      </Container>
    )
  }
   ```