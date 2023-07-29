import { useState } from "react";

export default function Form(props) {
  // const [currentSavings, setCurrentSavings] = useState("");
  // const [yearlySavings, setYearlySavings] = useState("");
  // const [expectedInterest, setExpectedInterest] = useState("");
  // const [investmentDuration, setInvestmentDuration] = useState("");

  const [userData, setUserData] = useState({
    "current-savings": "",
    "yearly-savings": "",
    "expected-interest": "",
    "investment-duration": "",
  });

  const changeHandler = (field, value) => {
    setUserData((prev) => {
      return {
        ...prev,
        [field]: value,
      };
    });
    // field === "current-savings" && setCurrentSavings(value);
    // field === "yearly-savings" && setYearlySavings(value);
    // field === "expected-interest" && setExpectedInterest(value);
    // field === "investment-duration" && setInvestmentDuration(value);
  };

  const resetForm = () => {
    setUserData({
      "current-savings": "",
      "yearly-savings": "",
      "expected-interest": "",
      "investment-duration": "",
    });
    props.onResetFormData();
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSubmitFormData(userData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <div className="form-input">
          <label htmlFor="current-savings">CURRENT SAVINGS ($)</label>
          <input
            type="number"
            id="current-savings"
            value={userData["current-savings"]}
            onChange={(event) =>
              changeHandler("current-savings", event.target.value)
            }
            required></input>
        </div>
        <div className="form-input">
          <label htmlFor="yearly-savings">YEARLY SAVINGS ($)</label>
          <input
            type="number"
            id="yearly-savings"
            value={userData["yearly-savings"]}
            onChange={(event) =>
              changeHandler("yearly-savings", event.target.value)
            }
            required></input>
        </div>
      </div>
      <div className="form-group">
        <div className="form-input">
          <label htmlFor="expected-interest">EXPECTED INTEREST ($)</label>
          <input
            type="number"
            id="expected-interest"
            value={userData["expected-interest"]}
            onChange={(event) =>
              changeHandler("expected-interest", event.target.value)
            }
            required></input>
        </div>
        <div className="form-input">
          <label htmlFor="investment-duration">
            INVESTMENT DURATION (YEARS)
          </label>
          <input
            type="number"
            id="investment-duration"
            value={userData["investment-duration"]}
            onChange={(event) =>
              changeHandler("investment-duration", event.target.value)
            }
            required></input>
        </div>
      </div>
      <div className="form-buttons">
        <button
          type="reset"
          className="button reset-button"
          onClick={resetForm}>
          Reset
        </button>
        <button type="submit" className="button submit-button">
          Calculate
        </button>
      </div>
    </form>
  );
}
