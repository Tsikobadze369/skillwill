import React from "react";
import Card from "./Card";
import Balzac from "../assets/Shagreen leather.webp";
import Bulgakov from "../assets/The Master and Margarita.webp";
import Wilde from "../assets/The Picture of Dorian Gray.webp";
import Stendhal from "../assets/The Red and the Black.webp";

const CardList = () => {
  function action(name) {
    alert(`Book's name is ${name}`);
  }
  return (
    <div className="card-list">
      <Card
        name="Shagreen leather"
        description="Shagreen has an unusually rough and granular surface, and is sometimes used as a fancy leather for book bindings, pocketbooks and small cases, as well as its more utilitarian uses in the hilts and scabbards of swords and daggers, where slipperiness is a disadvantage."
        characters={["teacher ", "student ", "Foedora "]}
        image={Balzac}
        action={action}
      />
      <Card
        name="The Master and Margarita"
        description="The story concerns a visit by the devil and his entourage to the officially atheistic Soviet Union. The devil, manifested as one Professor Woland, challenges the Soviet citizens' beliefs towards religion and condemns their behavior throughout the book."
        characters={["Margarita ", "The Master", "Woland", "Behemoth"]}
        image={Bulgakov}
        action={action}
      />
      <Card
        name="The Picture of Dorian Gray"
        description="It tells the story of Dorian Gray, a wealthy young Englishman who prizes his looks and his youth above all else. The basic plot of the novel is as follows: Dorian has his portrait painted as a young man. The portrait takes on Dorian's sins and his signs of aging."
        characters={["Lord Henry Wotton", "Basil Hallward", "Sibyl Vane"]}
        image={Wilde}
        action={action}
      />
      <Card
        name="The Red and the Black"
        description="The Red and the Black, novel by Stendhal, published in French in 1830 as Le Rouge et le noir. The novel, set in France during the Second Restoration (1815–30), is a powerful character study of Julien Sorel, an ambitious young man who uses seduction as a tool for advancement."
        characters={["Julien Sorel", "Mathilde de la Mole", "Napoleon"]}
        image={Stendhal}
        action={action}
      />
    </div>
  );
};

export default CardList;
