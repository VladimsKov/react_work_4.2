import { handleDataFunc } from "../../functions"
export default function TrainElem({el, list, setForm, setList}) {
    
    return (
        <li className="form-table" onClick={handleDataFunc(list, setForm, setList)}>
        <div className="form-elem">{el.value.dateValue.slice(0,6) + "20" + el.value.dateValue.slice(6)}</div>
        <div className="form-elem">{el.value.distance}</div>
        <div className="form-table">
        <button className="cng-btn form-btn"></button>
        <button className="del-btn form-btn" ></button>
        </div>            
        </li>
        )
    }