import { Trophy } from './trophy';
import { Workout } from './workhout';

export interface User {
  name: string;
  lastname: string;
  nickname: string;
  email: string;
  password: string;
  token: string;
  city: string;
  avatar: string;
  trophies: Trophy[];
  workouts: Workout[];
}
