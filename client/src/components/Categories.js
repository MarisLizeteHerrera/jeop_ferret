import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCategories } from '../reducers/categories';
import { getCards } from '../reducers/cards'
import styled from 'styled-components'

class Categories extends React.Component {
  /* TO DO
    1. Function for each category to put the category name
        and questions on the screen
      - Will need to filter and only display questions
          belonging to that category

    2. To keep code clean, a function that takes in props
        and renders the item (const not class)

    3. When clicking item, load it in browser (catId/questionId)
        Will need a button to go back to /
        
  */ 
  state = { categories: [], cards: [] }
  componentDidMount() {
    this.props.dispatch(getCategories(this.props.match.params.id))
  }

  renderCards = () => {
    return this.props.cards.map(card => (
      <Cat key={ card.id }>
        <h1>{ card.points }</h1>
      </Cat>
    ));
  }

  categories = () => {
    return this.props.categories.map(category =>
      <div key={category.id}>
        <Cat>
          <h1>{category.name}</h1>
          <Link to={`/${category.id}`}>
            <p> View Category </p>
          </Link>
        </Cat>
        <ul>
          { this.renderCards() }
        </ul>
      </div>
    )
  }


  render() {
    return (
      <CatCont className='orange'>
        { this.categories() }
      </CatCont>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    cards: state.cards,
  }
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