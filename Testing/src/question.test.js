const questions = require('../question.json');

describe('Questions', () => {
    it.each(questions.questions)(
      'Question requires four multiple answers',
      (question) => {
        expect(question.answers.length).toBe(4);
      }
    );
  
    it.each(questions.questions)(
      'Question should have a correct answer',
      (question) => {
        const correctAnswer = question.answers.find((answer) => answer.correct);
        expect(correctAnswer).toBeDefined();
      }
    );
  
    it.each(questions.questions)(
      'Question requires help text',
      (question) => {
        expect(question.helper).toBeDefined(); 
        expect(question.helper.text).toBeTruthy(); 
      }
    );
  });