/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.


// ====================================================
// GraphQL query operation: CovidData
// ====================================================


export interface CovidData_covidData_cases_time_series {
  __typename: "Response";
  dailyconfirmed: string | null;
  dailydeceased: string | null;
  dailyrecovered: string | null;
  date: string | null;
  dateymd: string | null;
  totalconfirmed: string | null;
  totaldeceased: string | null;
  totalrecovered: string | null;
}

export interface CovidData_covidData {
  __typename: "CovidDataResponse";
  cases_time_series: (CovidData_covidData_cases_time_series | null)[] | null;
}

export interface CovidData {
  covidData: CovidData_covidData | null;
}
