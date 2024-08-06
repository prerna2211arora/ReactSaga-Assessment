const initialState = {
  data: [],
  loading: false,
  error: null,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA_REQUEST":
      return { ...state, loading: true };
    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };
    case "FETCH_DATA_FAILURE":
    default:
      return state;
  }
};

export default dataReducer;
