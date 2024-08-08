import { IsNotEmpty, IsNumber } from "class-validator"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm"
import { Categoria } from "../../categoria/entities/categoria.entity";
import { Transform, TransformFnParams } from "class-transformer";

@Entity({name: "tb_produtos"})
export class Produto {

    @PrimaryGeneratedColumn()    
    id: number

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({length: 250, nullable: false})
    nome: string

    @IsNumber({ maxDecimalPlaces: 2 })
    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({ type: "decimal", precision: 8, scale: 2 })
    preco: number;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    tamanho: string

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({length: 5000, nullable: false})
    foto: string

    @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
        onDelete: "CASCADE"
    })
    categoria: Categoria

}
