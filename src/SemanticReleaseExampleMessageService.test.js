import { getFirstSemanticReleaseExampleMessage, getAnotherSemanticReleaseExampleMessage } from './SemanticReleaseExampleMessageService';

describe('SemanticReleaseExampleMessageService', () => {
  describe('#getFirstSemanticReleaseExampleMessage', () => {
    it('should return message', () => {
      expect(getFirstSemanticReleaseExampleMessage()).toEqual('This implements the semantic-release package. Find more information at https://github.com/semantic-release/semantic-release.');
    });
  });

  describe('#getAnotherSemanticReleaseExampleMessage', () => {
    it('should return message', () => {
      expect(getAnotherSemanticReleaseExampleMessage()).toEqual('Another Semantic Release Example Message');
    });
  });
});
