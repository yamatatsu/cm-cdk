# CM CDK

## CDK でやること

- [Guard Duty の内容を Slack に通知する](./lib/SecurityAlertChatbot.ts)

## CDK とは別でやること

### 全リージョンの Security Hub を eneble にする

[AWS の中の人もおすすめしてますしおすし](https://dev.classmethod.jp/articles/aws-summit-online-2020-track4-1315-1345-security-hub/)

```
aws securityhub enable-security-hub --region us-east-2
aws securityhub enable-security-hub --region us-east-1
aws securityhub enable-security-hub --region us-west-1
aws securityhub enable-security-hub --region us-west-2
aws securityhub enable-security-hub --region af-south-1
aws securityhub enable-security-hub --region ap-east-1
aws securityhub enable-security-hub --region ap-south-1
aws securityhub enable-security-hub --region ap-northeast-3
aws securityhub enable-security-hub --region ap-northeast-2
aws securityhub enable-security-hub --region ap-southeast-1
aws securityhub enable-security-hub --region ap-southeast-2
aws securityhub enable-security-hub --region ap-northeast-1
aws securityhub enable-security-hub --region ca-central-1
aws securityhub enable-security-hub --region eu-central-1
aws securityhub enable-security-hub --region eu-west-1
aws securityhub enable-security-hub --region eu-west-2
aws securityhub enable-security-hub --region eu-south-1
aws securityhub enable-security-hub --region eu-west-3
aws securityhub enable-security-hub --region eu-north-1
aws securityhub enable-security-hub --region me-south-1
aws securityhub enable-security-hub --region sa-east-1
```

### 全リージョンの Guard Duty を eneble にする

[AWS doc でおすすめしてますしおすし](https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_settingup.html)

```
aws guardduty create-detector --enable --region us-east-2
aws guardduty create-detector --enable --region us-east-1
aws guardduty create-detector --enable --region us-west-1
aws guardduty create-detector --enable --region us-west-2
aws guardduty create-detector --enable --region af-south-1
aws guardduty create-detector --enable --region ap-east-1
aws guardduty create-detector --enable --region ap-south-1
aws guardduty create-detector --enable --region ap-northeast-3
aws guardduty create-detector --enable --region ap-northeast-2
aws guardduty create-detector --enable --region ap-southeast-1
aws guardduty create-detector --enable --region ap-southeast-2
aws guardduty create-detector --enable --region ap-northeast-1
aws guardduty create-detector --enable --region ca-central-1
aws guardduty create-detector --enable --region eu-central-1
aws guardduty create-detector --enable --region eu-west-1
aws guardduty create-detector --enable --region eu-west-2
aws guardduty create-detector --enable --region eu-south-1
aws guardduty create-detector --enable --region eu-west-3
aws guardduty create-detector --enable --region eu-north-1
aws guardduty create-detector --enable --region me-south-1
aws guardduty create-detector --enable --region sa-east-1
```
