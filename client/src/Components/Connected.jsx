import React from "react";

const Connected = (props) => {
  return (
    <div className="connected-container">
      <h1 className="connected-header">You are Connected to Metamask</h1>
      <p className="connected-account">Metamask Account: {props.account}</p>
      <p className="connected-account">Remaining Time: {props.remainingTime}</p>
      {props.showButton ? (
        <p className="connected-account">You have already voted</p>
      ) : (
        <div className="votee">
          <input
            type="number"
            placeholder="Enter Candidate Index"
            value={props.number}
            onChange={props.handleNumberChange}
          ></input>
          <br />
          <button className="login-button" onClick={props.voteFunction}>
            Vote
          </button>
        </div>
      )}

      <ul className="responsive-table">
        <li className="table-header">
          <div className="col col-1">Index</div>
          <div className="col col-2">Candidate name</div>
          <div className="col col-3">Candidate votes</div>
        </li>
        {props.candidates.map((candidate, index) => (
          <li className="table-row" key={index}>
            <div className="col col-1" data-label="Index">
              {candidate.index}
            </div>
            <div className="col col-2" data-label="Candidate name">
              {candidate.name}
            </div>
            <div className="col col-3" data-label="Candidate votes">
              {candidate.voteCount}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Connected;
