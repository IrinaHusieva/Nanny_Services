import Header from "./header/Header";
import Hero from "./hero/Hero";
import css from "./common.module.css";

export const App = () => {
  return (
    <div className={css.container}>
      <div className={css.backgroundContainer}>
        <Header />
        <Hero />
      </div>
      </div>
  );
};
