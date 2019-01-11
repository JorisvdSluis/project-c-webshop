import * as React from "react";
import AdminMenu from "../../../../reusable/Admin/AdminMenu";
import { Button, Icon, Header, Divider } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import {
  Tooltip,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid
} from "recharts";

const styles = {
  centerItems: {
    marginTop: 50,
    display: "flex",
    justifyContent: "center"
  }
};

class Statistics extends React.Component {
  public render() {
    const data = [
      {
        name: "January",
        "Account registrations": 12,
        Profit: 2400,
        Albums: 1400,
        Singles: 5400
      },
      {
        name: "February",
        "Account registrations": 17,
        Profit: 1400,
        Albums: 2200,
        Singles: 3200
      },
      {
        name: "March",
        "Account registrations": 14,
        Profit: 9800,
        Albums: 2900,
        Singles: 4100
      },
      {
        name: "April",
        "Account registrations": 19,
        Profit: 3900,
        Albums: 2000,
        Singles: 6700
      },
      {
        name: "May",
        "Account registrations": 26,
        Profit: 4800,
        Albums: 2100,
        Singles: 1200
      },
      {
        name: "June",
        "Account registrations": 9,
        Profit: 3800,
        Albums: 2500,
        Singles: 7900
      }
    ];
    return (
      <div>
        <AdminMenu />
        <Divider horizontal>QUICK STATS</Divider>
        <div style={styles.centerItems}>
          <AreaChart
            width={400}
            height={150}
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorAC" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="5 5" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="Account registrations"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#colorAC)"
            />
          </AreaChart>

          <AreaChart
            width={450}
            height={150}
            data={data}
            margin={{ top: 10, right: 30, left: 20, bottom: 0 }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="5 5" />
            <defs>
              <linearGradient id="colorP" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Tooltip />
            <Area
              type="monotone"
              dataKey="Profit"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#colorP)"
            />
          </AreaChart>

          <AreaChart
            width={400}
            height={150}
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorS" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorA" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="5 5" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="Albums"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorA)"
            />
            <Area
              type="monotone"
              dataKey="Singles"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#colorS)"
            />
          </AreaChart>
        </div>
        <div style={styles.centerItems}>
          <Header as="h2" textAlign="center">
            <Header.Content>Statistics</Header.Content>
            <Header.Subheader>
              Choose a category to see more stats
            </Header.Subheader>
          </Header>
        </div>
        <div style={styles.centerItems}>
          <Button.Group basic size="massive">
            <NavLink to={"users/all"}>
              <Button animated="fade" size="massive">
                <Button.Content visible>
                  <Icon name="users" />
                  Users
                </Button.Content>
                <Button.Content hidden>
                  <Icon name="users" />
                  Users
                </Button.Content>
              </Button>
            </NavLink>

            <Button.Or />

            <NavLink to={"albums/addalbum"}>
              <Button animated="fade" size="massive">
                <Button.Content visible>
                  <Icon name="music" />
                  Music
                </Button.Content>
                <Button.Content hidden>
                  <Icon name="music" />
                  Music
                </Button.Content>
              </Button>
            </NavLink>

            <Button.Or />

            <NavLink to={"albums/addalbum"}>
              <Button animated="fade" size="massive">
                <Button.Content visible>
                  <Icon name="euro sign" />
                  Finance
                </Button.Content>
                <Button.Content hidden>
                  <Icon name="euro sign" />
                  Finance
                </Button.Content>
              </Button>
            </NavLink>
          </Button.Group>
        </div>
      </div>
    );
  }
}

export default Statistics;
