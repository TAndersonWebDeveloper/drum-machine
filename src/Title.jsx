import { styled } from "styled-components";

const TitleContainer = styled.div`
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #fff;
  background-color: #000;

  margin-top: 20px;
  margin-bottom: 20px;
`;

const Title = ({ activeKey }) => {
  return <TitleContainer>{activeKey}</TitleContainer>;
};

export default Title;
