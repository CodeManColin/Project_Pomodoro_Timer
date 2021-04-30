import React from "react";
import { secondsToDuration } from "../utils/duration";
import { minutesToDuration } from "../utils/duration";

function NextSession({ session, focusDuration, breakDuration }) {
  function focusOrBreak(label) {
    if (label === "Focusing") {
      return focusDuration;
    } else {
      return breakDuration;
    }
  }

  function elapsedTime(totalTime, timeRemaining) {
    const seconds = totalTime * 60;
    const elapsedTime = seconds - timeRemaining;
    return (elapsedTime * 100) / seconds;
  }

  if (session === null) {
    return null;
  } else {
    return (
      <div>
        {/* Show area only when there is an active focus or break - i.e. the session is running or is paused */}
        <div className="row mb-2">
          <div className="col">
            {/* Update message below to include current session (Focusing or On Break) total duration */}
            <h2 data-testid="session-title">
              {session.label} for{" "}
              {minutesToDuration(focusOrBreak(session.label))} minutes
            </h2>
            {/* Format time remaining in the current session */}
            <p className="lead" data-testid="session-sub-title">
              {secondsToDuration(session.timeRemaining)} remaining
            </p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <div className="progress" style={{ height: "20px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                // Increase aria-valuenow as elapsed time increases
                aria-valuenow={elapsedTime(
                  focusOrBreak(session.label),
                  session.timeRemaining
                )}
                // Increase width % as elapsed time increases
                style={{
                  width:
                    elapsedTime(
                      focusOrBreak(session.label),
                      session.timeRemaining
                    ) + "%",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NextSession;
