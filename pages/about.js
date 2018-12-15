import styled from 'styled-components';
import { connect } from 'react-redux';

const Abouth1 = styled.h1`
  font-size: 60px;
  color: ${props => props.theme.grey};
`;

const About = props => {
  return (
    <div>
      <Abouth1>About BitzPrice</Abouth1>
      <p>{props.about}</p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    about: state.nextReducer.about
  };
};

export default connect(
  mapStateToProps,
  null
)(About);
