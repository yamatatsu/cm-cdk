import { App } from "aws-cdk-lib";
import { SecurityAlertChatbot } from "../lib/SecurityAlertChatbot";
import { SLACK_CHANNEL_ID, SLACK_WORKSPACE_ID } from "../lib/consts";

const app = new App();

new SecurityAlertChatbot(app, "SecurityAlertChatbot", {
  slackWorkspaceId: SLACK_WORKSPACE_ID,
  slackChannelId: SLACK_CHANNEL_ID,
});
