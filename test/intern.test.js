const Intern = require('../intern')

describe('Intern', () => {
    describe('Intern', () => {
      //test intern class constructor
      it('should accept the values in the correct places when building a new Intern and the methods should return the correct values', () => {
        const newInt = new Intern('Mat Lundin','30021759','mat@mat.com','UT Austin');

        expect(newInt.name).toBe('Mat Lundin');
        expect(newInt.id).toBe('30021759');
        expect(newInt.email).toBe('mat@mat.com');
        expect(newInt.school).toBe('UT Austin');
        expect(newInt.getRole()).toBe('Intern');
        expect(newInt.getSchool()).toBe('UT Austin')

      }
    
      ) 
    })})