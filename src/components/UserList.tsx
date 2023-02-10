import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, loadUsers } from "../redux/usersReducer";
import { AppDispatch } from "../store";
import UserItem from "./UserItem";
import "../index.css";

const UserList = (): JSX.Element => {
    const dispatch = useDispatch<AppDispatch>();

    const users = useSelector(getUsers);

    useEffect(() => {
        dispatch(loadUsers());
    }, [dispatch]);

    const onScroll = () => {
       /* const scrollTop = document.documentElement.scrollTop
        const scrollHeight = document.documentElement.scrollHeight
        const clientHeight = document.documentElement.clientHeight
        console.log('scrollTop', scrollTop);
        console.log('scrollHeight', scrollHeight);
        console.log('clientHeight', clientHeight);
        if (scrollTop + clientHeight >= scrollHeight) {
        }*/
    }


    console.log(users);
    return (
        <div>
            <div className="list-heading">Users</div>
            {users.map((user) => (
                <UserItem firstName={user.first_name} lastName={user.last_name} avatar={user.avatar} key={user.id} />
            ))}
        </div>
    );
};

export default UserList;
