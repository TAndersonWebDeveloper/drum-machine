import { useEffect } from "react";
import { styled } from "styled-components";
import { useContext } from "react";
import { KeyContext } from "./App";

const DrumContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const DrumButton = styled.button`
  width: 100px;
  height: 75px;
  border-radius: 10px;
  background-color: grey;
  color: black;
  font-size: 15px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
    rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
    rgba(0, 0, 0, 0.07) 0px 16px 16px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #fff;
    color: #000;
  }

  &:active {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 2px 5px -8px;
    transform: translateY(4px);
  }
`;

const DrumPadButton = ({ name, url, keyCode, keykey }) => {
  const { activeKey, setActiveKey } = useContext(KeyContext);

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.keyCode === keyCode) {
        const audio = new Audio(url);
        audio.play();
        setActiveKey(name);
      }
      return () => {
        window.removeEventListener("keydown", (e) => {
          if (e.keyCode === keyCode) {
            const audio = new Audio(url);
            audio.play();
          }
        });
      };
    });
  }, [name, url, keyCode, keykey]);

  const handleClick = (url) => {
    const audio = new Audio(url);
    audio.play();
    setActiveKey(name);
  };

  return (
    <DrumContainer>
      <DrumButton className="drum-pad" onClick={() => handleClick(url)}>
        <audio></audio>
        {keykey}
      </DrumButton>
    </DrumContainer>
  );
};

export default DrumPadButton;
