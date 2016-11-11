import { PhotozAngular2Page } from './app.po';

describe('photoz-angular2 App', function() {
  let page: PhotozAngular2Page;

  beforeEach(() => {
    page = new PhotozAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
