import AuthResolver from "./Auth.resolver"
import PostResolver from "./Post.resolver"
import UserResolver from "./User.resolver"

const resolvers = {
  Query: {
    hello: () => "hola bola",
    me: UserResolver.Me
  },
  Mutation: {
    register: AuthResolver.RegisterUser,
    login: AuthResolver.LoginUser,
    createPost: PostResolver.createPost,
    editPost: PostResolver.editPost
  }
}

export default resolvers
