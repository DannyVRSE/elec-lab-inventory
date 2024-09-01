import {Table, Column, Model, CreatedAt, UpdatedAt} from 'sequelize-typescript';

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
}

export default Item;