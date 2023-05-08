import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";
import Link from "next/link";

const PizzaCard = ({ pizza }) => {
  return (
    <div className={styles.container}>
      <Link href={`/product/${pizza._id}`} passHref>
        <Image src={pizza.image} alt="" width="200" height="200" />
      </Link>
      <h1 className={styles.title}>{pizza.title}</h1>
      <span className={styles.price}>Starting at {pizza.prices[0]}€</span>
      <p className={styles.desc}>{pizza.description}</p>
    </div>
  );
};

export default PizzaCard;