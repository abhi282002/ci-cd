const { createUser } = require('./user.service');

describe('User Service', () => {
  
  test('should create user successfully', () => {
    const user = createUser({
      name: 'Abhishek',
      email: 'test@gmail.com'
    });

    expect(user).toHaveProperty('id');
    expect(user.name).toBe('Abhishek');
  });

  test('should fail if name is missing', () => {
    expect(() => {
      createUser({ email: 'test@gmail.com' });
    }).toThrow("Name is required");
  });

  test('should fail if email is invalid', () => {
    expect(() => {
      createUser({ name: 'Abhi', email: 'wrongemail' });
    }).toThrow("Invalid email");
  });

});
