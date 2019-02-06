import { UPDATE_COLLECTIONS } from '../constants/actionTypes'

const initialState = {
  keyword: false,
  byId: {},
  allIds: []
}

const resultToStateObj = result => result

const collectionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COLLECTIONS: {
      const byId = {}
      const allIds = []
      action.payload.results.forEach((result, i) => {
        byId[i] = resultToStateObj(result)
        allIds.push(i)
      })

      return {
        ...state,
        keyword: action.payload.keyword,
        byId,
        allIds
      }
    }
    default:
      return state
  }
}

export default collectionsReducer
