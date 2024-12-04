export class PasswordValidator {
  constructor() {}

  exec(input: string) {
    return {
      passed: false,
      messages: [
        `Your password length is incorrect (between 5 an 15): ${input}`,
      ],
    };
  }
}
