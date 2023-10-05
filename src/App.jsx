import { BrowserRouter} from "react-router-dom";
import { Navbar, SideBar, Stats , Content} from './components';

const App = () => {
  return (
    <BrowserRouter>
    <div className="flex">
      <SideBar />
      <Stats />
      <div className=" text-sm font-light flex-1 h-screen rounded-2xl">
      <Navbar />
      <Content/>
      </div>
      </div>
    </BrowserRouter>
  );
}

export default App
