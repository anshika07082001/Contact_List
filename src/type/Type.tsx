export type contactsProps = {
  contacts: never[];
};

export type contactSliceProps = {
  contacts: any;
  contactObj: any;
  loading: boolean;
  error:string
};

export type stateProps = {
  contactSlice: contactSliceProps;
};
