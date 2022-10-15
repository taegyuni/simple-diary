import React, { useEffect, useState } from 'react';

//컴포넌트 재사용 React.memo를 사용
// 둘이 동시에 랜더링 되는것을 막음

const CounterA = React.memo(({ count }) => {
  useEffect(() => {
    console.log(`Counter A update ${count}`);
  });
  return <div>{count}</div>;
});
const CounterB = ({ obj }) => {
  useEffect(() => {
    console.log(`Counter B update ${obj.count}`);
  });
  return <div>{obj.count}</div>;
};

const areEqual = (prevProps, nextProps) => {
  if (prevProps.obj.count === nextProps.obj.count) {
    return true; //이전 pros와 현재 pros가 같다., -> 리렌더링을 일으키지 않게된다.
  }
  return false; // 이전 pros와 현재 pros가 다르다., -> 리렌더링 된다.
};

// MemoizedCounterB는 areEqual의 결과에 따라서 CounterB가 리렌더 할지말지 결정한다.
const MemoizedCounterB = React.memo(CounterB, areEqual);

const OptimizeTest = () => {
  const [count, setCount] = useState(1);
  const [obj, setObj] = useState({ count: 1 });
  return (
    <div style={{ padding: 50 }}>
      <div>
        <h2>counter A</h2>
        <CounterA count={count} />
        <button onClick={() => setCount(count)}>A button</button>
      </div>
      <div>
        <h2>counter B</h2>
        <MemoizedCounterB obj={obj} />
        <button onClick={() => setObj({ count: obj.count })}>B button</button>
      </div>
    </div>
  );
};
export default OptimizeTest;
