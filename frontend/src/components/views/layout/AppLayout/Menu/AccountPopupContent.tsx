import * as React from 'react';
import {Subscribe} from "unstated";
import UserState from "../../../../../states/UserState";
import {userState} from "../../../../../index";
import {RouteComponentProps, withRouter} from "react-router";
import {NavLink} from "react-router-dom";
import IUser from "../../../../../models/IUser";

interface IProps {}
interface IState {}

class AccountPopupContent extends React.Component<IProps & RouteComponentProps<{}>, IState> {
  public state = {};

  public render() {
    return (
      <Subscribe to={[UserState]}>
        {this.renderWithUserState}
      </Subscribe>
    );
  }

  private renderWithUserState = (state: UserState) => {
    const user = state.state.user! as IUser;

    return (
      <div style={{ margin: 20 , marginRight: 30}}>
        <h2 style={{ margin: 0 }}>Howdy!</h2>
        <p>This is just for you.</p>
        <ul style={{
          listStyle: 'none',
          padding: 0
        }}>
          <li><NavLink to={"/dashboard/overview"}>My Account</NavLink></li>
          <br />
          {user.isAdmin &&
            <>
              <li><NavLink to={"/admin"}>Admin Panel</NavLink></li>
              <br />
            </>
          }
          <li><a href="#" onClick={this.handleLogoutClick}>Logout</a></li>
        </ul>
      </div>
    );
  };

  private handleLogoutClick = () => {
    userState.logout();
  };
}

export default withRouter(AccountPopupContent);
