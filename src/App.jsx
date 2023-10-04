import { BrowserRouter} from "react-router-dom";
import { Navbar, SideBar } from './components';

const App = () => {
  return (
    <BrowserRouter>
    <div className="flex">
      {/* <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center"> */}
      <SideBar />
    {/* </div> */}
    {/* <div className={`w-72 h-screen bg-blue-500 relative`}>SideBar</div> */}
      <div className="p-7 text-2xl font-semibold flex-1 h-screen"><Navbar /></div>
        
        {/* <SideBar /> */}
        </div>
    </BrowserRouter>
  );
}

export default App
