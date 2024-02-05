import { useState } from "react";
import data from "./data";

function App() {

const [selected, setSelected] = useState(null)
  return (
    <div className="wrapper">
    <div>
      {data && data.length > 0?
       data.map((dataItem)=>
       <div className="item">
        <h3 className="title">{dataItem.question}</h3>
       </div>): 
      <div>There is no data</div>}
    </div>
    </div>
  );
}

export default App;
