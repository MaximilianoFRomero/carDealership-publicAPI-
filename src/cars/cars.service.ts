import { BadRequestException, Body, Injectable, NotFoundException, Post } from '@nestjs/common';
import { Car } from './interfaces/cars.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {

    private cars: Car[] = [
        /*{
            id: uuid(),
            brand: 'Toyota',
            model: 'Corolla'
        },
        {
            id: uuid(),
            brand: 'Ford',
            model: 'Fiesta'
        }
        */
    ];

    findAll(){
        return this.cars;
    }

    findById(id: string){

        const car = this.cars.find(car => car.id === id);
        if(!car) throw new NotFoundException('ID not found');
        

        return car;
    }

    createCar(@Body() createCarDto : CreateCarDto){

        const newCar: Car = {
            id: uuid(),
            model: createCarDto.model,
            brand: createCarDto.brand,
        }

        this.cars.push(newCar);

        return newCar;
    }

    updateCar(id: string, updateCarDto: UpdateCarDto){

        let carDB = this.findById(id);
        if(updateCarDto.id && updateCarDto.id !== id)
            throw new BadRequestException('Invalid car id in body');

        this.cars = this.cars.map(car => {
            if (car.id === id){
                carDB = {
                    ...carDB,
                    ...updateCarDto,
                    id,
                }
                return carDB;
            }
            return car;
        })
        return carDB;

    }

    deleteCar(id: string){
        this.cars = this.cars.filter(car => car.id !== id);
    }

    fillCarsWithSeedData(cars:Car[]){

        this.cars = cars;

    }

}
