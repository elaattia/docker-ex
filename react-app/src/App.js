import "./App.css";

function App() {
  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h2 style={styles.h2}>
          👋 Hello, Dev Community! 🚀 [react+docker example]
        </h2>
        <p style={styles.p}>
          Join us and be part of an amazing group of developers! 💡🔥
        </p>
        <p style={styles.p}>
          💻 <strong>Le bon développeur 🇹🇳 المبرمج المناسب</strong> 💻
        </p>
        <p style={styles.p}>
          🔗{" "}
          <a
            href="https://www.facebook.com/groups/lebondeveloppeur"
            target="_blank"
            style={styles.link}
          >
            Click here to join now!
          </a>
        </p>

        <div style={styles.adBanner}>
          <a
            href="https://certificate.lebondeveloppeur.com/devops-lebondeveloppeur/devops-44h.png"
            target="_blank"
          >
            <img
              src="https://certificate.lebondeveloppeur.com/devops-lebondeveloppeur/devops-44h.png"
              alt="DevOps Training Banner"
              style={styles.adBannerImg}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

const styles = {
  body: {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    margin: "0",
    padding: "0",
    backgroundColor: "#f4f4f4",
    height: "100vh", // Ensure it takes the full height of the viewport
    display: "flex", // Center content vertically and horizontally
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    display: "inline-block",
    maxWidth: "600px",
    width: "100%", // Ensure the container is responsive
  },
  h2: {
    color: "#007BFF",
  },
  p: {
    fontSize: "18px",
    color: "#333",
  },
  link: {
    textDecoration: "none",
    color: "#ff5733",
    fontWeight: "bold",
  },
  adBanner: {
    marginTop: "20px",
  },
  adBannerImg: {
    width: "100%",
    borderRadius: "10px",
  },
};

export default App;
