import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/hello')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage('Unable to reach backend'));
  }, []);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: 600, margin: '3rem auto', padding: '2rem', border: '1px solid #ddd', borderRadius: '12px', textAlign: 'center' }}>
      <h1>FastAPI + React</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
