import React from "react";
import styles from "@css/About.module.css";

const page = () => {
    return (
        <div className={styles.root}>
            <div className={`${styles.name} align-center`}>
                <div>Name :</div>
                <span>xyz</span>
            </div>
            <div className={`${styles.email} align-center`}>
                <div>E-mail :</div>
                <span>xyz@</span>
            </div>
            <div className={`${styles.Mobile} align-center`}>
                <div>Mobile No :</div>
                <span>123</span>
            </div>
            <div className={`${styles.address} align-center`}>
                <div>Address :</div>
                <span>man 123</span>
            </div>
            <div className={`${styles.issue} align-center`}>
                <div>Key issues :</div>
                <span>X</span>
            </div>
            <div className={`${styles.Pan} align-center`}>
                <div>Pan number :</div>
                <span>123</span>
            </div>
            <div className={`${styles.Regno} align-center`}>
                <div>Registeration number :</div>
                <span>123</span>
            </div>
            <div className={`${styles.type} align-center`}>
                <div>Type of NGO :</div>
                <span>X</span>
            </div>
        </div>
    );
};

export default page;
