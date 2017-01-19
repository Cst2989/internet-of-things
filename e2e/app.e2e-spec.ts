import { InternetOfThingsPage } from './app.po';

describe('internet-of-things App', function() {
  let page: InternetOfThingsPage;

  beforeEach(() => {
    page = new InternetOfThingsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
