import React from "react";
import styles from "@css/Admin.module.css";
const Admin = () => {
    return (
        <>
            <div className="heading-primary my-2 align-center ">
                Admin Verification
            </div>
            <div className={styles.root}>
                <div className={styles.container}>
                    <div className={styles.sr}>1</div>
                    <div className={styles.doc}>pan</div>
                    <div className={styles.remark}>
                        <div className="btn btn-primaryy">Verify</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Admin;
