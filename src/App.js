import './App.css';
import Banner from './Components/Banner';
import Bussiness_Partner from './Components/BussinessPartner';
import Image_Slider from './Components/Image_Slider';
import Links from './Components/Links';
import Navbar from './Components/Navbar';
import News from './Components/News_Company';
import Quick_Access from './Components/Quick_Access';
import Text_slider from './Components/Text_slider';
import Top_Header from './Components/Top_header';

function App() {
  return (
    <>
  <Top_Header/>
  <Navbar/>
  <Image_Slider/>
  <Text_slider/>
  <Quick_Access/>
  <Banner/>
  <Links/>
  <News/>
  <Bussiness_Partner/>
    </>
  );
}

export default App;
