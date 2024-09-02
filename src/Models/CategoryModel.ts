import {Table, Column, Model, DataType, HasMany} from 'sequelize-typescript';
import Item from './ItemModel';

@Table
class Category extends Model {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    })
    id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    description: string;

//association
    @HasMany(()=>Item)
    items:Item[]
}

export default Category;