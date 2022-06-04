import * as Types from '../graphql/generated/types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type BreadQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type BreadQuery = { __typename?: 'Query', breads?: Array<{ __typename?: 'Bread', name: string }> | null };


export const BreadDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Bread"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"breads"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<BreadQuery, BreadQueryVariables>;