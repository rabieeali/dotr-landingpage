import { createContext, useState, useContext, useEffect } from "react";

const CommentContext = createContext({});

export const CommentProvider = ({ children }) => {
  const [comment, setComment] = useState({});


  return (
    <CommentContext.Provider value={{ comment, setComment }}>
      {children}
    </CommentContext.Provider>
  );
};

// hooks
export const useComment = () => useContext(CommentContext);

export default CommentProvider;
