import React from "react";




function Cat({ name, age, color, collar, isHungry, hungerTime, id, cats, setter }) {
  function clickHandle() {
    const newCats = cats.map(cat => {
      if (cat.id === id) {
        const currentTime = new Date().getTime();
        cat.isHungry = false;
        cat.hungerTime = currentTime + 30000;
      }
      return cat;
    })
    setter(newCats)
  }

  return (
    <div
      className="w-80 h-8 m-4 border-b-2 flex justify-between"
    >
      <div className="flex flex-col">
        <p>{name}{collar && ' + Collar'}: {age}y.o.</p>
        <div className="w-10 h-2" style={{ background: color }}></div>
      </div>
      <div>
        {isHungry ? <button className='w-24 border' onClick={clickHandle}
        >Feed</button> : null}
      </div>
    </div>
  );
}

export default Cat;