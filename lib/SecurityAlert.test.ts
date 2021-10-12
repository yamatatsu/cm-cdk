import { SynthUtils } from "@aws-cdk/assert";
import { App } from "aws-cdk-lib";
import { SecurityAlert } from "./SecurityAlert";

test("snapshot test", () => {
  const app = new App();

  const target = new SecurityAlert(app, "Target", {});

  expect(SynthUtils.toCloudFormation(target)).toMatchSnapshot();
});
