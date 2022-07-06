import React, { useState } from "react";

import styles from "./Card.module.css";

import copy from "../../copy.png";

const Card = (props) => {
  const [showInfo, setShowInfo] = useState(false);

  const number = props.cardDetails.number;
  const cvc = props.cardDetails.cvc;
  const exp = props.cardDetails.expiration;
  const balance = props.cardOverview.balance;

  const realNumber = `${number.slice(0, 4)} ${number.slice(
    4,
    8
  )} ${number.slice(8, 12)} ${number.slice(12)}`;

  const fakeNumber = "**** **** **** 1234";

  const showNumber = (e) => {
    setShowInfo(true);
  };

  const showBtn = (
    <button className={styles.btn} onClick={showNumber}>
      SHOW CARD INFORMATION
    </button>
  );
  const cardInfo = (
    <div className={styles.cardInfo}>
      <div>
        <p className={styles.infoTitle}>CVC:</p>
        <p className={styles.infoContent}>{cvc}</p>
      </div>
      <div>
        <p className={styles.infoTitle}>EXP:</p>
        <p className={styles.infoContent}>{exp}</p>
      </div>
    </div>
  );

  const copyNum = () => {
    navigator.clipboard.writeText(realNumber);
  };

  const copyBtn = (
    <button className={styles.copyBtn} onClick={copyNum}>
      <img src={copy} alt='Copy' height={16}></img>
    </button>
  );
  return (
    <div className={styles.Card}>
      <div>
        <p className={styles.balanceTitle}>REMAINING BALANCE</p>
        <h1>${balance.toLocaleString()}</h1>
      </div>

      <div className={styles.numbersContainer}>
        <div>
          <p className={styles.ccnumber}>
            {showInfo ? realNumber : fakeNumber}
          </p>
          {showInfo ? copyBtn : null}
        </div>
        {!showInfo ? showBtn : cardInfo}
      </div>
    </div>
  );
};

export default Card;
