import { SynthUtils } from "@aws-cdk/assert";
import { App } from "aws-cdk-lib";
import { IamStack } from "./iam-stack";

test("snapshot test", () => {
  const app = new App();

  const target = new IamStack(app, "Target", {
    personalMachineUserName: "test-personalMachineUserName",
  });

  expect(SynthUtils.toCloudFormation(target)).toMatchSnapshot();
});
