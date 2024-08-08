import { IsNotEmpty } from "class-validator"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm"
import { Produto } from "../../produto/entities/produto.entity"
import { Transform, TransformFnParams } from "class-transformer"

@Entity({name: "tb_categorias"})
export class Categoria {

    @PrimaryGeneratedColumn()    
    id: number

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    tipo: string

    @OneToMany(() => Produto, (produto) => produto.categoria)
    produto: Produto[]
}
