import "./App.css";
import Comment from "./components/Comment";
import Reply from "./components/Reply";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Comment />
        <Reply />
      </div>
    </div>
  );
}

export default App;
