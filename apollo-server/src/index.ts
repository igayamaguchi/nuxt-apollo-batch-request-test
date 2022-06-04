import { ApolloServer, gql } from 'apollo-server'

const typeDefs = gql`
  type Noodle {
    name: String!
  }
  type Bread {
    name: String!
  }
  type Fruit {
    name: String!
  }
  type Meet {
    name: String!
  }

  type Query {
    noodles: [Noodle!]
    breads: [Bread!]
    fruits: [Fruit!]
    meets: [Meet!]
  }
`;

const noodles = [
  { name: 'soba' },
  { name: 'pasta' }
]
const breads = [
  { name: 'croissant' },
  { name: 'focaccia' }
]

const fruits = [
  { name: 'banana' },
  { name: 'strawberry' }
];
const meets = [
  { name: 'pork' },
  { name: 'beef' }
]

const resolvers = {
  Query: {
    noodles: async () => {
      console.log('noodles')
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(noodles)
        }, 3000)
      })
    },
    breads: async () => {
      console.log('breads')
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(breads)
        }, 3000)
      })
    },
    fruits: async () => {
      console.log('fruits')
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(fruits)
        }, 3000)
      })
    },
    meets: async () => {
      console.log('meets')
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(meets)
        }, 3000)
      })
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});