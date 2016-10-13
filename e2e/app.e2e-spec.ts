import { Firebase2Page } from './app.po';

describe('firebase2 App', function() {
  let page: Firebase2Page;

  beforeEach(() => {
    page = new Firebase2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
