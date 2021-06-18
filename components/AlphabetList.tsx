import React, { useEffect, useState, useRef } from 'react';
import AlphabetItem from './AlphabetItem';
import Grid from '@material-ui/core/Grid';

type AlphabetListProps = {
  className: any;
  generateFn: any;
  data: Array<string>;
}

const mapArrToMap = (arr: Array<string>) => {
  const map = new Map();
  var Regx = /^[A-Za-z]$/;
  arr.forEach((item: string) => {
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

function alphabetList(props: AlphabetListProps) {
  
  const map = mapArrToMap(props.data);
  const keyArr = Array.from(map.keys());
  keyArr.sort();

  const [mapPos, setMapPos] = useState(new Map());
  const [scroller, setScroller] = useState<any>(null);
  const [activeAlphabet, setActiveAlphabet] = useState<string>('A');
  
  let scrollerDiv = useRef<HTMLDivElement | null>(null)
  
  const registerPos = (id: any, top: any) => {
    setMapPos(mapPos.set(id, top));
  }
  
  const handleAlphaClick = (char: string) => {
    setScroller((prevState: any) => {
      prevState.scrollTop = mapPos.get(char) + 1;
      return prevState;
    });
  }
  
  const handleScrollEvent = () => {
    const alphaArray: Array<[string, number]> = [];
    mapPos.forEach((value, key) => alphaArray.push([key, value]));
    let previousAlphabet = 'A';
    let isActiveAlphabetAssigned = false;
    for (let i = 0; i < alphaArray.length; i++) {
      if (scrollerDiv.current?.scrollTop && scrollerDiv.current?.scrollTop <= alphaArray[i][1]) {
        setActiveAlphabet(previousAlphabet);
        isActiveAlphabetAssigned = true;
        break;
      } else {
        previousAlphabet = alphaArray[i][0];
      }
    }
    if (!isActiveAlphabetAssigned && scrollerDiv.current?.scrollTop && scrollerDiv.current?.scrollTop >= alphaArray[25][1]) setActiveAlphabet('Z');
  }
  
  useEffect(() => {
    setScroller(scrollerDiv.current);
    handleScrollEvent();
    scrollerDiv?.current?.addEventListener('scroll', handleScrollEvent);
  }, []);

  return (
    <Grid container
      className={props.className}
      style={{
        position: 'absolute',
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
                    map.get(char).map((item: string, index: number) => {
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
                { item !== activeAlphabet ? item : <b>{item}</b> }
              </div>
            )
          })
        }
      </Grid>
    </Grid>
  );
}
export default alphabetList;
