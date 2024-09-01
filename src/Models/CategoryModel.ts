import {Table, Column, Model, DataType, HasMany} from 'sequelize-typescript';
import Item from './ItemModel';

/*const categoryModel = (sequelize , DataTypes) => {
    const Category = sequelize.define("Category", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    }, {timestamos: true});
    return Category;
}

export default categoryModel;*/

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