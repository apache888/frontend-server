import { UserfilesModule } from './userfiles.module';

describe('UserfilesModule', () => {
  let userfilesModule: UserfilesModule;

  beforeEach(() => {
    userfilesModule = new UserfilesModule();
  });

  it('should create an instance', () => {
    expect(userfilesModule).toBeTruthy();
  });
});
