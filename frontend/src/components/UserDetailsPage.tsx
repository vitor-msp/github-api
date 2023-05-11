export type UserDetailsProps = {
  username: string;
  backToUsersPage: () => void;
};

export const UserDetailsPage = ({
  username,
  backToUsersPage,
}: UserDetailsProps) => {
  return (
    <>
      <button type="button" onClick={backToUsersPage}>
        back
      </button>
      <span>{username}</span>
    </>
  );
};
