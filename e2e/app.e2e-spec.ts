import { UpworkGunasegarPage } from './app.po';

describe('upwork-gunasegar App', () => {
  let page: UpworkGunasegarPage;

  beforeEach(() => {
    page = new UpworkGunasegarPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
