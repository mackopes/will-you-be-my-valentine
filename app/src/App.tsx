// import './App.css'

import { useState } from "react";

function App() {
  const [selected, setSelected] = useState(-1);

  const buttonDefault = "border-2 rounded-lg px-4 py-2 font-bold text-red-50 border-red-50";
  const buttonSelected = "border-2 rounded-lg px-4 py-2 font-bold text-red-600 bg-red-50 border-red-50";
  let yesState = buttonDefault;
  let noState = buttonDefault;

  if (selected == 0) {
    yesState = buttonSelected;
  }

  if (selected == 1) {
    noState = buttonSelected;
  }

  return (
    <body className="bg-red-600 w-screen h-screen flex flex-col items-center justify-center gap-8">
      <h1 className="text-red-50 font-bold text-4xl text-center">Will you be my valentine?</h1>
      <div className="flex flex-row gap-4">
        <button
          className={yesState}
          onClick={() => {
            setSelected(0);
          }}
        >
          yes
        </button>
        <button
          className={noState}
          onClick={() => {
            setSelected(1);
          }}
        >
          no
        </button>
      </div>
      <div className="w-full aspect-square max-w-[300px]">
        {/* <img className="w-full h-full" src={"https://media.tenor.com/DpJdyKQKgYkAAAAi/cat-jump.gif"} /> */}
        {selected == 0 && <img className="w-full h-full" src={"https://c.tenor.com/_hUq1BSUsiMAAAAC/tenor.gif"} />}
        {selected == 1 && <img className="w-full h-full" src={"https://c.tenor.com/t7_iTN0iYekAAAAd/tenor.gif"} />}
      </div>
    </body>
  );
}

export default App;
