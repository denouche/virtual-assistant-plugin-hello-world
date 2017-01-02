const AssistantFeature = require('virtual-assistant').AssistantFeature,
    SlackService = require('virtual-assistant').SlackService;


class HelloWorld extends AssistantFeature {

    static getTriggerKeywords() {
        return [
            'salut', 'hello', 'coucou', 'hi'
        ];
    }

    handle(message, context) {
        super.handle(message, context);
        console.log(this.context, SlackService.getDataStore().getUserById(this.context.userId))
        let answer = 'Hello World, how are you ' + SlackService.getDataStore().getUserById(this.context.userId).name;
        this.send(answer);
    }

}

module.exports = HelloWorld;
