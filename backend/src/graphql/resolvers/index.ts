import AuthResolver from "./Auth.resolver"

const resolvers = {
  Query: {
    hello: () => "hola bola",
  },
  Mutation: {
    register: AuthResolver.RegisterUser
  }
}

export default resolvers
