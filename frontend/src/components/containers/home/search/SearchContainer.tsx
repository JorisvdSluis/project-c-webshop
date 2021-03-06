import * as React from 'react';
import Search from "../../../views/home/search/Search";
import {RouteComponentProps} from "react-router";
import * as queryString from "query-string";

interface IRouteProps {

}

interface IProps extends RouteComponentProps<IRouteProps> {}
interface IState {
  query?: string;
}

class SearchContainer extends React.Component<IProps, IState> {
  public state = {
    query: undefined
  };

  public componentDidMount() {
    this.parseQueryString();
  }

  public componentDidUpdate(prevProps: IProps) {
    // Query string changed
    if (this.props.location.search !== prevProps.location.search) {
      this.parseQueryString();
    }
  }

  public render() {
    return (
      <Search query={this.state.query} />
    );
  }

  private parseQueryString = () => {
    const values = queryString.parse(this.props.location.search);

    let q: string | undefined;

    // Query parameter given to route
    if (values.q !== undefined) {
      if (typeof values.q === 'string' && values.q.trim() === '') {
        q = undefined;
      } else {
        q = values.q as string;
      }
    }

    this.setState({ query: q });
  };
};

export default SearchContainer;
