import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>BEST PIZZAS EVAH</h1>
        <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, iusto perferendis. Ea similique recusandae velit ducimus vitae voluptas at ab quasi blanditiis unde tempora, eum obcaecati ratione, delectus libero qui?
        </p>
        <div className={styles.wrapper}>
            {pizzaList.map((pizza) => (
              <PizzaCard key={pizza._id} pizza={pizza} />
            ))}
        </div>
    </div>
  );
};

export default PizzaList;