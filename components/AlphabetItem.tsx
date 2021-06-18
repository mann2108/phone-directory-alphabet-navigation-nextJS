import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';

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
  props.children.forEach((data: any, index: any) => {
    alphabetData.push(
      <div key={index}>
        {data.props.children}
        <hr style={{ width: '90%', marginLeft: 0}}/>
      </div>)
  });
  return <div
    ref={(ref: HTMLDivElement) => {
      fix = ref;
    }}
  >
    {alphabetData} 
  </div>
}
export default alphabetItem;