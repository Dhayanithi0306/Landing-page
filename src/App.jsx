import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
const App= ()=>{
  return (
    <main className="overflow-x-hidden antialiased text-white bg-black">
       <Navbar/>
       <Hero/>
       <Services/>
       <Portfolio/>
       <About/>
       <ContactUs/>
       <Footer/>
   </main>
  )
}

export default App;