import React from "react";
import "./global.scss";
import Nav from "./component/Nav/Nav.jsx";
import Footer from "./component/Footer/Footer.jsx";
import Card from "./component/Card/Card.jsx";
import Form from "./component/Form/Form.jsx"

function App() {
    return (
        <div>
            <Nav />
            {/* <Card /> */}
            <Form />
            <Footer />
        </div>
    );
}

export default App;