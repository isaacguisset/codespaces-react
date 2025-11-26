import './App.css';

function App() {
  return (
    <div>
      <header style={{ backgroundColor: "red", padding: "50px" }}>
        <h1 style={{ color: "white", textAlign: "center" }}>ISAAC GUISSET PRÀCTICA</h1>
        <h2 style={{ color: "blue", textAlign: "center", textShadow: "white 2px 2px" }}>
          llenguatge de marques
        </h2>
      </header>

      <main
        style={{
          backgroundColor: "blue",
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
          margin: "20px",
        }}
      >
        <div
          id="boxes"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
            flex: 1,
          }}
        >
          <div
            className="box"
            style={{
              backgroundColor: "rgb(114,188,245)",
              color: "white",
              boxShadow: "5px 5px 5px black",
              textAlign: "center",
              padding: "25px",
              flex: "1 1 250px",
              maxWidth: "400px",
            }}
          >
            <h1>Primera caixa</h1>
            <p>Aquí podem posar el contingut que volguem sobre la secció</p>
          </div>

          <div
            className="box"
            style={{
              backgroundColor: "rgb(114,188,245)",
              color: "white",
              boxShadow: "5px 5px 5px black",
              textAlign: "center",
              padding: "25px",
              flex: "1 1 250px",
              maxWidth: "400px",
              position: "relative",
            }}
          >
            <div
              className="rodona"
              style={{
                padding: "15px",
                height: "15px",
                width: "15px",
                backgroundColor: "white",
                borderRadius: "100px",
                border: "solid black",
                position: "absolute",
                top: "-15px",
                right: "-15px",
              }}
            >
              ⭐
            </div>

            <h1>Segona caixa</h1>
            <p>Aquí podem posar el contingut que volguem sobre la secció</p>
          </div>

          <div
            className="box"
            style={{
              backgroundColor: "rgb(114,188,245)",
              color: "white",
              boxShadow: "5px 5px 5px black",
              textAlign: "center",
              padding: "25px",
              flex: "1 1 250px",
              maxWidth: "400px",
            }}
          >
            <h1>Tercera caixa</h1>
            <p>Aquí podem posar el contingut que volguem sobre la secció</p>
          </div>
        </div>

        <aside
          style={{
            backgroundColor: "brown",
            padding: "55px",
            height: "450px",
            width: "250px",
            flexShrink: 0,
            color: "white",
          }}
        >
          <h1>ASIDE</h1>
          <p>Aquí pot haver-hi informació estàtica.</p>

          <img
            className="imatge"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/UbuntuCoF.svg/512px-UbuntuCoF.svg.png"
            height="100"
            width="100"
            alt="Logo Ubuntu"
            style={{ backgroundColor: "white", margin: "15px", padding: "5px" }}
          />

          <img
            className="imatge"
            src="https://raw.githubusercontent.com/docker-library/docs/b449be7df57e9ed9086bb5821bfb5d6cdc5d67a4/debian/logo.png"
            height="100"
            width="100"
            alt="Logo Debian"
            style={{ backgroundColor: "white", margin: "15px", padding: "5px" }}
          />
        </aside>
      </main>

      <footer
        style={{
          backgroundColor: "white",
          padding: "25px",
          textAlign: "center",
        }}
      >
        <p>© 2025 Isaac Guisset Sànchez · Tots els drets reservats</p>
      </footer>
    </div>
  );
}

export default App;
