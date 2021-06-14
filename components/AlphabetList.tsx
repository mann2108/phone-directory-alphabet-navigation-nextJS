import React, { useState } from 'react';
import AlphabetItem from './AlphabetItem';

const mapArrToMap = (arr: any) => {
  const map = new Map();
  var Regx = /^[A-Za-z]$/;
  arr.forEach((item: any) => {
    let firstChar = item[0];
    if (!Regx.test(firstChar)) {
      firstChar = '#'
    } else {
      firstChar = firstChar.toUpperCase();
    }
    if (map.get(firstChar) == null) {
      map.set(firstChar, [item]);
    } else {
      const arr = map.get(firstChar);
      arr.push(item);
      map.set(firstChar, arr)
    }
  })
  return map;
}

function alphabetList(props: any) {
  const [mapPos, setMapPos] = useState(new Map());
  const [scroller, setScroller] = useState<any>(null);
  const registerPos = (id: any, top: any) => {
    setMapPos(mapPos.set(id, top));
  }
  const handleAlphaClick = (char: any) => {
    setScroller(scroller.scrollTop = mapPos.get(char));
  }
  const map = mapArrToMap(props.data);
  const keyArr = Array.from(map.keys())
  keyArr.sort();
  return (
    <div
      className={props.className}
      style={{
        position: 'absolute',
        ...(props.style ? props.style : {})
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          overflow: 'auto',
          paddingRight: 12,
        }}
        ref={(ref) => { setScroller(ref) }}
      >
        {
          keyArr.map((char) => {
            if (map.get(char) != null) {
              return (
                <AlphabetItem
                  id={`${char}`}
                  key={char}
                  registerPos={registerPos}
                >
                  {
                    map.get(char).map((item: any, index: any) => {
                      return props.generateFn(item, index);
                    })
                  }
                </AlphabetItem>
              )
            }
          })
        }

      </div>
      <div
        style={{
          position: 'absolute',
          top: 12,
          right: 12,
          color: '#AAA'
        }}
      >
        {
          keyArr.map(item => {
            return (
              <div
                key={item}
                style={{
                  fontSize: 9.5,
                  verticalAlign: 'top',
                  cursor: 'pointer',
                  color: '#AAA'
                }}
                onClick={() => { handleAlphaClick(item) }}
              >
                {item}
              </div>
            )
          })
        }
      </div>
    </div>

  );
}
export default alphabetList;
