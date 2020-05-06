import validationSchema from '../validators';
import { validSchema } from './mocks';

describe('Form validators', () => {
  const {
    name,
    surname,
    email,
    username,
    password,
    repeatPassword,
  } = validSchema;

  it('Should validate the object', () => {
    const result = validationSchema.validateSync(validSchema);

    expect(result).toEqual(validSchema);
  });

  it('Should not validate if name is missing', () => {
    const schema = { surname, email, username, password, repeatPassword };

    try {
      validationSchema.validateSync(schema);
    } catch (e) {
      expect(e).toBeDefined();
      expect(e.path).toEqual('name');
      expect(e.type).toEqual('required');
    }
  });

  it('Should not validate if name is missing', () => {
    const schema = { surname, email, username, password, repeatPassword };

    try {
      validationSchema.validateSync(schema);
    } catch (e) {
      expect(e).toBeDefined();
      expect(e.path).toEqual('name');
      expect(e.type).toEqual('required');
    }
  });

  it('Should not validate if name is missing', () => {
    const schema = { surname, email, username, password, repeatPassword };

    try {
      validationSchema.validateSync(schema);
    } catch (e) {
      expect(e).toBeDefined();
      expect(e.path).toEqual('name');
      expect(e.type).toEqual('required');
    }
  });

  it('Should not validate if surname is missing', () => {
    const schema = { name, email, username, password, repeatPassword };

    try {
      validationSchema.validateSync(schema);
    } catch (e) {
      expect(e).toBeDefined();
      expect(e.path).toEqual('surname');
      expect(e.type).toEqual('required');
    }
  });

  it('Should not validate if email is missing', () => {
    const schema = { name, surname, username, password, repeatPassword };

    try {
      validationSchema.validateSync(schema);
    } catch (e) {
      expect(e).toBeDefined();
      expect(e.path).toEqual('email');
      expect(e.type).toEqual('required');
    }
  });

  it('Should not validate if username is missing', () => {
    const schema = { name, surname, email, password, repeatPassword };

    try {
      validationSchema.validateSync(schema);
    } catch (e) {
      expect(e).toBeDefined();
      expect(e.path).toEqual('username');
      expect(e.type).toEqual('required');
    }
  });

  it('Should not validate if password is not in the right format', () => {
    const schema = {
      name,
      surname,
      email,
      username,
      password: 'fake',
      repeatPassword: 'fake',
    };

    try {
      validationSchema.validateSync(schema);
    } catch (e) {
      expect(e).toBeDefined();
      expect(e.path).toEqual('password');
      expect(e.type).toEqual('matches');
    }
  });

  it('Should not validate if repeatPassword is missing', () => {
    const schema = { name, surname, email, username, password };

    try {
      validationSchema.validateSync(schema);
    } catch (e) {
      expect(e).toBeDefined();
      expect(e.path).toEqual('repeatPassword');
      expect(e.type).toEqual('required');
    }
  });

  it('Should not validate if the passwords does not match', () => {
    const schema = {
      name,
      surname,
      email,
      username,
      password,
      repeatPassword: 'fake',
    };

    try {
      validationSchema.validateSync(schema);
    } catch (e) {
      expect(e).toBeDefined();
      expect(e.path).toEqual('repeatPassword');
      expect(e.type).toEqual('oneOf');
    }
  });
});
