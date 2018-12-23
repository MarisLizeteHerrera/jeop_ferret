import axios from 'axios';

const CARDS = 'CARDS';

export const getCards = (category_id) => {
  debugger
  return (dispatch) => {
    axios.get(`/api/categories/${category_id}/cards`)
    ///api/categories/:category_id/cards
      .then(res => dispatch ({ type: CARDS, cards: res.data }))
  }
}

export default (state= [], action) => {
  switch(action.type) {
    case CARDS: 
      return action.cards
    default:
      return state
  }
}