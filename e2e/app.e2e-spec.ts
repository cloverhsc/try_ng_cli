import { TryNGCliPage } from './app.po';

describe('try-ng-cli App', function() {
  let page: TryNGCliPage;

  beforeEach(() => {
    page = new TryNGCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
