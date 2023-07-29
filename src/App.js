import { useState } from "react";

import Form from "./Components/Form/Form.js";
import Table from "./Components/Table/Table.js";
import Header from "./Components/Header/Header.js";

import "./index.css";

function App() {
  const [formData, setFormData] = useState(null);

  const getFormData = (formData) => {
    setFormData(formData);
  };

  const tableContent = () => {
    return formData ? (
      <Table investmentData={formData} />
    ) : (
      <p className="no-data">No investment calculated yet.</p>
    );
  };

  const resetForm = () => {
    setFormData(null);
  };

  return (
    <div>
      <Header />
      <Form onSubmitFormData={getFormData} onResetFormData={resetForm} />
      {tableContent()}
    </div>
  );
}

export default App;
