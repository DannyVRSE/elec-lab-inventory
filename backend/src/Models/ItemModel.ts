import { Table, Column, Model, CreatedAt, UpdatedAt, ForeignKey, BelongsTo} from 'sequelize-typescript';
import Category from './CategoryModel';

@Table

class Item extends Model {
    @Column({
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    })
    id: number;

    @Column({
        allowNull: false,
    })
    manufacturer: string;

    @Column({
        allowNull: false,
    })
    model: string;

    @Column({
        allowNull: false,
    })
    manufacturer_serial: string;

    @Column({
        allowNull: false,
        unique: true
    })
    lab_serial: string;

    @Column({
        allowNull: false,
    })
    condition: string;

    @CreatedAt
    creationDate: Date;

    @UpdatedAt
    updatedOn: Date;

    //association
    @ForeignKey(() => Category)
    @Column
    categoryId: number;

    @BelongsTo(() => Category)
    category: Category
}

export default Item;

//🚩manufucturer name and serial pair should be unique