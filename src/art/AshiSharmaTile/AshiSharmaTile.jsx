import style from "./style.module.css";
import { Credit } from "../../components/Credit/index";


function AshiSharmaTile() {
  // Enter your name, github url and art-name below
  let data = {
    name: "",
    "gh-link": "",
    "art-name": "",
  };
  return (
    <div className={`${style.container} container`}>
      {/* DO NOT edit the line above*/}

      {/* your art blocks will come here */}
      <div>
        <div className="blocks">
        </div>

      </div>

      {/* do not edit the line below */}
      <Credit data={data} />
    </div>
  );
}

export default AshiSharmaTile;
