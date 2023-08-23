import Tooltip from "./tooltip";
import './index.css';


function App (){
    return (
        <div className="container">
            <Tooltip text="This is a tooltip! " direction="bottom">
        <button className="button">Hover Bottom</button>
      </Tooltip>
            <Tooltip text="This is a tooltip!" direction="top">
        <button className="button">Hover Top</button>
      </Tooltip>
            <Tooltip text="This is a tooltip!" direction="right">
        <button className="button">Hover Right</button>
      </Tooltip>
            <Tooltip text="This is a tooltip!" direction="left">
        <button className="button">Hover Left</button>
      </Tooltip>
        </div>
    )
}
export default App;