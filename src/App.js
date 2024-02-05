import { useState } from "react";
import data from "./data";

function App() {
  const [selected, setselected] = useState(null);
  const [multiselect, setmultiselect] = useState(null)

  function handleSingleSelection(getCurrentId) {
    setselected(getCurrentId === selected?null:getCurrentId);
  }

  function handleMultipleSelection(getMultipleIds){

  }
  return (
    <div className="wrapper">
      <div>
        <div>
          <button>multi selection</button>
        </div>
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={() => handleSingleSelection(dataItem.id)}
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id ? (
                <div className="content">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>There is no data</div>
        )}
      </div>
    </div>
  );
}

export default App;
