import Navigation from "./components/Navigation.jsx";
import Plans from "./components/Plans.jsx";
import Features from "./components/Features.jsx";
import styles from "./App.module.css";

const Body = () => {
  return (
    <main>
      <section id={styles["product-overview"]}>
        <h1>Get the freedom you deserve.</h1>
      </section>
      <section id={styles.plans}>
        <h1 className={styles["section-title"]}>Choose your plan</h1>
        <Plans />
      </section>
      <Features/>
    </main>
  );
};

function App() {
  return (
    <div>
      <Navigation />
      <Body />
    </div>
  );
}

export default App;
