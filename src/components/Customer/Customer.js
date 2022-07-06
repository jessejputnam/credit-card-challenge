import styles from "./Customer.module.css";

const Customer = (props) => {
  const name = props.cardOverview.name;
  const address = props.cardOverview.address;
  const city = props.cardOverview.city;
  const state = props.cardOverview.state;
  const postal = props.cardOverview.postal;

  return (
    <div className={styles.Customer}>
      <div>
        <p className={styles.customerTitle}>CARD HOLDER</p>
        <p className={styles.customerContent}>{name}</p>
      </div>

      <div>
        <p className={styles.customerTitle}>BILLING ADDRESS</p>
        <p className={styles.customerContent}>{address}</p>
        <p
          className={styles.customerContent}
        >{`${city}, ${state} ${postal}`}</p>
      </div>
    </div>
  );
};

export default Customer;
