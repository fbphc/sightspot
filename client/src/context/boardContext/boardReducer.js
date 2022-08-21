export const boardState = {
  textarea: "",
  topic: "",
  userId: "",
  author: "",
};
const boardReducer = (state, action) => {
  const { type, payload } = action;
console.log(payload)
  switch (type) {
    case "ADD_COMMENT": {
      return {
        ...state,
      };
    }
    case "COMMENT_ERR": {
        return {
          ...state,
          error: payload,
        };
      }
    default: {
      return state;
    }
  }
};

export default boardReducer;
