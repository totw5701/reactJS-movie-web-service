import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("created :>");
    return () => console.log("destroyed :<"); 
    /* 
      Cleanup function : component가 없어질 때(unmount될 때) 실행되는 function.
      useEffect(f, array)의 f의 리턴함수로 받는다.
      메모리 누수를 방지하기위해 말그대로 clean up을 위해 사용되는 경우가 많다.

    */
  }, []);
  return <h1>Hello</h1>
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);

  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "HIDE" : "SHOW"}</button>
    </div>
  );
}

export default App;
