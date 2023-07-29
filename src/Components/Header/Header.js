import logo from "../../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header className="">
      <img src={logo} className="logo" alt="investment-calculator logo"></img>
      <h1>Investment Calculator</h1>
    </header>
  );
}
