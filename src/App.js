import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

const dummyList = [{
  id : 1,
  author:"태균",
  content:"하이",
}];
function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList />
    </div>
  );
}

export default App;
