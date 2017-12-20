import * as chai from 'chai';
import {expect} from 'chai';
import BankAccount from '../modules/BankAccount';
import Client from '../modules/Client';

const should = chai.should();

describe('A CLIENT', () => {
  it ('Should not be able to have 0 bank accounts', () => {
    expect(() => {
      const numOfAccounts = new Client('Victor', 'Ribero');
    }).to.throw('Client should have an account');
  });

  it ('Should have a minimum of 1 bank account', () => {
    const client = new Client('Victor', 'Ribero', [new BankAccount()]);
    const accounts = client.currentAccounts();

    accounts.should.have.lengthOf(1);
  });

  it ('Should be able to have more than 1 bank accounts', () => {
    const accounts = new Client(
      'Victor',
      'Ribero',
      [new BankAccount(), new BankAccount(100)],
    ).currentAccounts();

    accounts.should.have.lengthOf(2);
  });
});
