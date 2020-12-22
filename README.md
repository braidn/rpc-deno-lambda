# Deno Simple RPC Exploration

This project is a bit of an extension on my [previous Deno X Lambda excursion][dnl].
The idea here is to keep all of the [Deno][dn] + AWS CDK and Lambda work but,
Staple on an entire way to manage RPC through JSON RPC 2.0

Remote Procedural Calls in the past have been a very 'in' thing.
With the push for GraphQL,
the concept of RPC is definitely back on the rise.

This could be an interesting way to model a complex single endpoint versus multiple [REST][rest] ones.
In addition,
it allows a team to focus on business logic with a very small infrastructure need (single lambda).
It even allows a team that is worried about hitting the [CloudFormation resource cap][cfn] to stay well below it.

## Installation

1. All dependencies can be installed using a recent version of Node + NPM:

        npm i

1. Highly recommend that a [Deno][dn] version is installed locally.

## Usage

To see about the viability of running Deno in a Lambda environment.

#### Other Useful commands
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template


## History

* 2020-12-20T12:15:55 Stumble onto Gentle RPC
* 2020-12-22T22:11:32 Begin porting respond metho over to Lambda's request/response workflow
* 2020-12-22T16:37:16 Finish up work porting response to Lambda

## Credits

[Deno Lambda](https://github.com/hayd/deno-lambda) for the Lambda Runtime
[JSON RPC Spec](https://www.jsonrpc.org/specification#response_object) for a fresh take on RPC in recent years
[Gentle RPC](https://github.com/timonson/gentle_rpc) for a great drop in RPC experience in Deno.

[dn]: https://deno.land/
[dnl]: https://github.com/braidn/deno-lambda-namer
[rest]: https://en.wikipedia.org/wiki/Representational_state_transfer
[cfn]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cloudformation-limits.html
