import { IsNotEmpty, IsString } from "class-validator";

export class CreateCarDto{
    
    @IsString({message: 'Un mensaje de error de prueba'})
    @IsNotEmpty()
    readonly brand: string;
    @IsString()
    @IsNotEmpty()
    readonly model: string;

}