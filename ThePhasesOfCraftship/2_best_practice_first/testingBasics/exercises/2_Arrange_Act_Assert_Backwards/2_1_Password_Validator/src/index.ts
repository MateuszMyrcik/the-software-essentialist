export class PasswordValidator {
  constructor() {}

  exec(input: string) {
    const messages = [];
    const characters = input.split("");

    const hasDigit = characters.some(this.isDigit);
    const hasValidLength = characters.length >= 5 && characters.length <= 15;
    const hasUpperCaseLetter = characters.some(this.isUpperCase);

    if (!hasDigit) {
      messages.push(`Your password need include at least one digit: ${input}`);
    }

    if (!hasValidLength) {
      messages.push(
        `Your password length is incorrect (between 5 an 15): ${input}`
      );
    }

    if (!hasUpperCaseLetter) {
      messages.push(
        `Your password need include at least one upper case letter: ${input}`
      );
    }
    return {
      passed: !messages.length,
      messages: messages,
    };
  }

  private isUpperCase = (char: string) => /^[A-Z]*$/.test(char);
  private isDigit = (char: string) => !isNaN(Number(char));
}
