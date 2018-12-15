import styled from 'styled-components';

const Abouth1 = styled.h1`
  font-size: 60px;
  color: ${props => props.theme.grey};
`;

const About = () => {
  return (
    <div>
      <Abouth1>About BitzPrice</Abouth1>
      <p>Application to view BitCoin Prices</p>
    </div>
  );
};

export default About;
