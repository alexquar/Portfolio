import type { DocumentNode } from 'graphql'

declare global {
  const gql: (literals: TemplateStringsArray, ...args: any[]) => DocumentNode
  const useAsyncQuery: <T = any>(
    query: DocumentNode | string,
    variables?: Record<string, any>,
    clientId?: string,
    context?: any
  ) => Promise<{ data: { value: T } }>
}

export {}
