import AuthResolver from "./Auth.resolver"

const resolvers = {
  Query: {
    hello: () => "hola bola",
  },
  Mutation: {
    register: AuthResolver.RegisterUser,
    login: AuthResolver.LoginUser
  }
}

export default resolvers
