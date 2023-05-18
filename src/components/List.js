export default function List({props, click}) {

  return (
    <>
      <ul>{props.map((item) => (
          <li id={item.id} key={item.id} onClick={click} className="list-item">{item.name}</li>
        ))}
      </ul>
    </>
  );
}
