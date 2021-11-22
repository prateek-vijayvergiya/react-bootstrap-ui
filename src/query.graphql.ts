import { gql } from "@apollo/client";

export default gql`
  query CovidData {
    covidData {
      cases_time_series {
        dailyconfirmed
        dailydeceased
        dailyrecovered
        date
        dateymd
        totalconfirmed
        totaldeceased
        totalrecovered
      }
    }
  }
`;
