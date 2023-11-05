export type Transactions = {
  recipient: String;
  recip_account: number;
  referenceNum: number;
  amount: number;
  type: string;
  time: string;
  id?: number;
};

export type Expenses = {
  image: string;
  name: string;
  price: number;
  validity: number;
  billing_cycle: string;
  id?: number;
};

export type SingleUser = {
  name: string;
  avatar: string;
  gender: string;
  balance: number;
  accountNum: number;
  mobile: number;
  adress: string;
  transactions: Transactions[];
  expenses: Expenses[];
  id?: number;
};

export interface LoginUser {
  email: string;
  password: string;
}
