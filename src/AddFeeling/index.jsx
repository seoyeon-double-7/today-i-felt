import React from 'react';
import './style.css';
import RadioFeeling from './RadioFeeling';

class AddFeeling extends React.Component {
  render() {
    const now = new Date();
    return (
      <div className="add-feeling">
        <div>날짜</div>
        <div className="inline-field">
          <input
            type="text"
            name="date"
            readOnly
            value={`${now.getFullYear()}. ${now.getMonth() + 1}. ${now.getDate()}`}
          />
        </div>
        <div>날씨</div>
        <div className="inline-field">
          <input type="text" name="weather" />
        </div>
        <div>기분</div>
        <div className="feeling-list">
          <RadioFeeling feeling="good" />
          <RadioFeeling feeling="nice" />
          <RadioFeeling feeling="angry" />
          <RadioFeeling feeling="disappointed" />
          <RadioFeeling feeling="sad" />
        </div>
        <div>있었던 일</div>
        <div className="what-happened"><textarea /></div>
      </div>
    );
  }
}

export default AddFeeling;
