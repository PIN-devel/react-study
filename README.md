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

#### [Reconciliation](https://ko.reactjs.org/docs/reconciliation.html)

#### useState Lazy initilize

```js
const [state, setState] = useState(() => window.localStorage.get("key"));
```

#### Hook Flow

useEffect -> render 후

update시 : clean up(return) -> useEffect

부모 render -> 자식 render -> 자식 useEffect -> 부모 useEffect

#### useRef

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

      const App = () => {
        const inputRef = React.useRef();
        const divRef = React.useRef();

        React.useEffect(() => {
          inputRef.current.focus();
          setTimeout(() => {
            divRef.current.style.backgroundColor = "pink";
          }, 1000);
        }, []);

        return (
          <>
            <input ref={inputRef} />
            <div
              ref={divRef}
              style={{ height: 100, width: 300, backgroundColor: "brown" }}
            />
          </>
        );
      };

      ReactDOM.render(<App />, rootElement);
    </script>
  </body>
</html>
```

#### Form

> validation 체크 -> onChange에서

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Static Template</title>
  </head>
  <body>
    <div id="root"></div>
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
    <script type="text/babel">
      const root = document.getElementById("root");

      const App = () => {
        const handleSubmit = (event) => {
          event.preventDefault();
          console.dir(event.target.elements);
          alert(`${event.target.elements.name.value}`);
        };
        return (
          <form onSubmit={handleSubmit}>
            <div className="form-example">
              <label htmlFor="name">Enter your name: </label>
              <input type="text" id="name" />
            </div>
            <div className="form-example">
              <label htmlFor="email">Enter your email: </label>
              <input type="email" id="email" />
            </div>
            <div className="form-example">
              <input type="submit" value="Subscribe!" />
            </div>
          </form>
        );
      };
      ReactDOM.render(<App />, root);
    </script>
  </body>
</html>
```

#### Error

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Static Template</title>
  </head>
  <body>
    <div id="root"></div>
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
    <script type="text/babel">
      const root = document.getElementById("root");

      class ErrorBoundary extends React.Component {
        state = { error: null };
        static getDerivedStateFromError(error) {
          return { error };
        }

        render() {
          const { error } = this.state;
          if (error) {
            return <this.props.fallback error={error} />;
          }
          return this.props.children;
        }
      }

      const Fallback = ({ error }) => {
        alert(error.message);
        return <p>There is some Error...</p>;
      };

      const Child = () => {
        throw new Error("child error");
        return <p>child</p>;
      };

      const App = () => {
        return (
          <>
            <p>App</p>
            <ErrorBoundary fallback={Fallback}>
              <Child />
            </ErrorBoundary>
          </>
        );
      };
      ReactDOM.render(<App />, root);
    </script>
  </body>
</html>
```

#### todo list

> key 값을 주면 탭 포커스가 그대로임

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Static Template</title>
  </head>
  <body>
    <div id="root"></div>
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
    <script type="text/babel">
      const root = document.getElementById("root");

      const items = [
        [
          { id: 1, value: "todo1" },
          { id: 2, value: "todo2" },
          { id: 3, value: "todo3" },
          { id: 4, value: "todo4" },
          { id: 5, value: "todo5" },
        ],
        [
          { id: 4, value: "todo4" },
          { id: 1, value: "todo1" },
          { id: 2, value: "todo2" },
          { id: 5, value: "todo5" },
          { id: 3, value: "todo3" },
        ],
        [
          { id: 3, value: "todo3" },
          { id: 1, value: "todo1" },
          { id: 4, value: "todo4" },
          { id: 2, value: "todo2" },
          { id: 5, value: "todo5" },
        ],
        [
          { id: 2, value: "todo2" },
          { id: 1, value: "todo1" },
          { id: 3, value: "todo3" },
          { id: 4, value: "todo4" },
          { id: 5, value: "todo5" },
        ],
      ];

      const App = () => {
        const [todos, setTodos] = React.useState(items[0]);

        React.useEffect(() => {
          const interval = setInterval(() => {
            const random = Math.floor(Math.random() * 4);
            setTodos(items[random]);
          }, 1000);
          return () => {
            clearInterval(interval);
          };
        }, []);

        const handleClick = (todo) => {
          setTodos((todos) =>
            todos.filter((el) => {
              return el !== todo;
            })
          );
        };

        const handleRestoreClick = () => {
          setTodos((prev) => [
            ...prev,
            todos.find((item) => !prev.includes(item)),
          ]);
        };

        return (
          <>
            {todos.map((todo) => (
              <div key={todo.id}>
                <button onClick={() => handleClick(todo)}>{todo.value}</button>
              </div>
            ))}
            <button onClick={handleRestoreClick}>Restore</button>
          </>
        );
      };
      ReactDOM.render(<App />, root);
    </script>
  </body>
</html>
```

#### Fetch

```html

```
