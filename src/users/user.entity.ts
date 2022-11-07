import { Table, Column, Model, DataType, CreatedAt, UpdatedAt, DeletedAt } from 'sequelize-typescript';
import { Sequelize } from 'sequelize';

@Table({timestamps: true, tableName: 'Users'})
export class Users extends Model<Users> {
  @Column({
    type: DataType.UUIDV4,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    field: 'id',
    defaultValue: require("sequelize").UUIDV4,
  })
  id: number;

  @Column
  first_name: string;

  @Column
  last_name: string;

  @Column
  email: string;

  @Column
  password: string;

  @Column
  app_id: string;

  @Column
  registration_device: string;

  @Column
  blacklist: boolean;

  @CreatedAt
  creation_at: Date;

  @UpdatedAt
  updated_at: Date;

  @DeletedAt
  deleted_at: Date;
}