import { GlobalStyle } from "./globalStyles";
import styled from "styled-components";

const DrumContainer = styled.div``;

const Display = styled.div``;

const DrumPad = styled.div``;

const Container = styled.div``;

function App() {
  const handleClick = (e) => {
    const audio = document.getElementById(e.target.innerText);
    audio.play();
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <DrumContainer id="drum-machine">
          <Display id="display">
            <DrumPad
              id="Q"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
              className="drum-pad"
            >
              <audio
                onClick={handleClick}
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
              ></audio>
              "Q"
            </DrumPad>
            <DrumPad
              id="W"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
              className="drum-pad"
            >
              W
            </DrumPad>
            <DrumPad
              id="E"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
              className="drum-pad"
            >
              E
            </DrumPad>
            <DrumPad
              id="A"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
              className="drum-pad"
            >
              A
            </DrumPad>
            <DrumPad
              id="S"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
              className="drum-pad"
            >
              S
            </DrumPad>
            <DrumPad
              id="D"
              src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
              className="drum-pad"
            >
              D
            </DrumPad>
            <DrumPad
              id="Z"
              src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
              className="drum-pad"
            >
              Z
            </DrumPad>
            <DrumPad
              id="X"
              src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
              className="drum-pad"
            >
              X
            </DrumPad>
            <DrumPad
              id="C"
              src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
              className="drum-pad"
            >
              C
            </DrumPad>
          </Display>
        </DrumContainer>
      </Container>
      <h1>hello</h1>
    </>
  );
}

export default App;
