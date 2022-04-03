export const SLACK_WORKSPACE_ID = env("SLACK_WORKSPACE_ID");
export const SLACK_CHANNEL_ID = env("SLACK_CHANNEL_ID");
export const PERSONAL_MACHINE_USER_NAME = env("PERSONAL_MACHINE_USER_NAME");

function env(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`${name} is not defined.`);
  }
  return value;
}
