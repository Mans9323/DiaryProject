import { PlaceLocation } from './location.model';

export class Entries{
    constructor(
        public id: string,
        public title: string,
        public mood: string,
        public dateRange: Date,
        public time: string,
        public description: string,
        public imageUrl: string,
        public userId: string,
        public location: PlaceLocation
    ) {}
}