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
        color: 'white',
      }}
    >
      { props.children }
    </div>
  </div>
}
export default alphabetItem;