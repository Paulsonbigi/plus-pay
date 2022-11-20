import { Table, Column, Model, DataType, CreatedAt, UpdatedAt, DeletedAt, BelongsTo } from 'sequelize-typescript';
import { Users } from 'src/users/user.entity';

@Table({timestamps: true, tableName: 'Address'})
export class Address extends Model<Address> {
  @Column({
    type: DataType.UUIDV4,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    field: 'id',
  })
  id: number;

  @Column({
    type: DataType.UUIDV4,
    unique: true,
    field: 'userId',
  })
  userId: number;

  @Column
  street: string;

  @Column
  lga: string;

  @Column
  state: string;

  @Column
  country: string;

  @Column
  region: string;

  @Column({
    type: DataType.BOOLEAN,
    field: 'active',
    defaultValue: false,
  })
  active: boolean;

  @CreatedAt
  creation_date: Date;

  @UpdatedAt
  updated_on: Date;

  @DeletedAt
  deletion_date: Date;
}