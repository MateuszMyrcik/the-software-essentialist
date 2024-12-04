export class PasswordValidator {
  constructor() {}

  exec(input: string) {
    const messages = [];
    const hasDigit = !!input.split("").filter((char) => !isNaN(Number(char)))
      .length;
    const hasValidLength = input.length >= 5 && input.length <= 15;

    console.log({
      hasDigit,
      hasValidLength,
    });

    if (!hasDigit) {
      messages.push(`Your password need include at least one digit: ${input}`);
    }

    if (!hasValidLength) {
      messages.push(
        `Your password length is incorrect (between 5 an 15): ${input}`
      );
    }

    return {
      passed: !messages.length,
      messages: messages,
    };
  }
}
