import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager  } from 'typeorm-extension';
import { Role } from '../models/role.model';

export default class RolesSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const repository = dataSource.getRepository(Role);

    const data = {
      name: 'user',
    };

    const role = await repository.findOne({where: { name: data.name }}).catch(e => console.log(e));

    if (!role) {
      await repository.insert([data]);
    }
  }
}
