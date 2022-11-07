import { Table, Column, Model, DataType, CreatedAt, UpdatedAt, DeletedAt } from 'sequelize-typescript';

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

  @Column
  userId: string;

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

  @Column
  active: boolean;

  @CreatedAt
  creationDate: Date;

  @UpdatedAt
  updatedOn: Date;

  @DeletedAt
  deletionDate: Date;
}