import { InstallPage } from './app.po';

describe('install App', function() {
  let page: InstallPage;

  beforeEach(() => {
    page = new InstallPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
