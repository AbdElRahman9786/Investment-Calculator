import React, { useState } from "react";

const UserInputs = ({userInput,handelChange}) => {

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(e) => handelChange('initialInvestment',e.target.value)}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(e) => handelChange('annualInvestment',e.target.value)}
          />
        </p>
        </div>
        <div className="input-group">
          <p>
            <label>Expected Return</label>
            <input
              type="number"
              required
              value={userInput.expectedReturn}
              onChange={(e) => handelChange('expectedReturn',e.target.value)}
            />
          </p>
          <p>
            <label>Duration</label>
            <input
              type="number"
              required
              value={userInput.duration}
              onChange={(e) => handelChange('duration',e.target.value)}
            />
          </p>
        </div>
      
    </section>
  );
};

export default UserInputs;
