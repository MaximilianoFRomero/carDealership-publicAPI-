import { IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator";

export class UpdateCarDto{
    
    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id?: string;
    @IsString({message: 'Un mensaje de error de prueba'})
    @IsNotEmpty()
    @IsOptional()
    readonly brand?: string;
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    readonly model?: string;

}