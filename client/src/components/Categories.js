import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCategories } from '../reducers/categories';
import { getCards } from '../reducers/cards'
import styled from 'styled-components'

class Categories extends React.Component {
  // function to map over each category and get its id
  // Get the cards based on category id
  // Save cards in state
  // Display state

  // Figure out rest (organization visually) after cards 
  // are saved in state

  state = { categories: [], cards: [] }
  componentDidMount() { 
    this.props.dispatch(getCategories(this.props.match.params.id))
    // this.setState({
    //   categories: this.props.categories,
    // })
    // console.log("State:")
    // console.log(this.state)
    // console.log("Props")
    // console.log(this.props)
    // debugger
    // Get cards based on category
    // this.props.dispatch(getCards(
    //   this.props.dispatch(getCategories(this.props.match.params.id))
    // ));
    this.getCatId();
  }

  getCatId = () => {
    return this.props.categories.map( cat => {
      const { id } = cat
      console.log('Category ID: ')
      console.log(id)
    });
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