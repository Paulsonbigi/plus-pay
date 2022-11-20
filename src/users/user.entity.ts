import { Table, Column, Model, DataType, CreatedAt, UpdatedAt, DeletedAt, BelongsTo } from 'sequelize-typescript';
import { Sequelize } from 'sequelize';
import { Role } from './roles/role.enum';
import { Address } from 'src/address/address.entity';

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

  @Column({
    type: DataType.BOOLEAN,
    field: 'is_email_verified',
    defaultValue: false,
  })
  is_email_verified: boolean;

  @Column
  phone_number: string;

  @Column
  referral_id: string;

  @Column
  password: string;

  @Column
  app_id: string;

  @Column({
    type: DataType.ENUM(...Object.values(Role)),
    field: 'role',
    defaultValue: Role.User,
  })
  role: string[];

  @Column
  registration_device: string;

  @Column
  blacklist: boolean;

  @Column({
    type: DataType.BOOLEAN,
    field: 'twoFactAuthActive',
    defaultValue: false,
  })
  twoFactAuthActive: boolean;

  @CreatedAt
  creation_at: Date;

  @UpdatedAt
  updated_at: Date;

  @DeletedAt
  deleted_at: Date;
}