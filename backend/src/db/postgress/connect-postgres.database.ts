import { runSeeders } from "typeorm-extension";
import PostgressDataSource from "./postgres.database";

export const PostgressDatabaseConnect = async () => {
  await PostgressDataSource.initialize();

  await runSeeders(PostgressDataSource);

}
