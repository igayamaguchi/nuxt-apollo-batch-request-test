export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Bread = {
  __typename?: 'Bread';
  name: Scalars['String'];
};

export type Fruit = {
  __typename?: 'Fruit';
  name: Scalars['String'];
};

export type Meet = {
  __typename?: 'Meet';
  name: Scalars['String'];
};

export type Noodle = {
  __typename?: 'Noodle';
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  breads?: Maybe<Array<Bread>>;
  fruits?: Maybe<Array<Fruit>>;
  meets?: Maybe<Array<Meet>>;
  noodles?: Maybe<Array<Noodle>>;
};
