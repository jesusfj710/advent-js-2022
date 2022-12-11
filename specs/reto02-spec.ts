import "jasmine";
import { isNumberObject } from "util/types";
import { countHours } from "../reto02/reto02"

describe('Counting hours', () => {
    it('should return a number', () => {
        expect(countHours(2023, ['01/06', '04/01', '12/25']))
            .toEqual(jasmine.any(Number));
    });
    it('should return correct hours', () => {
        expect(countHours(2023, ['01/06', '04/01', '12/25']))
            .toEqual(4);
    });
    it('should return correct hours', () => {
        expect(countHours(2022, ['01/06', '04/01', '12/25']))
            .toEqual(4);
    });
    it('should return correct hours', () => {
        expect(countHours(1985, ['01/01', '01/06', '02/02', '02/17', '02/28', '06/03', '12/06', '12/25']))
            .toEqual(10);
    });
    it('should return correct hours', () => {
        expect(countHours(2000, ['01/01']))
            .toEqual(0);
    });

});