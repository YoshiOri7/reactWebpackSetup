// Import from Library and Framework
import React from 'react';
import { connect } from 'react-redux';

// Import from Action
import { setUser } from '../../actions/actions.js';

// Home Component
let Home = (props) => {
  const { user, setUser } = props;

  const clickSetUser = () => {
    props.setUser({
      "user": "user1"
    });
  };

  return (
    <div>
      Home
      <br></br>
      <button onClick={clickSetUser}>clickSetUser</button>
    </div>
  );
}

// mapStateToProps and mapDispatchToProps
const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setUser: function(user) {
      dispatch(setUser(user));
    }
  }
}
Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default Home;

