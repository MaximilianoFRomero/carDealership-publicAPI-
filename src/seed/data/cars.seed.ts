import { Car } from "../../cars/interfaces/cars.interface";
import { v4 as uuid } from "uuid";

export const CARS_SEED: Car[] = [
    {
        id: uuid(),
        brand: 'Toyota',
        model: 'Hilux',
    },
    {
        id: uuid(),
        brand: 'Volkswagen',
        model: 'Amarok',
    },
    {
        id: uuid(),
        brand: 'Nissan',
        model: 'Frontier',
    },
    {
        id: uuid(),
        brand: 'Ford',
        model: 'Ranger',
    }
]