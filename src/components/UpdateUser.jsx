import axios from "axios";
import { useEffect, useState } from "react";

export default function UpdateUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [passR, setPassR] = useState("");
  const [accept, setAccept] = useState(false);

  const id = window.location.pathname.split("/").slice(-1)[0];
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/user/showbyid/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setName(data[0].name);
        setEmail(data[0].email);
      })
  }, []);

  async function submit(e) {
    let flag = true;
    e.preventDefault();
    setAccept(true);

    if (name === "" || pass.length < 8 || passR !== pass) {
      flag = false;
    } else {
      flag = true;
    }

    try {
      if (flag) {
        let res = await axios.post(
          `http://127.0.0.1:8000/api/user/update/${id}`,
          {
            name: name,
            email: email,
            password: pass,
            password_confirmation: passR,
          }
        );

        if (res.status === 200) {
          window.localStorage.setItem("email", email);
          window.location.pathname = "/Dashboard/Users";
        }
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <form className="father " onSubmit={submit}>
        <label htmlFor="name">Name:</label>
        <input
          className="field  form-control "
          type="text"
          id="name"
          placeholder="name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {name === "" && accept && <p>user name is required</p>}
        <label htmlFor="email"> Email:</label>
        <input
          className="field  form-control"
          type="email"
          id="email"
          placeholder="Email..."
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="pass">password:</label>
        <input
          className="field  form-control"
          type="password"
          id="pass"
          placeholder="password..."
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        {pass.length < 8 && accept && <p>password must be more than 8 char</p>}
        <label htmlFor="repass">repassword:</label>
        <input
          className="field  form-control"
          type="password"
          id="repass"
          placeholder="repassword..."
          value={passR}
          onChange={(e) => setPassR(e.target.value)}
        />
        {passR !== pass && accept && <p>plz enter same password</p>}
        <button
          type="submit"
          style={{
            width: "150px",
            margin: "0 auto",
          }}
        >
          Update
        </button>
      </form>
    </>
  );
}
