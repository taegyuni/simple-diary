const DiaryList = ({diaryList}) => {
  console.log(diaryList)
  return (
    <div classname="DiaryList">
      <h2>일기 리스트</h2>
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>
      <div>
        {diaryList.map((it) => (
          <div>
            <div>작성자 : {it.author}</div>
            <div>일기 : {it.content}</div>
            <div>감정 : {it.emotion}</div>
            <div>작성시간 : {it.created_date}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
DiaryList.defaultProps={
  diaryList: [],
}

export default DiaryList;
