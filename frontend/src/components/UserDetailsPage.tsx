import { Details } from "./Details";
import { Repos } from "./Repos";

type UserDetailsPageProps = {
  username: string;
  backToUsersPage: () => void;
};

export const UserDetailsPage = ({
  username,
  backToUsersPage,
}: UserDetailsPageProps) => {
  return (
    <>
      <div>
        <button
          type="button"
          onClick={backToUsersPage}
          className="btn btn-outline-primary my-3"
        >
          {"<< back"}
        </button>
      </div>
      <Details username={username} />
      <Repos username={username} />
    </>
  );
};
