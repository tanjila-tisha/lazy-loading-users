import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import { getPage, getTotal, getUsers, loadUsers } from "../redux/usersReducer";
import { AppDispatch } from "../store";
import UserItem from "./UserItem";
import "../index.css";
import { useEffect } from "react";
import Loader from "./Loader";

const UserList = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();

  const users = useSelector(getUsers);
  const page = useSelector(getPage);
  const total = useSelector(getTotal);

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  return (
    <div>
      <div className="list-heading">Users</div>
      <InfiniteScroll
        dataLength={total}
        next={() => dispatch(loadUsers(page + 1))}
        hasMore={!(users.length === total)}
        endMessage={<p className="end-message">Yay! You have seen it all</p>}
        loader={
          <div className="loading-message" key={0}>
            <Loader />
          </div>
        }
      >
        {users.map((user) => (
          <UserItem
            firstName={user.first_name}
            lastName={user.last_name}
            avatar={user.avatar}
            key={`${user.id}-${user.email}`}
          />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default UserList;
