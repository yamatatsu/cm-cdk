import {
  App,
  Stack,
  StackProps,
  aws_sns,
  aws_events_targets,
  aws_events,
} from "aws-cdk-lib";

export class SecurityAlert extends Stack {
  public readonly topic: aws_sns.ITopic;

  constructor(scope: App, id: string, props?: StackProps) {
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

    this.topic = topic;
  }
}
