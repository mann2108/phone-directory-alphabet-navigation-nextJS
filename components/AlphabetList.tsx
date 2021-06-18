import React, { useEffect, useState, useRef } from 'react';
import AlphabetItem from './AlphabetItem';
import Grid from '@material-ui/core/Grid';
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
  const [activeAlphabet, setActiveAlphabet] = useState<string>('');
  let scrollerDiv = useRef<HTMLDivElement | null>(null)
  const registerPos = (id: any, top: any) => {
    setMapPos(mapPos.set(id, top));
  }
  const handleAlphaClick = (char: any) => {
    setScroller((prevState: any) => {
      prevState.scrollTop = mapPos.get(char);
      return prevState;
    });
  }
  useEffect(() => {
    setScroller(scrollerDiv.current);
    scrollerDiv?.current?.addEventListener('scroll', () => {
      console.log(scrollerDiv.current?.scrollTop);
      const alphaArray: Array<[string, number]> = [];
      mapPos.forEach((value, key) => alphaArray.push([key, value]));
      for (let i = 0; i < alphaArray.length; i++) {
        if (scrollerDiv.current?.scrollTop && scrollerDiv.current?.scrollTop <= alphaArray[i][1]) {
          setActiveAlphabet(alphaArray[i][0]);
          console.log('Mann', alphaArray[i][0]);
          break;
        } 
      }
      console.log(activeAlphabet);
    });
  }, []);
  const map = mapArrToMap(props.data);
  const keyArr = Array.from(map.keys());
  keyArr.sort();
  return (
    <Grid container
      className={props.className}
      style={{
        position: 'absolute',
        ...(props.style ? props.style : {})
      }}
    >
      <Grid
        item
        style={{
          width: '100%',
          height: '100%',
          overflow: 'auto',
          paddingRight: 12,
        }}
        ref={scrollerDiv}
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
      </Grid>
      <Grid
        item
        style={{
          position: 'absolute',
          top: 12,
          right: 9,
          color: '#AAA'
        }}
      >
        {
          keyArr.map(item => {
            return (
              <div
                key={item}
                style={{
                  fontSize: 22,
                  verticalAlign: 'top',
                  cursor: 'pointer',
                  color: '#000'
                }}
                onClick={() => { handleAlphaClick(item) }}
              >
                {item}
              </div>
            )
          })
        }
      </Grid>
    </Grid>
  );
}
export default alphabetList;
