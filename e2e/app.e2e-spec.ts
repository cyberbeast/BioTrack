import { BiotrackPage } from './app.po';

describe('biotrack App', function() {
  let page: BiotrackPage;

  beforeEach(() => {
    page = new BiotrackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
