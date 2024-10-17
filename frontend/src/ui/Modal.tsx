import { createContext, useState, useContext, cloneElement } from "react";

import { createPortal } from "react-dom";

export const ModalContext = createContext<any | null>(null);

export default function Modal({ children }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <ModalContext.Provider value={{ showModal, setShowModal }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children }) {
  const { setShowModal } = useContext(ModalContext);
  return cloneElement(children, {
    onFocus: () => setShowModal(true),
  });
}

function Window({ children }) {
  const { showModal, setShowModal } = useContext(ModalContext);

  return createPortal(
    <div
      className={`${
        showModal
          ? "absolute z-40 top-0 left-0 pt-[20%] md:pt-[5%] md:m-auto w-full h-svh px-4 bg-white/5 backdrop-blur-md flex flex-col"
          : "hidden"
      }`}
    >
      <div className="w-full h-fit flex justify-end cursor-pointer">
        <p
          onClick={() => setShowModal(false)}
          className="bg-gray-200 text-black p-2 rounded-md"
        >
          close
        </p>
      </div>
      <div>{children}</div>
    </div>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;
