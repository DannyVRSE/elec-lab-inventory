import {Table, Column, Model, CreatedAt, UpdatedAt, ForeignKey, BelongsTo} from 'sequelize-typescript';
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
    lab_serial_number: string;

    @Column({
        allowNull: false,
    })
    condtion: string;

    @CreatedAt
    creationDate: Date;

    @UpdatedAt
    updatedOn: Date;

    //association
    @ForeignKey(()=>Category)
    @Column
    categoryId:number;

    @BelongsTo(()=>Category)
    category:Category
}

export default Item;