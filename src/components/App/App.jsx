import { WORLD_STATES } from "@utils/constants";
import { Button } from "antd";
import { useState } from "react";
import { Hedgehog } from "../LivingBeings/Hedgehog";
import "./App.scss";
import { Tree } from "../LivingBeings/Tree";

function App() {
  const worldStates = Object.entries(WORLD_STATES);

  const [worldState, setWorldState] = useState(2);

  return (
    <>
      <header>спаси ежа</header>
      <Hedgehog size={200} state={worldState} />
      <Tree size={190} state={worldState} />
      <br />
      {worldStates.map(([id, worldState]) => {
        return (
          <Button
            onClick={() => {
              setWorldState(id);
            }}
          >
            {worldState}
          </Button>
        );
      })}
    </>
  );
}

export default App;
