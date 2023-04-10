import Navigation from "./components/Navigation.jsx";
import Plans from "./components/Plans.jsx";
import styles from "./App.module.css";



const PLANS = [{title: "FREE", price: "$0/month", description: "For hobby projects or small treams", styling: "plan__features", workspave: "1 Workspace", traffic: "Unlimitted Traffic", storage: "10GB Storage", support: "Basic Support"}]

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
    </main>
  );
};

function App() {
  return (
    <div>
      <Navigation/>
      <Body />
    </div>
  );
}

export default App;
