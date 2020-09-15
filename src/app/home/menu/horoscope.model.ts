export class Horoscope{
    constructor(
        public id: string,
        public filterId: string,
        public title: string,
        public dateRange: string,
        public description: string,
        public imageUrl: string,
    ) {}
}