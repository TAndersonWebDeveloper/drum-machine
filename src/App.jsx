import { GlobalStyle } from "./globalStyles";
import styled from "styled-components";
import { keys } from "./keys";
import DrumPadButton from "./DrumPadButton";
import Title from "./Title";
import { createContext, useState } from "react";

const DrumContainer = styled.div`
  width: 700px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 5px solid red;
  background-color: #bbb;
`;

const Display = styled.div`
  width: 250px;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: #222;
`;
export const KeyContext = createContext();
function App() {
  const [activeKey, setActiveKey] = useState(null);

  return (
    <KeyContext.Provider
      value={{
        activeKey,
        setActiveKey,
      }}
    >
      <GlobalStyle />
      <Container>
        <DrumContainer id="drum-machine">
          <Display id="display">
            {keys.map((key) => {
              return (
                <DrumPadButton
                  key={key.name}
                  keykey={key.key}
                  keyCode={key.keyCode}
                  url={key.url}
                  name={key.name}
                />
              );
            })}
          </Display>
          <Title activeKey={activeKey} />
        </DrumContainer>
      </Container>
    </KeyContext.Provider>
  );
}

export default App;
