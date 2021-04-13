import { AESTROIDID, GET_ALL_ASTEROIDS} from "../Actions/AestroidIdActionType";
const initial_state = {
  error: null,
};

export const AsteroidDetailsReducer = (state = initial_state, action) => {
  const { type, payload } = action;
  switch (type) {
    case AESTROIDID:
      return {
        ...state,
        ...payload,
      };
      case GET_ALL_ASTEROIDS:
        return {
          ...state,
          ...payload
        }
    default:
      return state;
  }
};
