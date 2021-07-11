import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {NotesDataSource} from '../datasources';
import {Notes, NotesRelations} from '../models';

export class NotesRepository extends DefaultCrudRepository<
  Notes,
  typeof Notes.prototype.id,
  NotesRelations
> {
  constructor(
    @inject('datasources.notes') dataSource: NotesDataSource,
  ) {
    super(Notes, dataSource);
  }
}
