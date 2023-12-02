import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import { loadFiles } from "@graphql-tools/load-files";
import { typeDefs as scalarTypedefs, resolvers as scalarResolvers } from "graphql-scalars";
import resolvers from "./resolvers";

const useGraphql = async (app: any) => {
  const typeDefs = [
    ... await loadFiles("./src/**/*.gql"),
    scalarTypedefs
  ]

  const allResolvers = [
    resolvers,
    scalarResolvers
  ]

  const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: allResolvers,
    //playground: true,
    context: ({ req, res }) => ({ req, res }),
    plugins: [ApolloServerPluginLandingPageLocalDefault]
  });
  await server.start();
  server.applyMiddleware({app, path: "/graphql"});
}

export default useGraphql
