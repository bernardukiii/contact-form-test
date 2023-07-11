// Here I need to write the actual tests that call the functions in the js file. All of them need to be set with async await

import { goToPage } from './bdki-portfolio'

describe('Open page in browser', () => {
    test('Opens portfolio', async () => {
      await goToPage()
    });
});