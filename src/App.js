import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { getName, getColor, getAge } from "./utils";
import List from "./components/List";

function App() {
  const [cats, setCats] = useState([]);
  const [neighbourCats, setNeighbourCats] = useState([])

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newCat = {
        name: getName(),
        color: getColor(),
        age: getAge(),
        id: nanoid(),
        hasCollar: Math.random() >= 0.5,
        isHungry: false,
        hungerTime: new Date().getTime() + 30000,
      }

      if (newCat.hasCollar) {
        setNeighbourCats(prev => [...prev, newCat])
      } else {
        setCats(prev => [...prev, newCat])
      }
    }, 5000)

    return () => clearInterval(intervalId)
  }, [])


  function updateHungerTime() {
    const currentTime = new Date().getTime();
    setCats(prev => {
      return prev.map(cat => {
        if (currentTime >= (cat.hungerTime)) {
          cat.isHungry = true;
        }
        return cat;
      }).filter(cat => {
        const latestTimeToFeed = cat.hungerTime + 5000;
        return currentTime < latestTimeToFeed
      });
    })

    setNeighbourCats(prev => {
      return prev.map(cat => {
        if (currentTime >= (cat.hungerTime)) {
          cat.isHungry = true;
        }
        return cat;
      }).filter(cat => {
        const latestTimeToFeed = cat.hungerTime + 5000;
        return currentTime < latestTimeToFeed
      });
    })

  }

  useEffect(() => {
    const interId = setInterval(() => {
      updateHungerTime()
      return () => clearInterval(interId)
    }, 1000)
  }, [])

  return (
    <div className="flex">
      <List cats={cats} setter={setCats} heading="First List" />
      <List cats={neighbourCats} setter={setNeighbourCats} heading="Neighbor's List" />
    </div>
  );
}

export default App;
