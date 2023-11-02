import "./App.css";
import { Helmet } from "react-helmet";
import Uploader from "./components/Uploader";


function App() {
  return (
    <div className="App">
      <br></br>
      <p>PLEASE SHARE YOUR JOURNEY BY SHARING A PIC</p>
      <br></br><br></br>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Snap Upload</title>
        <meta name="description" content="S3 PIC UPLOAD" />
      </Helmet>
      <Uploader />
      <br></br><br></br><br></br><br></br>
      <p><h4>PROJECT 13 - FITNESS TRACKER</h4></p>
      <br></br><br></br>
      
      
    </div>
  );
}

export default App;




