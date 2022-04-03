import { SynthUtils } from "@aws-cdk/assert";
import { App, Stack, aws_sns } from "aws-cdk-lib";
import { Chatbot } from "./chatbot";

test("snapshot test", () => {
  const app = new App();
  const stack = new Stack(app, "testStack");

  const topic = new aws_sns.Topic(stack, "test-Topic");

  const target = new Chatbot(app, "Target", {
    slackWorkspaceId: "test-slackWorkspaceId",
    slackChannelId: "test-slackChannelId",
    topics: [topic],
  });

  expect(SynthUtils.toCloudFormation(target)).toMatchSnapshot();
});
