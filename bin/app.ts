import { App } from "aws-cdk-lib";
import { SecurityAlert } from "../lib/security-alert";
import { Chatbot } from "../lib/chatbot";
import { IamStack } from "../lib/iam-stack";
import {
  SLACK_CHANNEL_ID,
  SLACK_WORKSPACE_ID,
  PERSONAL_MACHINE_USER_NAME,
} from "../lib/consts";

const app = new App();

new IamStack(app, "CmCdkIam", {
  personalMachineUserName: PERSONAL_MACHINE_USER_NAME,
});

const securityAlert = new SecurityAlert(app, "CmCdkSecurityAlert");
new Chatbot(app, "CmCdkChatbot", {
  slackWorkspaceId: SLACK_WORKSPACE_ID,
  slackChannelId: SLACK_CHANNEL_ID,
  topics: [securityAlert.topic],
});
