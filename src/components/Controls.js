import {useState} from "react";
import React from "react";
import InputData from "./inputfields/InputData";
import Headers from "./outputfields/Headers";
import Outputlist from "./outputfields/Outputlist";
import {sortByDate} from "../functions";

let dataVal= {
  dateValue: "",
  distance: "" 
}

export default function Controls() {
  const [form, setForm] = useState({
    dateValue: '',
    distance: '',
  });
  const [trainList, setTrainList] = useState([]);
  
  const inputDataChange = function(name) {        
    return (
      ({ target }) => {
        const { value } = target;
        dataVal[name] = value;
        setForm(prev => ({ ...prev, [name]: value }));
      })      
    }    
    
    const addData = (evt) => {
      evt.preventDefault();
      setForm(prev => ({ ...prev, dateValue: dataVal.dateValue, distance: dataVal.distance}));
      const oldDate = trainList.find(item => item.dateValue === form.dateValue);
      if (oldDate) { 
        oldDate.distance = String(Number(oldDate.distance) + Number(form.distance));        
      } else  trainList.push(form);
      let newList = (trainList.length>1) ? sortByDate(trainList) : trainList;
      setTrainList(() => newList);            
    }
    
    return (
      <div className="container">
      <form className="form-table" onSubmit={addData}>
      <InputData headerValue="Дата (ДД.ММ.ГГ)" dataValue={form.dateValue} dataChange={inputDataChange('dateValue')} />
      <InputData headerValue="Пройдено км" dataValue={form.distance} dataChange={inputDataChange('distance')}  />
      <input id="btn" className="inputfield" type="submit" value="OK"/>
      </form>
      <Headers />
      <Outputlist list={trainList} setForm={setForm} setList={setTrainList}/>
      </div>
      )
    } 
    
    
    