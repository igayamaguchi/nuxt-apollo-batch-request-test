import * as Types from '../graphql/generated/types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type NoodleQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type NoodleQuery = { __typename?: 'Query', noodles?: Array<{ __typename?: 'Noodle', name: string }> | null };


export const NoodleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Noodle"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"noodles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<NoodleQuery, NoodleQueryVariables>;