export class PasswordValidator {
  constructor() {}

  exec(input: string) {
    return {
      passed: false,
      messages: [`incorrect password!: ${input}`],
    };
  }
}
