import { AgentBuddyPage } from './app.po';

describe('agent-buddy App', function() {
  let page: AgentBuddyPage;

  beforeEach(() => {
    page = new AgentBuddyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
