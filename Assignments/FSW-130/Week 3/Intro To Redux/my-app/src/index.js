import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";

import "./styles.css";

const START_TIMER = "START_TIMER";
const STOP_TIMER = "STOP_TIMER";
const RESUME_TIMER = "RESUME_TIMER";
const RESET_TIMER = "RESET_TIMER"
const TICK = "TICK";

const initialState = {
  timerOn: false,
  timerStart: 0,
  timerTime: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_TIMER:
      return {
        ...state,
        timerOn: true,
        timerTime: state.timerTime,
        timerStart: Date.now() - state.timerTime,
        timerId: action.timerId
      };
    case STOP_TIMER: {
      return {
        ...state,
        timerOn: false,
        timerStart: 0
      };
    }
    case RESET_TIMER: {
      return {
        ...state,
        timerOn: false,
        timerStart: 0
      }
    }
    case TICK:
      return { ...state, timerTime: state.timerTime + 4 };
    default:
      return state;
  }
};

const store = createStore(reducer);

class Presentational extends React.Component {
  handleStop = () => {
    clearInterval(this.props.timerId);
    this.props.stopTimer();
  };

  render() {
    const { timerTime } = this.props;
    let milliseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
    return (
      <div>
        <div className="stopwatch">
          {hours} : {minutes} : {seconds} : {milliseconds}
        </div>
        <hr />
        <div className="button">
          {this.props.timerOn === false && this.props.timerTime === 0 && (
          <button onClick={this.props.startTimer}>Start</button>
        )}
        {this.props.timerOn === true && (
          <button onClick={this.handleStop}>Stop</button>
        )}
        {this.props.timerOn === false && this.props.timerTime > 0 && (
          <button onClick={this.props.startTimer}>Resume</button>
        )}
        {this.props.timerOn === false && this.props.timerTime > 0 && (
          <button onClick={this.props.resetTimer}>Reset</button>
        )}
          </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    timerOn: state.timerOn,
    timerStart: state.timerStart,
    timerTime: state.timerTime,
    timerId: state.timerId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    startTimer: () => {
      const timerId = setInterval(() => dispatch({ type: TICK }), 1);
      dispatch({ type: START_TIMER, timerId });
    },
    stopTimer: () => {
      dispatch({ type: STOP_TIMER });
    },
    resetTimer: () => dispatch({ type: RESET_TIMER })
  };
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Presentational);

class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
}

ReactDOM.render(<AppWrapper />, document.getElementById("root"));