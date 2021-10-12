import { SynthUtils } from "@aws-cdk/assert";
import { App } from "aws-cdk-lib";
import { CostAnomalyDetector } from "./CostAnomalyDetector";

test("snapshot test", () => {
  const app = new App();

  const target = new CostAnomalyDetector(app, "Target", {});

  expect(SynthUtils.toCloudFormation(target)).toMatchSnapshot();
});
