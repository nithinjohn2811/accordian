import { useState } from "react";
import data from "./data";

function App() {
  const [selected, setselected] = useState(null);
  const [multiselect, setmultiselect] = useState([]);
  const [enableMultiSelect, setenableMultiSelect] = useState(false);

  function handleSingleSelection(getCurrentId) {
    setselected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultipleSelection(getCurrentId) {
    let multselectCopy = [...multiselect];
    const findIndexOfCurrentID = multselectCopy.indexOf(getCurrentId);
    if (findIndexOfCurrentID === -1) {
      multiselect.push(getCurrentId);
    } else {
      multiselect.splice(findIndexOfCurrentID, 1);
    }

    setmultiselect(multselectCopy);
  }
  return (
    <div className="wrapper">
      <div>
        <div>
          <button onClick={() => setenableMultiSelect(!setenableMultiSelect)}>
            multi selection
          </button>
        </div>
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={
                  enableMultiSelect
                    ? () => handleMultipleSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {enableMultiSelect
                ? multiselect.indexOf(dataItem.id) !== -1 && (
                    <div className="content">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="content">{dataItem.answer}</div>
                  )}
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
