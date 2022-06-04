import * as Types from '../graphql/generated/types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type IndexQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type IndexQuery = { __typename?: 'Query', fruits?: Array<{ __typename?: 'Fruit', name: string }> | null, meets?: Array<{ __typename?: 'Meet', name: string }> | null };


export const IndexDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Index"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fruits"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"meets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<IndexQuery, IndexQueryVariables>;