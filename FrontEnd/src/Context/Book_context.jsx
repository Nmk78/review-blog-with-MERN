import { createContext, useReducer } from "react";

export const BookContext = createContext();

export const bookReducer = (state, action) => {
      switch (action.type) {
            case "SET_BOOKS":
                  return { books: action.payload };
            
            case "CREATE_BOOK":
                  return { books: [action.payload, ...state.books] };
            default:
                  return state;
  }

}

export const BookContextProvider = ({ children }) => {

      const [state, dispatch] = useReducer(bookReducer, {
        books: null})

        

  return <BookContext.Provider value={{...state, dispatch}}>
      {children}
      </BookContext.Provider>;
};
