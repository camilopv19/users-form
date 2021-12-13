import { useEffect, useState } from "react";
import { IUser } from "../Helpers/IUser";
import { getUsers } from "../Helpers/server";
import Card from "../UI/Card";
import styles from "./UsersList.module.css";
import { Link } from "react-router-dom";

const UsersList = () => {
  const [usersList, setUsersList]: [IUser[], (users: IUser[]) => void] =
    useState<IUser[]>([]);

  useEffect(() => {
    getUsers().then((users: IUser[]) => setUsersList(users));
  }, []);

  return (
    <>
      <Card className={styles.users}>
        <ul>
          {usersList.map(
            ({
              city,
              country,
              dateOfBirth,
              email,
              firstName,
              id,
              lastName,
              mobile,
            }: IUser) => (
              <li key={id}>
                <p>
                  <b>Full name:</b> {firstName} {lastName}
                </p>
                <p>
                  <b>Email:</b> {email}
                </p>
                <p>
                  <b>City:</b> {city}
                </p>
                <p>
                  <b>Country:</b> {country}
                </p>
                <p>
                  <b>DOB: </b> {dateOfBirth}
                </p>
                <p>
                  <b>Phone: </b> {mobile}
                </p>
              </li>
            )
          )}
          <br />
          <Link to="/">Add another user</Link>
        </ul>
      </Card>
    </>
  );
};

export default UsersList;
