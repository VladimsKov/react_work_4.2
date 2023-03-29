import { v4 as uuidv4 } from 'uuid';
import TrainElem from './TrainElem';

export default function Outputlist({list, setDateInp, setDistInp, setList}) {
  let listIdx = null;
  if (list.length>0) {
    listIdx = list.map(item => { 
      return ({
        id: uuidv4(),
        value: item 
      }) 
    })
  }
  return (
    <ul className="output-block">
    {
      listIdx? listIdx.map((el) =>
      <TrainElem key={el.id} el={el} list={list} setDateInp={setDateInp} setDistInp={setDistInp} setList={setList}/> 
      ) : "" 
    }
    </ul>
    )
  }