import axios from 'axios';

const CARDS = 'CARDS';

export const getCards = (category_id) => {
  return (dispatch) => {
    axios.get(`/api/categories/${category_id}/cards`)
      .then(res => {
        dispatch ({ type: CARDS, cards: res.data })
      }).catch(err => {
        console.log(err) 
    });
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