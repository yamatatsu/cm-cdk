import { App, Stack, StackProps, aws_sns, aws_ce } from "aws-cdk-lib";

export class CostAnomalyDetector extends Stack {
  public readonly topic: aws_sns.ITopic;

  constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props);

    const topic = new aws_sns.Topic(this, "topic");

    // デプロイできない。。。
    // Error [ValidationError]: Template format error: Unrecognized resource types: [AWS::CE::AnomalyMonitor]
    // const anomalyMonitor = new aws_ce.CfnAnomalyMonitor(
    //   this,
    //   "AnomalyMonitor",
    //   {
    //     monitorName: "MyAnomalyMonitor",
    //     monitorType: "DIMENSIONAL",
    //     monitorDimension: "SERVICE",
    //   }
    // );

    // const anomalySubscription = new aws_ce.CfnAnomalySubscription(
    //   this,
    //   "AnomalySubscription",
    //   {
    //     subscriptionName: "MyAnomalySubscription",
    //     frequency: "IMMEDIATE",
    //     monitorArnList: [anomalyMonitor.ref],
    //     subscribers: [{ type: "SNS", address: topic.topicArn }],
    //     // 実験的に1を設定してみる
    //     threshold: 1,
    //   }
    // );

    // anomalySubscription.addDependsOn(anomalyMonitor);

    this.topic = topic;
  }
}
