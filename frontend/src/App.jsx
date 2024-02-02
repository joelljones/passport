// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css';
import CreatePost from './components/CreatePost';
import Posts from './components/Posts';
import Sidebar from './components/Sidebar';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex w-screen md:w-full px-4 justify-center h-screen overflow-hidden">
        <Sidebar />
        <div className="flex flex-col md:w-[500px] lg:w-[672px] m-2 space-y-4 overflow-y-auto">
          <CreatePost />
          <Posts />
        </div>
      </div>
      {/* <div>
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
      </p> */}
    </>
  );
}

export default App;
