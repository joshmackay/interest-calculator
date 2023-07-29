export default function Table(props) {
  const investmentData = props.investmentData;
  console.log(investmentData);
  const yearlyData = [];

  let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  let currentSavings = Number(investmentData["current-savings"]);
  let yearlySavings = Number(investmentData["yearly-savings"]);
  let expectedReturn = Number(investmentData["expected-interest"] / 100);
  let duration = Number(investmentData["investment-duration"]);

  let totalInterest = 0;
  let investedCapital = currentSavings;

  for (let i = 0; i < duration; i++) {
    const yearlyInterest = currentSavings * expectedReturn;
    totalInterest += yearlyInterest;
    investedCapital += yearlySavings;
    currentSavings = investedCapital + yearlyInterest;

    yearlyData.push({
      year: i + 1,
      savingsEndOfYear: currentSavings,
      interestThisYear: yearlyInterest,
      cummulativeInterest: totalInterest,
      investedCapital: investedCapital,
    });
  }

  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {yearlyData.map((year) => (
          <tr key={year.year}>
            <td>{year.year}</td>
            <td>{USDollar.format(year.savingsEndOfYear)}</td>
            <td>{USDollar.format(year.interestThisYear)}</td>
            <td>{USDollar.format(year.cummulativeInterest)}</td>
            <td>{USDollar.format(year.investedCapital)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
