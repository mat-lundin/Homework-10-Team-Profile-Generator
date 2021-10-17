const Engineer = require('../engineer')

describe('Engineer', () => {
    describe('Engineer', () => {
      //test engineer class constructor 
      it('should accept the values in the correct places when building a new Engineer and the methods should return the correct values', () => {
        const newEng = new Engineer('Mat Lundin','30021759','mat@mat.com','mat-lundin');

        expect(newEng.name).toBe('Mat Lundin');
        expect(newEng.id).toBe('30021759');
        expect(newEng.email).toBe('mat@mat.com');
        expect(newEng.github).toBe('mat-lundin');
        expect(newEng.getRole()).toBe('Engineer');
        expect(newEng.getGithub()).toBe('https://github.com/mat-lundin');

      }
    
      ) 
    })})