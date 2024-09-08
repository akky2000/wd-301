import TaskCard from "./TaskCard";


function App(){

  return(
    
    <div>
      <div>
        <h1>pending</h1>
        <TaskCard title = "Build the webste with static content"/>
        <TaskCard title="Add Blog"/>
      
       
      </div>
      <div>
        <h1>Done</h1>
        <TaskCard/>
        <TaskCard/>
      
    </div>
    </div>
  );
}




/*
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

*/
export default App;
