import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("always run");
  // useEffect : 첫 로딩, 그리고 2번째 parameter에 들어가는 state가 변했을 때만 render한다.
  useEffect(() => { 
    console.log("I run only once.");
  }, []);
  useEffect(() => {
    console.log("I run when 'keyword' changes", keyword);
  }, [keyword]); 
  useEffect(() => {
    console.log("I run when 'counter' changes");
  }, [counter]); 
  return (
    <div>
      <input onChange={onChange} type="text" placeholder="Search here..." />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
