export class PasswordValidator {
  constructor() {}

  exec(input: string) {
    const messages = [];
    const hasDigit = !!input.split("").filter((char) => !isNaN(Number(char)))
      .length;
    const hasValidLength = input.length >= 5 && input.length <= 15;
    const hasUpperCaseLetter = input
      .split("")
      .some(
        (char) =>
          typeof char.toLowerCase() !== char && char.toUpperCase() === char
      );

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
}
