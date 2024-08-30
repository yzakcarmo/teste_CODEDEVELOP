export interface UserRequest {
  name: string;
  email: string;
  phone: number;
  password: string;
  role: number;
}

export interface UserResponse {
  id: number;
  name: string;
  email: string;
  phone:number;
  role: string;
}
