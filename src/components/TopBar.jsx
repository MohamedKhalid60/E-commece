import { Link } from "react-router-dom";

export default function TopBar() {
  return (
    <>
      <section className="topBar">
        <div className="container-fluid">
          <div className="row justify-content-between text-center">
            <div className="col-xl-3 ">
              <h2>DashBoard</h2>
            </div>
            <div className="col-xl-3">
              <Link to={"/"} className="btn btn-primary">
                return to store
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
