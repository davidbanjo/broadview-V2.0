// import { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import "./tab.css";
import tabData from "./tabData";

const Tab = () => {

  const { pathname } = useLocation()
  const { category } = useParams()

  // const [click, setClick] = useState(["bts_clicked", "", "", "", ""]);

  // const handleClick = (index) => {
  //   const newClick = Array(5).fill("");
  //   newClick[index] = "bts_clicked";
  //   setClick(newClick);
  // };

  return (
    <div className="bts_tab">
      <div className="bts_tab_row">
        <div className="bts_tab_col">
          <div className="bts_tab_cont">
            <Link to="/portfolio">
              <p
                className={`bts_not_clicked ${pathname === "/portfolio" ? "bts_clicked" : ""}`}
              >
                All
              </p>
            </Link>
            {tabData.map((text, index) => (
              <Link key={index} to={`/portfolio/category/${text.url}`} >
                <p
                  className={`bts_not_clicked ${category === text.url ? "bts_clicked" : ""}`}
                >
                  {text.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab;