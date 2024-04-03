import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import Users from "./Users";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <>
      <section className="dashboard-body">
        <div className="container-fluid">
          <TopBar />
          <div className="row justify-content-between ">
            <div className="col-xl-3 ">
              <div className="item">
                <SideBar />
              </div>
            </div>
            <div className="col-xl-9 text-center">
              <div className="card-item">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
