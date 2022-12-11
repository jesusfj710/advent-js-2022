import "jasmine";
import { wrapping } from "../reto01/reto01"

describe('Wrap a gift', () => {
    it('should wrap each string of an array', () => {
        expect(wrapping(['cat', 'game', 'socks'])).toEqual([
            "*****\n*cat*\n*****",
            "******\n*game*\n******",
            "*******\n*socks*\n*******"
        ]);
    });
});