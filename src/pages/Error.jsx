import {useLocation} from "react-router-dom";

const Error = (props) => {
  let location = useLocation();
  return <div className={"main container"}>
    <div className={"error container"}>
      <h1>Error: Page Not Found</h1>
      <h2>LOG:</h2>
      <div className={"log"}>
        <p className={"code"}>console.error( <span>"Playground is Under construction"</span> )</p>
        <p className={"code"}>Nothing found on <span>{location.pathname}</span></p>
        <p className={"code"}>project exited with error code 1</p>
        <p className={"code"}>...</p>
      </div>
      <a href={"/"}>Return to Home</a>
    </div>

    <h1 className={"background_text"}>404</h1>
  </div>
}

export default Error;