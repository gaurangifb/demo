//fragment or div in return to wrap everything
//import { MouseEvent } from "react";

import { useState } from "react";


//{items: [], heading: string}
interface Props {
  items: string[];
  heading: string;
  // (item: string) => void
  onSelectItem: (item: string) => void; // onClick
}

function ListGroup( {items, heading, onSelectItem}: Props ) {

  //state hook: tell react that this component has data or state that will change over time
  const [selectedIndex, setSelectedIndex] = useState(-1); //state variable, set function

  /////////////////////////////
  //Event handler: click event
  // const handleClick = (event: MouseEvent) => {
  //   console.log(event);
  // }
  //{items.length===0 ? <p>No item found</p> : null}
  //each component has its own state

  return (
    <>
      <h1>{heading}</h1>

      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index); //just passing reference, not calling
              onSelectItem(item);
            }} 
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
