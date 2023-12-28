import { IsNotEmpty, IsOptional, IsString, IsUUID, MinLength } from "class-validator";

/*import { PartialType } from '@nestjs/mapped-types';
import { CreateBrandDto } from './create-brand.dto';

export class UpdateBrandDto extends PartialType(CreateBrandDto) {}
*/
export class UpdateBrandDto {

    @IsString()
    @MinLength(1)
    @IsNotEmpty()
    @IsOptional()
    name?: string;
}
