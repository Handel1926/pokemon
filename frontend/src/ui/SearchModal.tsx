import React, {
  createContext,
  Dispatch,
  useState,
  useContext,
  cloneElement,
} from "react";

import { createPortal } from "react-dom";

interface DISPLAY {
  showSearch: boolean;
  setShowSearch: Dispatch<React.SetStateAction<boolean>>;
}

export const SearchContext = createContext<any | null>(null);

export default function SearchModal({ children }) {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <SearchContext.Provider value={{ showSearch, setShowSearch }}>
      {children}
    </SearchContext.Provider>
  );
}

function Open({ children }) {
  const { setShowSearch } = useContext(SearchContext);

  return cloneElement(children, { onFocus: () => setShowSearch(true) });
}

function Window({ children }) {
  const { showSearch, setShowSearch } = useContext(SearchContext);

  return createPortal(
    <div
      className={`${
        showSearch
          ? "absolute z-50 top-16 left-0 w-full h-svh bg-white backdrop-blur-md"
          : "hidden"
      }`}
    >
      {cloneElement(children, { onCloseModal: () => setShowSearch(false) })}
    </div>,
    document.body
  );
}

SearchModal.Open = Open;
SearchModal.Window = Window;
