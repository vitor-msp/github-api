import { useState } from "react";
import { UsersPage } from "./components/UsersPage";
import { UserDetailsPage } from "./components/UserDetailsPage";

const USERS_PAGE = "users";
const USER_DETAILS_PAGE = "user-details";

export const App = () => {
  const [currentPage, setCurrentPage] = useState<string>(USERS_PAGE);
  const [currentUsername, setCurrentUsername] = useState<string>("");

  const selectUser = (username: string) => {
    setCurrentUsername(username);
    setCurrentPage(USER_DETAILS_PAGE);
  };

  const backToUsersPage = () => {
    setCurrentUsername("");
    setCurrentPage(USERS_PAGE);
  };

  return (
    <div className="container-fluid p-3">
      <h4>GitHub API Consumer</h4>
      {(currentPage === USER_DETAILS_PAGE && (
        <UserDetailsPage
          username={currentUsername}
          backToUsersPage={backToUsersPage}
        />
      )) || <UsersPage selectUser={selectUser} />}
    </div>
  );
};
