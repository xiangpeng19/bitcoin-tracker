import { BitcoinPriceTrackerPage } from './app.po';

describe('bitcoin-price-tracker App', () => {
  let page: BitcoinPriceTrackerPage;

  beforeEach(() => {
    page = new BitcoinPriceTrackerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
