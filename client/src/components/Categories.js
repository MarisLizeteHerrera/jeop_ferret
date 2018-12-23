import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCategories } from '../reducers/categories';
import styled from 'styled-components'
import getCards from '../reducers/cards'

class Categories extends React.Component {
  // Set state to hold the categories
  // This will be used to get category.id
  // Will use state instead of props after saving to state

  // function to map over each category and
  // Get the cards (from cards reducer)
  // Save cards in state

  // Figure out rest after cards are saved in state

  state = { categories: [], cards: [] }
  componentDidMount() { 
    // this.props.dispatch(getCategories(this.props.match.params.id))
    // this.setState({
    //   categories: this.props.categories,
    // })
    console.log("State:")
    console.log(this.state)
    console.log("Props")
    console.log(this.props)
    // debugger
    // Get cards based on category
    // this.props.dispatch(getCards(
    //   this.props.dispatch(getCategories(this.props.match.params.id))
    // ));
  }

  categories = () => {
    return this.props.categories.map( category => 
      <div key={category.id}>
        <Cat>
          <h1>{category.name}</h1>
          <Link to={`/${category.id}`}>
            <p> View Category </p>
          </Link>
        </Cat>
      </div>
    )
  }



  cards = () => {
    return this.props.cards.map( card => (
      <div key={card.id}>
        <p> Points - {card.points} </p>
      </div>
    ))
  }

  render() {
    return(
      <CatCont className='orange'>
        {this.categories()}
      </CatCont>

    )
  }
}

const mapStateToProps = (state) => {
  return { categories: state.categories }
}

const CatCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: #1600aa;
`;

const Cat = styled.p`
  background-color: #4900ff;
  border: 10px solid white;
  color: 	#ff00c1;
  text-align: center;
  width: 255px;
  box-shadow: 5px 5px 10px 	#ff00c1;
  
  &:hover {
    transition: box-shadow 0.25s ease;
  box-shadow: -5px -5px 10px 	#00b8ff;
  }
 
`;


export default connect(mapStateToProps)(Categories);