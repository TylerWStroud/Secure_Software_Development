import React, {useState} from 'react';
import './App.css';

type ApiResponse = {
  query: string;
  rows?: Array<{id: number; username: string; role: string}>;
  result?: {success: boolean; user?: {id: number; username: string; role: string}; message?: string;};
  error?: string;
}

const backendURL = "http://localhost:4000";

function App() {
  // user, pass, profile, login response, and prof response hook states
  const [loginUser, setLoginUser] = useState('');
  const [loginPass, setLoginPass] = useState('');
  const [profileUser, setProfileUser] = useState('');
  const [loginResponse, setLoginResponse] = useState<ApiResponse | null>(null);
  const [profileResponse, setProfileResponse] = useState<ApiResponse | null>(null);

  const submitLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch(`${backendURL}/api/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ username: loginUser, password: loginPass})
    });
    setLoginResponse(await res.json());
  }

  const submitProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch(`${backendURL}/api/profile?username=${encodeURIComponent (profileUser)}`);
    setProfileResponse(await res.json());
  };

  const renderResponse = (label: string, data: ApiResponse | null) => {
    return(
    <section className="response-section">
      <header>
      <h3>{label} Response</h3>
      {data?.result && (
        <p className="response-status" style={{color: data.result.success ? 'green' : 'red', fontWeight: 'bold'}}>
          {data.result.success ? 'Success' : 'Error'}
        </p> 
      )}
      </header>

      {data ? (
        <>
          {data.rows && data.rows.length > 0 ? (
            <ul className="response-list">
              {data.rows.map((row, index) => (
                <li key={index}>{JSON.stringify(row)}</li>
              ))}
            </ul>
          ) : (
            <p>No rows found.</p>
          )}
        </>
      ):(
        <p>No response yet.</p>
      )}
    </section>
    );
  }
  return (
    <main style={{ maxWidth: 600, margin: 0}}>
      <h1>SQL Injection Demo</h1>

      <form onSubmit={submitLogin}>
        <h2>Login</h2>
        <label>Username:
          <input value={loginUser} onChange={e => setLoginUser(e.target.value)} />
        </label>
        <label>Password:
          <input type="text" value={loginPass} onChange={e => setLoginPass(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {renderResponse('Login', loginResponse)}

      <form onSubmit={submitProfile}>
        <h2>Profile Lookup</h2>
        <label>Username filter
          <input value={profileUser} onChange={e => setProfileUser(e.target.value)} />
        </label>
        <button type="submit">Fetch</button>
      </form>
      {renderResponse('Login', profileResponse)}
    </main>
  );
}

export default App;
