# node-slack-sdk-bug
Sample Project to report bug when connecting to slack with node-slack-sdk Version > 4.4 behind a company proxy.

## Description
Reported at https://github.com/slackapi/node-slack-sdk/issues/642#issuecomment-447282740

> Looks like Fix not working for me. I try to connect with RTMClient behind a http proxy. I use Version 4.8.0 of node-slack-sdk. The Client request fails and retries forever. No error is reported! With Version 4.4.0 everything is OK. 

Here is the log when I execute sample Project:

```
"@slack/client": "^4.8.0"

> node ./index.js

@slack/client:WebClient0 "initialized"
@slack/client:RTMClient2 "transitioning to state: disconnected"
@slack/client:RTMClient2 "pausing outgoing event queue"
@slack/client:RTMClient2 "initialized"
@slack/client:RTMClient2 "start()"
@slack/client:RTMClient2 "transitioning to state: connecting"
@slack/client:RTMClient2 "transitioning to state: connecting:authenticating"
@slack/client:WebClient0 "apiCall() start"
@slack/client:WebClient0 "shouldAutoPaginate: false"
@slack/client:WebClient0 "will perform http request"
@slack/client:WebClient0 "http response received"
@slack/client:WebClient0 "http request failed"
@slack/client:WebClient0 "will perform http request"
@slack/client:WebClient0 "http response received"
@slack/client:WebClient0 "http request failed"
@slack/client:WebClient0 "will perform http request"
@slack/client:WebClient0 "http response received"
@slack/client:WebClient0 "http request failed"
@slack/client:WebClient0 "will perform http request"
@slack/client:WebClient0 "http response received"
@slack/client:WebClient0 "http request failed"
```

```
"@slack/client": "4.4.0"

> node ./index.js

@slack/client:WebClient0 "initialized"
@slack/client:RTMClient2 "transitioning to state: disconnected"
@slack/client:RTMClient2 "pausing outgoing event queue"
@slack/client:RTMClient2 "initialized"
@slack/client:RTMClient2 "start()"
@slack/client:RTMClient2 "transitioning to state: connecting"
@slack/client:RTMClient2 "transitioning to state: connecting:authenticating"
@slack/client:WebClient0 "apiCall() start"
@slack/client:WebClient0 "shouldAutoPaginate: false"
@slack/client:WebClient0 "will perform http request"
@slack/client:WebClient0 "http response received"
@slack/client:RTMClient2 "transitioning to state: connecting:authenticated"
@slack/client:RTMClient2 "transitioning to state: connecting:handshaking"
@slack/client:RTMClient2 "received message on websocket: {\"type\": \"hello\"}"
@slack/client:RTMClient2 "transitioning to state: connected"
Connected!
@slack/client:RTMClient2 "transitioning to state: connected:resuming"
@slack/client:RTMClient2 "transitioning to state: connected:ready"
@slack/client:KeepAlive1 "start monitoring"
@slack/client:KeepAlive1 "setting ping timer"
@slack/client:RTMClient2 "resuming outgoing event queue"
@slack/client:KeepAlive1 "ping timer expired, sending ping"
@slack/client:RTMClient2 "send() in state: connected,ready"
@slack/client:KeepAlive1 "setting ping timer"
@slack/client:RTMClient2 "sending message on websocket: {\"type\":\"ping\",\"id\":1}"
@slack/client:KeepAlive1 "setting pong timer"
@slack/client:RTMClient2 "received message on websocket: {\"type\":\"pong\",\"reply_to\":1}"
@slack/client:KeepAlive1 "received pong, clearing pong timer"
@slack/client:KeepAlive1 "ping timer expired, sending ping"
@slack/client:RTMClient2 "send() in state: connected,ready"
@slack/client:KeepAlive1 "setting ping timer"
@slack/client:RTMClient2 "sending message on websocket: {\"type\":\"ping\",\"id\":2}"
@slack/client:KeepAlive1 "setting pong timer"
@slack/client:RTMClient2 "received message on websocket: {\"type\":\"pong\",\"reply_to\":2}"
@slack/client:KeepAlive1 "received pong, clearing pong timer"
@slack/client:KeepAlive1 "ping timer expired, sending ping"
@slack/client:RTMClient2 "send() in state: connected,ready"
@slack/client:KeepAlive1 "setting ping timer"
@slack/client:RTMClient2 "sending message on websocket: {\"type\":\"ping\",\"id\":3}"
@slack/client:KeepAlive1 "setting pong timer"
@slack/client:RTMClient2 "received message on websocket: {\"type\":\"pong\",\"reply_to\":3}"
@slack/client:KeepAlive1 "received pong, clearing pong timer"
@slack/client:KeepAlive1 "ping timer expired, sending ping"
@slack/client:RTMClient2 "send() in state: connected,ready"
@slack/client:KeepAlive1 "setting ping timer"
@slack/client:RTMClient2 "sending message on websocket: {\"type\":\"ping\",\"id\":4}"
@slack/client:KeepAlive1 "setting pong timer"
@slack/client:RTMClient2 "received message on websocket: {\"type\":\"pong\",\"reply_to\":4}"
@slack/client:KeepAlive1 "received pong, clearing pong timer"
```

#### Reproducible in:

`@slack/client` version: 4.8.0

node version: v8.11.3

OS version(s): macOS 10.14.1

#### Steps to reproduce:

1. Run sample Project

#### Expected result:

Connecting to Slack or log error

#### Actual result:
Not connecting to slack and not reporting error
