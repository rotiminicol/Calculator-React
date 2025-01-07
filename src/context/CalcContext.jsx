import { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const CalcContext = createContext();

const CalcProvider = ({ children }) => {
  const [state, setState] = useState({});

  return (
    <CalcContext.Provider value={[state, setState]}>
      {children}
    </CalcContext.Provider>
  );
};

CalcProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CalcProvider;