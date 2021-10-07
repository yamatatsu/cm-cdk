import {
  App,
  Stack,
  StackProps,
  aws_chatbot,
  aws_sns,
  aws_events_targets,
  aws_events,
} from "aws-cdk-lib";

type Props = StackProps & {
  slackWorkspaceId: string;
  slackChannelId: string;
};

export class SecurityAlertChatbot extends Stack {
  constructor(scope: App, id: string, props: Props) {
    super(scope, id, props);

    const topic = new aws_sns.Topic(this, "GuardDutyTopic");

    const rule = new aws_events.Rule(this, "GuardDutyNotificationRule", {
      ruleName: "GuardDutyNotificationRule",
      description: "Alert to SNS topic when find threats by Guardduty",
      eventPattern: {
        source: ["aws.guardduty"],
        detailType: ["GuardDuty Finding"],
      },
    });
    rule.addTarget(new aws_events_targets.SnsTopic(topic));

    new aws_chatbot.SlackChannelConfiguration(
      this,
      "SlackChannelConfiguration",
      {
        slackChannelConfigurationName: "SecurityAlert",
        slackWorkspaceId: props.slackWorkspaceId,
        slackChannelId: props.slackChannelId,
        notificationTopics: [topic],
      }
    );
  }
}
