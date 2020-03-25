import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import Container from "../../components/Container";
import Alert from '../../components/Alert'
import Table from '../../components/Table'

function Home() {
  const [employeeData, setEmployeeData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    API.popEmployees()
      .then(res => {
        setEmployeeData(res.data.results);
      })
      .catch(err => setError(err));
  }, []);

  return (
    <div>
      <Container style={{ minHeight: "100vh" }}>
        <h1 className="text-center">Employee Table</h1>
        <Alert type="danger" style={{ opacity: error ? 1 : 0, marginBottom: 10 }}>
          {error}
        </Alert>
        <Table
          employeeData={employeeData}
        />
      </Container>
    </div>
  );
}


export default Home;