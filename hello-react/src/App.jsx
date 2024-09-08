import TaskCard from "./TaskCard";


function App(){

  return(
    
    <div>
      <div>
        <h1>pending</h1>
        <TaskCard title = "Build the webste with static content"
        dueDate="10th april"
        assigneeName="Rohit S"
        
        />
        <TaskCard title="Add a Blog"
        dueDate="22nd March"
        assigneeName="Rohit M"
        
        
        />
        
        
      
       
      </div>
      <div>
        <h1>Done</h1>
        <TaskCard title="Design the mockup"
        completedAtDate="10th april"
        assigneeName="Rohit M"
        />
        <TaskCard title="Get the approval from Principal"
         completedAtDate="20th april"
        assigneeName="Ajay S"
        
        />
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
