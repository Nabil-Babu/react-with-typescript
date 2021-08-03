import { useState } from "react";
import "./App.css";
import AddToList from "./components/AddToList";
import List from "./components/List";

export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Nabil Babu",
      age: 30,
      url: "https://media-exp1.licdn.com/dms/image/C4E03AQEgcfP2e2r-kA/profile-displayphoto-shrink_200_200/0/1603370850005?e=1632960000&v=beta&t=RaZmT38IElEU-wSWTaCBvlH_-1aXbV1qH1aBuf7zPoM",
      note: "hot af",
    },
  ]);

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
