import React, { useState } from 'react';
/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/

function TodoItem( {item} ) {
  const [color,setColor]=useState("")
const onChangeColor=()=>{
if(color==="")
setColor("has-text-grey-light")
if(color==="has-text-grey-light")
setColor("")
}
  return (
    <label className="panel-block"  >
      <input type="checkbox" onClick={onChangeColor}/>
      
      <span className={color}>{item.text}</span>
    </label>
  );
}

export default TodoItem;