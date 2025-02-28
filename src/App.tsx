import Alert from "../src/components/Alert/Alert";
import {
  AlertTriangle,
  Ban,
  Bell,
  CheckCheck,
  Info,
  Triangle,
} from "lucide-react";
import "./App.css";
function App() {
  return (
    <>
      <Alert type={"alert-error"} icon={<Ban size={20} />} title={"hello"}>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
          adipisci esse mollitia non debitis saepe, sit sapiente aperiam dolor.
          Alias quisquam minima beatae consequatur rerum praesentium magni at
          fugiat itaque <a href="/"> this is the link this child </a>
        </p>
      </Alert>
      <Alert
        type={"alert-success"}
        icon={<CheckCheck size={20} />}
        title={"hello"}
        description=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
        adipisci esse mollitia non debitis saepe, sit sapiente aperiam dolor.
        Alias quisquam minima beatae consequatur rerum praesentium magni at
        fugiat itaque?"
      />
      <Alert
        type={"alert-info"}
        icon={<Info size={20} />}
        title={"hello"}
        description=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
        adipisci esse mollitia non debitis saepe, sit sapiente aperiam dolor.
        Alias quisquam minima beatae consequatur rerum praesentium magni at
        fugiat itaque?"
      />
      <Alert
        type={"alert-warning"}
        icon={<Triangle size={20} />}
        title={"hello"}
        description=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
        adipisci esse mollitia non debitis saepe, sit sapiente aperiam dolor.
        Alias quisquam minima beatae consequatur rerum praesentium magni at
        fugiat itaque?"
      />
      <Alert
        type={" alert-default"}
        icon={<Bell size={20} />}
        title={"hello"}
        description=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
        adipisci esse mollitia non debitis saepe, sit sapiente aperiam dolor.
        Alias quisquam minima beatae consequatur rerum praesentium magni at
        fugiat itaque?"
      />
    </>
  );
}

export default App;
