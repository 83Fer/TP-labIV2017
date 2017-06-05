import { TPPizzeriaPage } from './app.po';

describe('tppizzeria App', () => {
  let page: TPPizzeriaPage;

  beforeEach(() => {
    page = new TPPizzeriaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
