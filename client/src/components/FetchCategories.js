import React from "react"
import { connect, } from "react-redux";
import { Route, } from "react-router-dom";
import Categories from "./Categories";
import CategoryView from "./CategoryView";
import { getCategories, } from "../reducers/categories";
import { getCards } from '../reducers/cards';

class FetchCategories extends React.Component {
  state = { loaded: false, };

  componentDidMount() {
    this.props.dispatch(getCards(1));
    this.props.dispatch(getCategories(this.setLoaded))
  }

  setLoaded = () => this.setState({ loaded: true, });

  render() {
    const { loaded, } = this.state;
    if (loaded) {
      return (
        <div>
          <Route exact path="/" component={Categories}/>
          <Route exact path="/:id" component={CategoryView}/>
        </div>
      )
    } else {
      return (
        <div>
          Loading...
        </div>
      )
    }
  }
}

export default connect() (FetchCategories);