import React from 'react';
import NotificationList from './comp/NotificationList';  // NotificationList 컴포넌트 import

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>알림 목록</h1> {/* 제목 추가 */}
        <NotificationList /> {/* NotificationList 컴포넌트 렌더링 */}
      </header>
    </div>
  );
}

export default App;
