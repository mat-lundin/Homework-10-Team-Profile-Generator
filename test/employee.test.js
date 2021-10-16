const Employee = require('../employee')

describe('Employee', () => {
    describe('Employee', () => {
      //test employee class
      it('should accept the values in the correct places when building a new Employee', () => {
        const newEmp = new Employee('Mat Lundin','30021759','mat@mat.com');

        expect(newEmp.name).toBe('Mat Lundin');
        expect(newEmp.id).toBe('30021759');
        expect(newEmp.email).toBe('mat@mat.com');
        expect(newEmp.getRole()).toBe('Employee');
      }
    
      ) 
    })})