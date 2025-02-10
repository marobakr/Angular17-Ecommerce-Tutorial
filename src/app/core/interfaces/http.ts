export interface IRegister {
  name: string;
  email: string;
  password: string;
  rePassword: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IProducts {
  _id: string;
  title: string;
  image: string;
  price: number;
  description: string;
  brand: string;
  model: string;
  color: string;
  category: string;
  discount: number;
  popular: boolean;
  isAddedToCart: boolean;
}
