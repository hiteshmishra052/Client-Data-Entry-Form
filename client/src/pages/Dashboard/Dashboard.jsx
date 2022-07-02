import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import "./Dashboard.scss";
import Widget from "../../Components/Widget/Widget";
import Featured from "../../Components/Featured/Featured";
import Chart from "../../Components/Chart/Chart";
import Table from "../../Components/Table/Table";
import Client from "../../Components/ClientForm/Client";

const Dashboard = () => {
  return (
    <>
      <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        
        {/* <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div> */}
        <div className="listContainer">
          <div className="Client-Form " >Client Data Entry Form</div>
          <hr />
          <Client />
        </div>
      </div>
    </div>
    </>
  )
}

export default Dashboard