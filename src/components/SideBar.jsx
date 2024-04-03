import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <>
      <div class="d-flex flex-column">
        <Link className="users" to="Users">
          users
        </Link>
      </div>
    </>
  );
}
