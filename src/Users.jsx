import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [setDelete, run] = useState(0);
  const element1 = (
    <FontAwesomeIcon
      style={{
        color: "red",
      }}
      icon={faTrash}
    />
  );
  const element2 = (
    <FontAwesomeIcon
      style={{
        color: "brown",
      }}
      icon={faEdit}
    />
  );
  const showUser = users.map((user, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
        <Link to={`${user.id}`}>{element2}</Link>
        <Link
          onClick={() => deleteUser(user.id)}
          style={{
            margin: " 0 15px",
          }}
        >
          {element1}
        </Link>
      </td>
    </tr>
  ));

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/user/show")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, [setDelete]);
  async function deleteUser(id) {
    const res = await axios.delete(
      `http://127.0.0.1:8000/api/user/delete/${id}`
    );
    if (res.status === 200) {
      run((prev) => prev + 1);
    }
  }

  return (
    <>
      <table className="table table-primary">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="tbody">{showUser}</tbody>
      </table>
    </>
  );
}
