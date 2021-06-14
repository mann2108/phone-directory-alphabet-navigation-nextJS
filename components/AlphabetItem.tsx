import React, { useEffect, useState } from 'react';

type AlphabetItemProps = {
  id: String;
  children: [];
  registerPos: any;
}

function alphabetItem(props: AlphabetItemProps) {
  let [fix] = useState<HTMLDivElement | null>(null);
  useEffect(() => {
    props.registerPos(props.id, fix?.offsetTop)
  }, []);
  const alphabetData: any = [];
  props.children.forEach((data: any) => {
    alphabetData.push(
      <div>
        {data.props.children}
        <hr style={{ width: '50%', marginLeft: 0}}/>
      </div>)
  });
  return <div
    style={{
      textAlign: 'left',
    }}
    ref={(ref: HTMLDivElement) => {
      fix = ref;
    }}
  >
    <div
      style={{
        marginTop: 4,
        marginBottom: 8,
      }}
    >
      {alphabetData}
    </div>
  </div>
}
export default alphabetItem;