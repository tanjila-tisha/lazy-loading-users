import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPage, getTotal, getUsers, loadUsers } from "../redux/usersReducer";
import { AppDispatch } from "../store";
import UserItem from "./UserItem";
import { User } from "../types";

const UserList = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector(getUsers);
  const page = useSelector(getPage);
  const total = useSelector(getTotal);

  const [loadMore, setLoadMore] = useState<Boolean>(true);

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  useEffect(() => {
    const handleOnScroll = () => {
      if (total === users.length) {
        setLoadMore(false);
        return;
      }
      dispatch(loadUsers(page + 1));
    };
    window.addEventListener("scroll", handleOnScroll);
    return () => {
      window.removeEventListener("scroll", handleOnScroll);
    };
  }, [dispatch, page, loadMore, total, users]);

  return (
    <div className="user-container">
      <div className="list-heading">Users</div>
      <div>
        {users.map((user: User) => (
          <UserItem
            firstName={user.first_name}
            lastName={user.last_name}
            avatar={user.avatar}
            key={`${user.id}-${user.email}`}
          />
        ))}
        {!loadMore && <p className="end-message">There are no more users</p>}
      </div>
    </div>
  );
};

export default UserList;
