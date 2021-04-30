import React from "react";

function SetDuration({
  focusDuration,
  setFocusDuration,
  breakDuration,
  setBreakDuration,
  session,
}) {
  const decreaseFocusHandler = () => {
    setFocusDuration((currentDuration) => Math.max(5, currentDuration - 5));
  };

  const increaseFocusHandler = () => {
    setFocusDuration((currentDuration) => Math.min(60, currentDuration + 5));
  };

  const decreaseBreakHandler = () => {
    setBreakDuration((currentDuration) => Math.max(1, currentDuration - 1));
  };

  const increaseBreakHandler = () => {
    setBreakDuration((currentDuration) => Math.min(15, currentDuration + 1));
  };

  return (
    <div className="row">
      <div className="col">
        <div className="input-group input-group-lg mb-2">
          <span className="input-group-text" data-testid="duration-focus">
            {/* display current focus session duration */}
            Focus Duration: {focusDuration}
          </span>
          <div className="input-group-append">
            {/* implement decreasing focus duration and disable during a focus or break session  */}
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="decrease-focus"
              onClick={decreaseFocusHandler}
              disabled={session === null ? false : true}
            >
              <span className="oi oi-minus" />
            </button>
            {/* Implement increasing focus duration and disable during a focus or break session */}
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="increase-focus"
              onClick={increaseFocusHandler}
              disabled={session === null ? false : true}
            >
              <span className="oi oi-plus" />
            </button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="float-right">
          <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" data-testid="duration-break">
              {/* display current break session duration */}
              Break Duration: {breakDuration}
            </span>
            <div className="input-group-append">
              {/* Implement decreasing break duration and disable during focus or break session*/}
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="decrease-break"
                onClick={decreaseBreakHandler}
                disabled={session === null ? false : true}
              >
                <span className="oi oi-minus" />
              </button>
              {/* Implement increasing break duration and disable during a focus or break session*/}
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="increase-break"
                onClick={increaseBreakHandler}
                disabled={session === null ? false : true}
              >
                <span className="oi oi-plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SetDuration;
