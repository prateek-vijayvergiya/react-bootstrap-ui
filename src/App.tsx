import React from "react";
import { useQuery } from "@apollo/client";
import GET_COVID_DATA from "./query.graphql";
import { Spinner } from "react-bootstrap";
import DataGrid from "./stories/DataGrid-ReactTable/datagrid";

const covidRecordColumns = [
  {accessor: "dailyconfirmed", Header: "Daily Confirmed"},
  {accessor: "dailydeceased", Header: "Daily Deceased"},
  {accessor: "dailyrecovered", Header: "Daily Recovered"},
  {accessor: "date", Header: "Date"},
  {accessor: "totalconfirmed", Header: "Total Confirmed"},
  {accessor: "totaldeceased", Header: "Total Deceased"},
  {accessor: "totalrecovered", Header: "Total Recovered"},
];

const App: React.FC = () => {
  const { loading, error, data } = useQuery(GET_COVID_DATA)
  if(error) return <h1>Some Error</h1>
  return loading ? (
    <Spinner animation="border" />
  ) : (
    <DataGrid
      data={data.covidData.cases_time_series}
      column={covidRecordColumns}
      pagination={true}
      infiniteScroll={false}
      defaultColumnWidth={210}
      tableHeight={600}
    ></DataGrid>
  );
};

export default App
