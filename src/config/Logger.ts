export class Logger {
  public static log(...args: any[]): void {
    console.log(Logger.formatArgs(args));
  }
  public static warn(...args: any[]): void {
    console.warn(Logger.formatArgs(args));
  }

  public static error(...args: any[]): void {
    console.error(Logger.formatArgs(args));
  }

  private static formatArgs(args: any[]): string {
    return JSON.stringify(args, null, 4)
  }
}
