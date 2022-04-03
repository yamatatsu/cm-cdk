import * as cdk from "aws-cdk-lib";
import * as iam from "aws-cdk-lib/aws-iam";

type Props = cdk.StackProps & {
  personalMachineUserName: string;
};

export class IamStack extends cdk.Stack {
  constructor(parent: cdk.App, id: string, props: Props) {
    super(parent, id, props);

    const { personalMachineUserName } = props;

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
      personalMachineUserName
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
