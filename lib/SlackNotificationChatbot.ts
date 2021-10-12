import { App, Stack, StackProps, aws_sns, aws_chatbot } from "aws-cdk-lib";

type Props = StackProps & {
  slackWorkspaceId: string;
  slackChannelId: string;
  topics: aws_sns.ITopic[];
};

export class SlackNotificationChatbot extends Stack {
  constructor(scope: App, id: string, props: Props) {
    super(scope, id, props);

    const { slackChannelId, slackWorkspaceId, topics } = props;

    new aws_chatbot.SlackChannelConfiguration(
      this,
      "SlackChannelConfiguration",
      {
        slackChannelConfigurationName: "SlackNotification",
        slackWorkspaceId: slackWorkspaceId,
        slackChannelId: slackChannelId,
        notificationTopics: topics,
      }
    );
  }
}
