import React, { useEffect, useState }  from "react";
import AlphabetList from "../components/AlphabetList";

function generateRandomName(): string {
  const charArr =
    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
      'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
      'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
      'y', 'z'];
  let randomName = '';
  for (let i = 0; i < Math.floor(Math.random() * 8) + 1; i++) {
    randomName += charArr[Math.floor(Math.random() * 26)];
  }
  return randomName;
}

export default function Home() {
  const [data, setData] = useState<Array<string>>([]);
  useEffect(() => {
    for (let i = 0; i < 1000; i++) {
      setData((previousData: string[]) => {
        previousData.push(generateRandomName());
        return previousData
      });
    }
  }, []);
  return (
    <div>
      <AlphabetList
        className="alpha-list"
        style={{
          width: "550px",
          height: "100%",
          padding: "4px",
          marginLeft: "10%"
        }}
        generateFn={(item: any, index: any) => {
          return (
            <div>{ item }</div>
          );
        }}
        data={data}
      />
    </div>
  )
}
