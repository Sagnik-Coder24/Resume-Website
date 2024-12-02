import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Dark Themed Website</h1>
        <nav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="home">
          <h2>Home</h2>
          <p>This is the home section of the dark-themed website.</p>
        </section>
        <section id="about">
          <h2>About</h2>
          <p>This is the about section of the dark-themed website.</p>
        </section>
        <section id="services">
          <h2>Services</h2>
          <p>This is the services section of the dark-themed website.</p>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <p>This is the contact section of the dark-themed website.</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 My Dark Themed Website</p>
      </footer>
    </div>
  );
}

export default App;
