import { gql } from "@apollo/client";

export default gql`
  query CovidData {
    covid {
      cases_time_series{
        edges {
          cursor
          node{
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
        pageInfo{
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
        }
      }
    }
  }
`;
