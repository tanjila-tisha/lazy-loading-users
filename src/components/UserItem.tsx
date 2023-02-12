export interface UserProps {
  firstName: string;
  lastName: string;
  avatar: string;
}

const User = ({ firstName, lastName, avatar }: UserProps): JSX.Element => {
  return (
    <div className="userItem-container">
      <img src={avatar} alt="userPic" className="user-avatar" />
      <div className="user-name">
        {firstName} {lastName}
      </div>
    </div>
  );
};

export default User;
