# react-study

## 22.07.25

<hr/>

#### DOM (Document Object Model,문서 객체 모델)

> - 브라우저가 이해하는 element의 원형(메모리에 웹페이지 문서 구조를 표현)

#### CDN (Content Delivdry Network)

> - 브라우저가 이해하는 element의 원형(메모리에 웹페이지 문서 구조를 표현)

#### React CDN

```html
<!DOCTYPE html>
<html>
  <body>
    <script
      crossorigin
      src="https://unpkg.com/react@17/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"
    ></script>
    <div id="root"></div>
    <script>
      const rootElement = document.getElementById("root");
      const reactElement = React.createElement("h1", {
        children: "Hello, React!",
        className: "title",
      });
      // const reactElement = React.createElement("h1", null, "Hello, React!");
      ReactDOM.render(reactElement, rootElement);
    </script>
  </body>
</html>
```

#### JSX

```javascript
const element = <h1>Hello React!</h1>;
```

> 위 jsx에 Babel을 사 용하면
>
> ```javascript
> "use strict";
>
> const element = /*#__PURE__*/ React.createElement("h1", null, "Hello React!");
> ```
>
> 이렇게 바뀜

```html
<!DOCTYPE html>
<html lang="en">
  <body>
    <script
      crossorigin
      src="https://unpkg.com/react@17/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/@babel/standalone/babel.min.js"
    ></script>
    <div id="root"></div>
    <script type="text/babel">
      const rootElement = document.getElementById("root");
      const props = { className: "tite", children: "Hello, React!!" };
      const reactElement = <h1 {...props} />;
      ReactDOM.render(reactElement, rootElement);
    </script>
  </body>
</html>
```

#### 응용

```html
<!DOCTYPE html>
<html lang="en">
  <body>
    <script
      crossorigin
      src="https://unpkg.com/react@17/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/@babel/standalone/babel.min.js"
    ></script>
    <div id="root"></div>
    <script type="text/babel">
      const Paint = ({ title, description }) => (
        <>
          <h1>{title}</h1>
          <h3>{description}</h3>
        </>
      );

      const reactElement = (
        <>
          <Paint title="title1" description="description1" />
          <Paint title="title2" description="description2" />
          <Paint title="title3" description="description3" />
        </>
      );

      const rootElement = document.getElementById("root");
      ReactDOM.render(reactElement, rootElement);
    </script>
  </body>
</html>
```
