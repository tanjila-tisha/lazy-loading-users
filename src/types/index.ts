export interface UserType {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface UsersState {
  loading: boolean;
  users: Array<UserType>;
  error: string;
  page: number;
  total: number;
}
