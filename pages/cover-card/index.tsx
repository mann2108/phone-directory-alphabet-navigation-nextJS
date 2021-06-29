import React from 'react';

function coverCard() {
  const [touchStart, setTouchStart] = React.useState(0);
  const [touchEnd, setTouchEnd] = React.useState(0);

  const handleTouchStart = (e: any) => {
    console.log('Hello', e);
    setTouchStart(e.targetTouches[0].clientY);
  }
  const handleTouchEnd = (e: any) => {
    console.log('Hello', e);
    setTouchEnd(e.targetTouches[0].clientY);
    alert("Yes");
  };
  return (
    <div onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} style={{ height: '100vh', width: '100%', backgroundColor: 'black' }}>
    </div>
  );
}
export default coverCard;