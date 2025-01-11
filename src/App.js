import React, { useState } from "react";

const App = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const AddItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };

  return React.createElement(
    "div",
    { className: "min-h-screen bg-gray-100 flex items-center justify-center p-4" },
    React.createElement(
      "div",
      { className: "w-full max-w-md bg-white rounded-lg shadow-lg" },
      React.createElement(
        "div",
        { className: "bg-[#2b2b2b] p-3 rounded-t-lg flex items-center" },
        React.createElement(
          "div",
          { className: "w-8 h-8 bg-[#2ecc71] rounded flex items-center justify-center text-white font-bold mr-3" },
          "HI"
        ),
        React.createElement(
          "h2",
          { className: "text-white m-0" },
          "Item List Manager"
        )
      ),
      React.createElement(
        "div",
        { className: "p-6" },
        React.createElement(
          "h3",
          { className: "text-black mb-3" },
          "Item List:"
        ),
        React.createElement(
          "ul",
          { className: "mb-6 space-y-2" },
          items.map((item, index) =>
            React.createElement(
              "li",
              {
                key: index,
                className: "p-2 border-b border-gray-200 text-base"
              },
              item
            )
          )
        ),
        React.createElement(
          "div",
          { className: "space-y-4" },
          React.createElement(
            "input",
            {
              type: "text",
              value: inputValue,
              onChange: (e) => setInputValue(e.target.value),
              placeholder: "Enter item",
              className: "w-full p-2.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#2ecc71] focus:border-transparent"
            }
          ),
          React.createElement(
            "button",
            {
              onClick: AddItem,
              className: "w-full py-2.5 px-4 bg-[#2ecc71] text-white font-bold rounded hover:bg-[#27ae60] transition-colors duration-200"
            },
            "Add Item"
          )
        )
      )
    )
  );
};

export default App;
