import React from 'react';
import './style.css';

class AddFeeling extends React.Component {
  render() {
    return (
      <div className="add-feeling">
        <div>날짜</div>
        <div>2022. 11. 29</div>
        <div>날씨</div>
        <div>맑음</div>
        <div>기분</div>
        <div>
          <input type="radio" />
        </div>
        <div>있었던 일</div>
        <div className="what-happened"><textarea /></div>
      </div>
    );
  }
}

export default AddFeeling;
