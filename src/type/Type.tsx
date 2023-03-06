export type contactsProps = {
  contacts: never[];
};

export type contactSliceProps = {
  contacts: any;
  contactObj:any
};

export type contactObj = {
  email: string;
  firstName: string;
  gender: string;
  id: number;
  image: string;
  lastName: string;
  phone: string;
  username: string;
};

export type stateProps ={
  contactSlice:contactSliceProps
}
