import { CdSessionNgZonePage } from './app.po';

describe('ml-cd-session App', function() {
  let page: CdSessionNgZonePage;

  beforeEach(() => {
    page = new CdSessionNgZonePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
