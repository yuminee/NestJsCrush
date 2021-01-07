import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { IsString, MaxLength, MinLength } from "class-validator";

@Entity()
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id : number;

    @Column({ length:150 })
    @MinLength(1)
    @MaxLength(150)
    @IsString()
    email: string;

    @Column()
    @MinLength(8)
    @IsString()
    password: string;

    @CreateDateColumn({name:'created_at'})
    createdAt: Date;

    @UpdateDateColumn({name: 'updated_at', type:'timestamp'})
    updatedAt: Date;
}