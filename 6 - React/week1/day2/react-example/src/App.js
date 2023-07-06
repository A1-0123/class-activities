import React from "react";
import "./global.scss";
import Nav from "./component/Nav/Nav.jsx";
import Footer from "./component/Footer/Footer.jsx";
import Hero from "./component/Hero/Hero.jsx";
import About from "./component/About/About.jsx";
import Contact from "./component/Contact/Contact.jsx";

function App() {
    return (
        <div>
            <Nav />
            <Hero />
            <About />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;