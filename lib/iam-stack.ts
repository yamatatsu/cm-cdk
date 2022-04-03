import * as cdk from "aws-cdk-lib";
import * as iam from "aws-cdk-lib/aws-iam";
import { PERSONAL_MACHINE_USER_NAME } from "./consts";

export class IamStack extends cdk.Stack {
  constructor(parent: cdk.App, id: string, props?: cdk.StackProps) {
    super(parent, id, props);

    const forceMfaPolicy = new iam.ManagedPolicy(this, "ForceMfaPolicy", {
      managedPolicyName: "ForceMfaPolicy",
      statements: [
        new iam.PolicyStatement({
          effect: iam.Effect.DENY,
          notActions: ["iam:*"],
          resources: ["*"],
          conditions: {
            BoolIfExists: {
              "aws:MultiFactorAuthPresent": "false",
            },
          },
        }),
      ],
    });

    const adminGroup = new iam.Group(this, "AdminGroup", {
      groupName: "AdminGroup",
      managedPolicies: [
        iam.ManagedPolicy.fromAwsManagedPolicyName("ReadOnlyAccess"),
        forceMfaPolicy,
      ],
    });

    const user = iam.User.fromUserName(
      this,
      "SoloUser",
      PERSONAL_MACHINE_USER_NAME
    );

    user.addToGroup(adminGroup);

    new iam.Role(this, "AdminRole", {
      roleName: "AdminRole",
      assumedBy: new iam.ArnPrincipal(user.userArn),
      managedPolicies: [
        iam.ManagedPolicy.fromAwsManagedPolicyName("AdministratorAccess"),
      ],
    });
  }
}
