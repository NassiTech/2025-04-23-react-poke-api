import "./App.css";
import { useState, useEffect } from "react";
import Listing from "./components/Listing";

import Navbar from "./components/Navbar";

function App() {
  const [count, setcount] = useState(1);

  useEffect(() => {
    console.log("Hello from UE", { count });
  }, [count]);

  const houses = [
    {
      id: 1,
      Name: "My first house",
      Price: "35000",
      image:
        "https://www.hanse-haus.de/fileadmin/_processed_/8/b/csm_fertighaus-variant-25-192-hero_bc4464687c.jpg",
    },
    {
      Id: 2,
      Name: "My second house",
      Price: "125.000",
      image:
        "https://www.tc.de/Resources/Public/_processed_/6/9/csm_ext-einfamilienhaus-flair-134-gardenview2-2024-01-31-131100-w1600-q70_acdd41d4ac.webp",
    },
    {
      Id: 3,
      Name: "Mein third house",
      Price: "100.000",
      image:
        "https://www.tc.de/Resources/Public/_processed_/6/9/csm_ext-einfamilienhaus-flair-134-gardenview2-2024-01-31-131100-w1600-q70_acdd41d4ac.webp",
    },
    {
      Id: 4,
      Name: "Mein fourth house",
      Price: "150.000",
      image:
        "https://www.tc.de/Resources/Public/_processed_/6/9/csm_ext-einfamilienhaus-flair-134-gardenview2-2024-01-31-131100-w1600-q70_acdd41d4ac.webp",
    },
    {
      Id: 5,
      Name: "Mein fifth house",
      Price: "200.000",
      image:
        "https://www.tc.de/Resources/Public/_processed_/6/9/csm_ext-einfamilienhaus-flair-134-gardenview2-2024-01-31-131100-w1600-q70_acdd41d4ac.webp",
    },
    {
      Id: 6,
      Name: "Mein sixth house",
      Price: "250.000",
      image:
        "https://www.tc.de/Resources/Public/_processed_/6/9/csm_ext-einfamilienhaus-flair-134-gardenview2-2024-01-31-131100-w1600-q70_acdd41d4ac.webp",
    },
  ];

  return (
    <>
      <Navbar></Navbar>
      <div className="HouseContainer">
        {houses.slice(0, count).map((house) => (
          <Listing
            key={house.Id}
            Name={house.Name}
            Price={house.Price}
            image={house.image}
          ></Listing>
        ))}
        <button onClick={() => setcount(count + 1)}>Show more</button>
      </div>
    </>
  );
}
export default App;
