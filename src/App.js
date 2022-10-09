import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

const dummyList = [{
  id : 1,
  author:"태균",
  content:"하이 1",
  emotion:5,
  created_date: new Date().getTime()
},
{
  id : 2,
  author:"명훈",
  content:"하이 2",
  emotion:4,
  created_date: new Date().getTime()
},
{
  id : 3,
  author:"솔",
  content:"하이 3",
  emotion:2,
  created_date: new Date().getTime()
},
{
  id : 4,
  author:"영희",
  content:"하이 4",
  emotion:3,
  created_date: new Date().getTime()
}
];

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList}/>
    </div>
  );
}

export default App;