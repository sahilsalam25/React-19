import React, { useActionState } from "react";

function UseAction() {
  async function handleSubmit(previousData, formData) {
    // console.log("data", data);
    // console.log("action", action);
    // console.log("pending", pending);
    let name = formData.get("name");
    let password = formData.get("password");
    await new Promise((res) => setTimeout(res, 2000));
    // console.log(`Name : ${name}\n Password : ${password}`);
    if (name && password) {
      return { message: "data is submitted", name, password };
    } else {
      return { error: "Error to load data", name, password };
    }
  }
  const [data, action, pending] = useActionState(handleSubmit, undefined);
  console.log("data", data);

  return (
    <div>
      <h2>Use Action</h2>
      <form action={action}>
        <input type="text" placeholder="Enter text" name="name" />
        <input type="password" placeholder="Enter password" name="password" />
        <button onClick={handleSubmit} disabled={pending}>
          {pending ? "Submitting..." : "Submitted"}
        </button>
      </form>
      {data?.error && <span style={{ color: "red" }}>{data?.error}</span>}
      {data?.message && <span style={{ color: "green" }}>{data?.message}</span>}
      <hr />

      <h4>Name :{data?.name}</h4>
      <h4>Password :{data?.password}</h4>
    </div>
  );
}

export default UseAction;
