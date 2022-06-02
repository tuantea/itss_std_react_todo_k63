import React, { useState } from 'react';
/* 
  【inputコンポーネント】
　・新しいTodoを作成するINPUTフィールドを作成するコンポーネント
　・Enterをクリックされたら入力された文字を使って新しいTodoを作成する
*/
function Input({addItem}  ) {
  const [text, setText] = useState('');
  const handleKeyDown = e => {
    if (e.keyCode === 13) {
      addItem(text);
      setText('');
    }
  };
  const handleChange = e => setText(e.target.value);
  return (
    <div className="panel-block">
    <input
      class="input"
      type="text"
      placeholder="Todoを入力してください"
      value={text}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  </div>
  );
}

export default Input;
