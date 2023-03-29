import {useState} from "react";
import React from "react";
import InputData from "./inputfields/InputData";
import Headers from "./outputfields/Headers";
import Outputlist from "./outputfields/Outputlist";
import {sortByDate, validDate, validDist} from "../functions";

export default function Controls() {
  const [dateInp, setDateInp] = useState('');
  const [distInp, setDistInp] = useState('');
  
  const [trainList, setTrainList] = useState([]);
  const inputDateChange = ({ target }) => {
    const { value } = target;
    setDateInp(() => value);
  }      
  
  const inputDistChange = ({ target }) => {
    const { value } = target;
    setDistInp(() => value);
  } 
    
  const addData = (evt) => {
    evt.preventDefault();     
    if (validDate(dateInp) === null || validDist(distInp) === null) {
      alert('Некорректная дата либо дистанция');
      return};       
      const oldDate = trainList.find(item => item.dateValue === dateInp);
      if (oldDate) { 
        oldDate.distance = String(Number(oldDate.distance) + Number(distInp));        
      } else  trainList.push({
        dateValue: dateInp,
        distance: distInp,
      });
      let newList = (trainList.length>1) ? sortByDate(trainList) : trainList;
      setTrainList(() => newList);      
      setDateInp(() => '');
      setDistInp(() => '');            
    }
    
    return (
      <div className="container">
      <form className="form-table" onSubmit={addData}>
      <InputData headerValue="Дата (ДД.ММ.ГГ)" dataValue={dateInp} dataChange={inputDateChange} />
      <InputData headerValue="Пройдено км" dataValue={distInp} dataChange={inputDistChange}  />
      <input id="btn" className="inputfield" type="submit" value="OK"/>
      </form>
      <Headers />
      <Outputlist list={trainList} setDateInp={setDateInp} setDistInp={setDistInp} setList={setTrainList}/>
      </div>
      )
    }    