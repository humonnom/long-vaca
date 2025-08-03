import { User } from './types';

export const mockUsers: User[] = [
  {
    id: 1,
    name: "さくら",
    age: 23,
    city: "東京",
    image: require('./assets/profiles/profile1.jpg'),
    isOnline: true,
  },
  {
    id: 2,
    name: "あやか",
    age: 21,
    city: "大阪",
    image: require('./assets/profiles/profile2.jpg'),
  },
  {
    id: 3,
    name: "ゆい",
    age: 25,
    city: "京都",
    image: require('./assets/profiles/profile3.jpg'),
    isOnline: true,
  },
  {
    id: 4,
    name: "みか",
    age: 22,
    city: "横浜",
    image: require('./assets/profiles/profile4.jpg'),
  },
  {
    id: 5,
    name: "えみ",
    age: 24,
    city: "名古屋",
    image: require('./assets/profiles/profile5.jpg'),
    isOnline: true,
  },
  {
    id: 6,
    name: "りな",
    age: 20,
    city: "神戸",
    image: require('./assets/profiles/profile6.jpg'),
  },
  {
    id: 7,
    name: "まい",
    age: 26,
    city: "福岡",
    image: require('./assets/profiles/profile7.jpg'),
  },
  {
    id: 8,
    name: "なな",
    age: 23,
    city: "札幌",
    image: require('./assets/profiles/profile8.jpg'),
    isOnline: true,
  },
];