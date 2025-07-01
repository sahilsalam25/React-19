import { useState } from 'react';

const ControlledComponent = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [submittedData, setSubmittedData] = useState(null); // 🔹 NEW state
  function handleClick(event) {
    // event.preventDefault();
    setName('');
    setEmail('');
    setPassword('');
    // alert(name);
    // alert(email);
    // alert(password);

    event.preventDefault(); // stop page reload

    // Save submitted data into state
    setSubmittedData({
      name: name,
      email: email,
      password: password,
    });
    console.log('Submitted:', { name, email, password });
  }
  return (
    <>
      <h2>Controlled Component </h2>
      <form onSubmit={handleClick}>
        <input
          type="text"
          placeholder="enter name"
          onChange={(event) => setName(event.target.value)}
          value={name}
          required
        />
        <h2>Name : {name} </h2>
        <br />
        <input
          type="email"
          placeholder="enter email"
          value={email}
          onChange={() => setEmail(event.target.value)}
        />
        <h2> Email : {email} </h2>
        <br />
        <input
          type="password"
          placeholder="enter password"
          onChange={() => setPassword(event.target.value)}
          value={password}
        />
        <h2>Password :{password} </h2>
        <br />
        <button type="submit">Submit </button>
      </form>
      <hr />

      {/* ✅ Show this section only after submit */}
      {submittedData && (
        <>
          <h3>📋 Submitted Data:</h3>
          <p>
            <strong>Name:</strong> {submittedData.name}
          </p>
          <p>
            <strong>Email:</strong> {submittedData.email}
          </p>
          <p>
            <strong>Password:</strong> {submittedData.password}
          </p>
        </>
      )}
    </>
  );
};
export default ControlledComponent;
