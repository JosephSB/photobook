import AuthResolver from "./Auth.resolver"
import UserResolver from "./User.resolver"

const resolvers = {
  Query: {
    hello: () => "hola bola",
    me: UserResolver.Me
  },
  Mutation: {
    register: AuthResolver.RegisterUser,
    login: AuthResolver.LoginUser
  }
}

export default resolvers
