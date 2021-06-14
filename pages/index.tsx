import AlphabetList from "../components/AlphabetList";

export default function Home() {
  return (
    <div>
      <AlphabetList
        className="alpha-list"
        style={{
          width: "350px",
          height: "400px",
          backgroundColor: "#222",
          padding: "4px"
        }}
        generateFn={(item: any, index: any) => {
          return (
            <div>{ item }</div>
          );
        }}
        data={['a', 'b', 'c', 'aa', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'V', 'w', 'x', 'Y', 'z']}
      />
    </div>
  )
}
