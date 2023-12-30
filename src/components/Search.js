import React from "react";
import data from "./Data.js"

export default function SearchBar() {
  const [msg, setMsg] = React.useState("");
  
  const showData = function(){
    for(let i =0; i < data.length; i++){
      if(data[i].name === msg){
        return i+1;
      }
    }
    return 0
  }

  return (
    <div className="parent">
      <div className="searchBar">
        <input
          type="text"
          className="txt"
          value={msg}
          onChange={(val) => setMsg(val.target.value)}
        />
      </div>
      <div className="show">
        <p>{showData() ? `{ name : ${data[showData()-1].name}, id : ${data[showData()-1].id} }` : "User Not Found :("}</p> 
      </div>
    </div>
  );
}
