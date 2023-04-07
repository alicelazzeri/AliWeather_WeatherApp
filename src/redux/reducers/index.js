const InitialState = {
  meteo: {
    content: null,
  },
  settimana: {
    content: null,
  },
};
const mainReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "CURRENT_WEATHER":
      return {
        ...state,
        meteo: {
          ...state.meteo,
          content: action.payload,
        },
      };
    case "WEEKLY_WEATHER":
      return {
        ...state,
        settimana: {
          ...state.settimana,
          content: action.payload,
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
