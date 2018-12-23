import axios from 'axios';

const CATEGORIES = 'CATEGORIES'

export const getCategories = (cb) => {
  return (dispatch) => {
    axios.get('./api/categories')
    .then( res => dispatch({ type: CATEGORIES, categories: res.data }) )
    .then(cb)
  }
}

export default (state = [], action ) => {
  switch(action.type) {
    case CATEGORIES:
     return action.categories
    default:
      return state
  }
}
