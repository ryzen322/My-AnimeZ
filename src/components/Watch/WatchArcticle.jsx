import { useState } from "react";
import NavLinkInfo from "./NavLinkInfo";
import Overview from "../Overview";
import Relation from "../Relation";
import Character from "../Character";

const WatchArcticle = ({ loading, data = {} }) => {
  const [active, setActive] = useState("Character");

  function activeFunc(text) {
    setActive(text);
  }

  return (
    <article className=" w-full px-3 font-Roboto">
      <ul className=" flex  ">
        <NavLinkInfo
          activeElement={active === "Overview" ? true : false}
          text="Overview"
          activeFunc={activeFunc}
        />
        <NavLinkInfo
          activeElement={active === "Relation" ? true : false}
          text="Relation"
          activeFunc={activeFunc}
        />
        <NavLinkInfo
          activeElement={active === "Character" ? true : false}
          text="Character"
          activeFunc={activeFunc}
        />
        <NavLinkInfo
          activeElement={active === "Staff" ? true : false}
          text="Staff"
          activeFunc={activeFunc}
        />
        <NavLinkInfo
          activeElement={active === "Review" ? true : false}
          text="Review"
          activeFunc={activeFunc}
        />
      </ul>
      {active === "Overview" ? <Overview loading={loading} data={data} /> : ""}
      {active === "Relation" ? <Relation loading={loading} data={data} /> : ""}
      {active === "Character" ? (
        <Character loading={loading} data={data} />
      ) : (
        ""
      )}
    </article>
  );
};

export default WatchArcticle;
