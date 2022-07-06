import React, { useState, useEffect } from "react";

import Card from "./components/Card/Card";
import Customer from "./components/Customer/Customer";

import styles from "./App.module.css";

function App() {
  const [overview, setOverview] = useState({
    balance: "",
    name: "",
    address: "",
    city: "",
    state: "",
    postal: "",
    last4: ""
  });

  const [details, setDetails] = useState({
    number: "",
    expiration: "",
    cvc: ""
  });

  const fetchData = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    const getCardOverview = async () => {
      const cardOverview = await fetchData(
        "https://run.mocky.io/v3/9761bf82-c85e-4435-a97e-20888cec9b9f"
      );
      setOverview({
        balance: cardOverview.remainingBalance,
        name: cardOverview.cardHolder,
        address: cardOverview.billingAddress,
        city: cardOverview.billingCity,
        state: cardOverview.billingState,
        postal: cardOverview.billingPostalCode,
        last4: cardOverview.last4
      });
    };
    getCardOverview();

    const getCardDetails = async () => {
      const cardDetails = await fetchData(
        "https://run.mocky.io/v3/d50e1b3b-017b-4f52-abc5-51fdde133048"
      );
      setDetails({
        number: cardDetails.cardNumber,
        expiration: cardDetails.expiration,
        cvc: cardDetails.cvc
      });
    };

    getCardDetails();
  }, []);

  const test = () => console.log(overview);

  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <h3 onClick={test}>Your Card</h3>
        <p className={styles.infoPrnt}>
          Use this card to pay for programs in your plan. Purchases will be
          visible by your manager. Is your balance too low?{" "}
          <a href='https://www.google.com' target='_'>
            Add additional funds
          </a>
        </p>
        <hr />
      </header>

      <div className={styles.infoContainer}>
        <div className={styles.cardContainer}>
          <Card cardOverview={overview} cardDetails={details} />
          <p className={styles.smallPrint}>
            Program doesn't accept cards? We can help.{" "}
            <a
              className={styles.smallPrint}
              href='https://www.google.com'
              target='_'
            >
              Contact us.
            </a>
          </p>
        </div>

        <div className={styles.overviewContainer}>
          <Customer cardOverview={overview} cardDetails={details} />
        </div>
      </div>
    </div>
  );
}

export default App;
