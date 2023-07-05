// ReactDOM.createRoot(document.getElementById("root")).render(
//     React.createElement("h1", { id: "title", className: "title" }, "Hello Devs!")
// );

function Header() {
    return <nav >
        <ul>
            <li id="logo">Logo</li>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
}

function Footer(){
    return <footer >
        <p id="footer">CopyRight 2023</p>
    </footer>
}

function PostCard() {
    return <div className="post-card">
        <h2>Post Title</h2>
        <p>Post Description</p>
        <button>Read More</button>
    </div>
}

function Hero() {
    return <section>
        <h1>Hero</h1>
        <p>Cillum id id esse ut anim. Nulla irure proident proident ad ea labore duis consectetur. Ad voluptate elit nisi ea quis laboris amet esse irure adipisicing cillum ex nisi. Laborum sit nostrud duis voluptate culpa elit exercitation cupidatat laborum anim deserunt veniam et ex. Labore eu laborum ex mollit aliqua pariatur sit ea fugiat cillum veniam laborum irure enim. Sit magna irure non excepteur ut laborum labore ex.</p>
        <button id="btn">Discover!</button>
    </section>
}

function App() {
    return <div>
        <Header />
        <Hero />
        <PostCard />
        <PostCard />
        <Footer />
    </div>
}

ReactDOM.render(<App />, document.getElementById("root"));