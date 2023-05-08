import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src="/img/bg.png" alt="" style={{objectFit: "cover"}} priority={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill />
            </div>
            <div className={styles.item}>
                <div className={styles.card}>
                    <h2 className={styles.motto}>
                        AT JEY PIZZA, EAT THE BEST PIZZAS EVAH
                    </h2>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
                    <p className={styles.text}>1 rue de la paix, 75002 Paris</p>
                    <p className={styles.text}>1 rue Washingtson, 75008 Paris</p>
                    <p className={styles.text}>1 rue de Rivoli, 75001 Paris</p>
                    <p className={styles.text}>1 rue de la Roquette, 75011 Paris</p>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>WORKING HOURS</h1>
                    <p className={styles.text}>
                        MONDAY UNTIL FRIDAY
                        <br />11:00 - 0:00
                    </p>
                    <p className={styles.text}>
                        SATURDAY - SUNDAY
                        <br />11:00 - 1:00
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;