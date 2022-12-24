import React from "react";
import Cat from "../Cat"

function List({ cats, heading, setter }) {

  function generateCats() {
    return cats.map(cat => (
      <Cat
        cats={cats}
        setter={setter}
        key={cat.id}
        name={cat.name}
        color={cat.color}
        collar={cat.hasCollar}
        age={cat.age}
        isHungry={cat.isHungry}
        id={cat.id}
      />
    ))
  }



  return (
    <div
      className="m-auto p-7 w-5/12 border border-black border-solid rounded-md flex flex-col items-center"
    >
      <h1 className="font-bold text-3xl" >{heading}</h1>
      {generateCats()}
    </div>
  );
}

export default List;