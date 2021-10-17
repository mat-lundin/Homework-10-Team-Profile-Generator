const Manager = require('../manager')

describe('Manager', () => {
    describe('Manager', () => {
      //test intern class constructor
      it('should accept the values in the correct places when building a new Manager and the methods should return the correct values', () => {
        const newMgmt = new Manager('Mat Lundin','30021759','mat@mat.com','3398321908');

        expect(newMgmt.name).toBe('Mat Lundin');
        expect(newMgmt.id).toBe('30021759');
        expect(newMgmt.email).toBe('mat@mat.com');
        expect(newMgmt.officeNum).toBe('3398321908');
        expect(newMgmt.getRole()).toBe('Manager');

      }
    
      ) 
    })})