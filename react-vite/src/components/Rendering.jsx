function Rendering({ judge, name, array }) {
  return (
    <div>
      {/* 조건부 렌더링 */}
      {judge ? <h1>A</h1> : <h1>B</h1>}
      {judge ? <div>A</div> : <div>B</div>}
      {name === "A" ? <p>A</p> : name === "B" ? <p>B</p> : <p>none</p>}
      {judge && <h2>C</h2>}
      {name || <p>{name}</p>}
      {name ?? <p>{name}</p>}
      {name && <p>{name}</p>}
      {/* 리스트 렌더링 */}
      {array
        .filter((arr) => arr.id)
        .map((arr, index) => (
          <div key={index}>
            {index} : <input placeholder={String(arr.name)} />
          </div>
        ))}
    </div>
  );
}

export default Rendering;
