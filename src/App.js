import React from 'react';
import ReactDOM from 'react-dom/client';


const App = () => {
  console.log("hellooo");
  return <h1 className=" ">hello again</h1>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(<App />);
