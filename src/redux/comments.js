import * as ActionTypes from './ActionTypes';

export const Comments = (state = {
    comments:[],
    errMsg: null
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state, errMsg:null , isLoading: false, comments:action.payload}

        case ActionTypes.COMMENTS_FAILED:
            return {...state, errMsg:action.payload , isLoading: false, comments:[]}

        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            console.log("Comment: ", comment);
            return { ...state, comments: state.comments.concat(comment)};


        default:
          return state;
      }
};