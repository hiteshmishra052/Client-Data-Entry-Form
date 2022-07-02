import "./Widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import PriorityHighOutlinedIcon from '@mui/icons-material/PriorityHighOutlined';
import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined';

const Widget = ({ type }) => {
  let data;

  const diff = 20;

  switch (type) {
    case "total profiles":
      data = {
        title: "Total Profiles",
        link: "See all profiles",
        number: "190",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "goldenrod",
              backgroundColor: "rgba(218, 165, 32, 0.2)",
            }}
          />
        ),
      };
      break;
    case "high priority":
      data = {
        title: "High Priority",
        link: "View high priority profiles",
        number: "10",
        icon: (
          <PriorityHighOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(255, 0, 0, 0.2)",
              color: "crimson",
            }}
          />
        ),
      };
      break;
    case "allocated":
      data = {
        title: "Allocated",
        link: "View allocated profiles",
        number: "100",
        icon: (
          <DoneAllOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.number}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;