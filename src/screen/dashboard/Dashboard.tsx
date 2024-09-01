import { Container, Grid, Paper, styled } from "@mui/material";
import Chart from "react-apexcharts";
const Dashboard = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Wrapper>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <div className="d_pi_chart">
                <Chart
                  options={{
                    chart: {
                      width: "100%",
                      type: "pie",
                    },
                    labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
                    responsive: [
                      {
                        breakpoint: 480,
                        options: {
                          chart: {
                            width: "100%",
                          },
                        },
                      },
                    ],
                  }}
                  series={[44, 55, 13, 43, 22]}
                  type="pie"
                  height={320}
                />
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="d_area_chart">
                <Chart
                  options={{
                    chart: {
                      width: "100%",
                      type: "area",
                    },
                    dataLabels: {
                      enabled: false,
                    },
                    stroke: {
                      curve: "smooth",
                    },
                    xaxis: {
                      type: "datetime",
                      categories: [
                        "2018-09-19T00:00:00.000Z",
                        "2018-09-19T01:30:00.000Z",
                        "2018-09-19T02:30:00.000Z",
                        "2018-09-19T03:30:00.000Z",
                        "2018-09-19T04:30:00.000Z",
                        "2018-09-19T05:30:00.000Z",
                        "2018-09-19T06:30:00.000Z",
                      ],
                    },
                    tooltip: {
                      x: {
                        format: "dd/MM/yy HH:mm",
                      },
                    },
                    responsive: [
                      {
                        breakpoint: 480,
                        options: {
                          chart: {
                            width: "100%",
                          },
                        },
                      },
                    ],
                  }}
                  series={[
                    { name: "series1", data: [31, 40, 28, 51, 42, 109, 100] },
                  ]}
                  type="area"
                  height={320}
                />
              </div>
            </Grid>
          </Grid>
        </Wrapper>
      </Container>
    </>
  );
};

export default Dashboard;

const Wrapper = styled("div")`
  margin-top: 20px;
  .d_pi_chart {
    background-color: #fff;
    border-radius: 10px;
    padding: 10px;
  }
  .d_area_chart {
    background-color: #fff;
    border-radius: 10px;
    padding: 10px;
  }
`;
