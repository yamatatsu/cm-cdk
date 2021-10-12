import { App } from "aws-cdk-lib";
import { SecurityAlert } from "../lib/SecurityAlert";
import { CostAnomalyDetector } from "../lib/CostAnomalyDetector";
import { SlackNotificationChatbot } from "../lib/SlackNotificationChatbot";
import { SLACK_CHANNEL_ID, SLACK_WORKSPACE_ID } from "../lib/consts";

const app = new App();

const securityAlert = new SecurityAlert(app, "SecurityAlert");
const costAnomalyDetector = new CostAnomalyDetector(app, "CostAnomalyDetector");
new SlackNotificationChatbot(app, "SlackNotificationChatbot", {
  slackWorkspaceId: SLACK_WORKSPACE_ID,
  slackChannelId: SLACK_CHANNEL_ID,
  topics: [securityAlert.topic, costAnomalyDetector.topic],
});
