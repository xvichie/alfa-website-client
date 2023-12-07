import ContactUsComponent from "./components/ContactUsComponent/ContactUsComponent";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Outlet } from 'react-router-dom';



function App() {

  return (
    <div className="App">
        <Header></Header>
        <Outlet></Outlet>
        <ContactUsComponent></ContactUsComponent>
        <Footer></Footer>
    </div>
  );
}

export default App;
