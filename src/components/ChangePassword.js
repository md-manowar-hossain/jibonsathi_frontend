import * as React from "react";
import male from "../assests/images/male.svg";
import styles from "../assests/css/ChangePassword.module.css";
import { useNavigate } from "react-router-dom";

export default function ChangePassword() {
  //   const navigate = useNavigate();
  //   const register = () => {
  //     navigate("/register");
  //   };

  //   const login = () => {
  //     navigate("/dashboard");
  //   };
  return (
    <>
      <div className={styles.contentWrapper}>
        <h1>Account Settings</h1>
        <div className={styles.CardContainer}>
          <div className={styles.card}>
            <div className={styles.title}>
              <div>Change Password</div>
            </div>
            <div>
              <label>Old Password:</label>
              <input
                type="password"
                name="old_password"
                placeholder="Old Password"
              />
            </div>
            <div>
              <label>New Password:</label>
              <input
                type="password"
                name="new_password"
                placeholder="New Password"
              />
            </div>
            <div>
              <label>Confirm New Password:</label>
              <input
                type="password"
                name="confirm_new_password"
                placeholder="Confirm New Password"
              />
            </div>

            <div className={styles.login}>
              <button>Update</button>
            </div>
          </div>

          <div className={styles.deleteBiodataContainer}>
            <div className={styles.deleteBiodataWrapper}>
              <h4>Delete Biodata</h4>
              <div className={styles.deleteBiodataWarning}>
                This action will be permanenty deleted your biodata and never be
                restored.
              </div>
              <div className={styles.deleteBiodataCommitment}>
                <input type="checkbox" id="commitment" />
                <label htmlFor="commitment">
                  I understood and would like to delete this biodata.
                </label>
              </div>
              <div className={styles.deleteBiodataBtnWrapper}>
                <button>Delete Biodata</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
