import React from 'react';
import { connect, } from 'react-redux';
import { Link, } from 'react-router-dom';
import { getCards } from '../reducers/cards';

class CategoryView extends React.Component {

  componentDidMount() { 
    // this.props.dispatch(getCards(this.props.match.params.id))
  }

  cards = () => {
    return this.props.cards.map( card => (
      <div key={card.id}>
        <h2> Question - {card.question} </h2>
        <p> Points - {card.points} </p>
        <p> Answer - {card.answer} </p>
      </div>
    ))
  }

  render() { 
    const { category = {} } = this.props; 

    return(
      <div>
        <Link to="/">View All Categories</Link>
        <p>{category.name}</p>    

        <div>
          {this.cards()}
        </div>  
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return { 
    category: state.categories.find( a => a.id === parseInt(props.match.params.id )),
    cards: state.cards
  }
}

export default connect(mapStateToProps)(CategoryView); 