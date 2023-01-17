export interface ICarList {
    searchTerm: string;
    cars: ICars[];
    totalValue: number;
}

export interface ICars {
    id: string;
    car: ICar;
}

export interface ICar {
    name: string;
    price: number;
}

export interface IStore{
    car: ICar;
    carsList: ICarList;
}