import "./App.css";
import Youtube from "./Youtube/Youtube";
import Test from "./Youtube/tests/Test";
import Google from "./Youtube/tests/Google";
import Header from "./Youtube/header/Header";
import Ushtrime from "./Youtube/tests/Ushtrime";
import Positon from "./Youtube/tests/Positon";
import Sidebar from "./Youtube/sidebar/Sidebar";

function App() {
  //<Youtube/>
  //<Header/>
  //<Ushtrime/>
  return (
    <>
      <Header />
      <Sidebar />
      <Youtube />
    </>
  );
}

export default App;
