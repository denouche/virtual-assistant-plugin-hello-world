const AssistantFeature = require('virtual-assistant').AssistantFeature,
    SlackService = require('virtual-assistant').SlackService;


class HelloWorld extends AssistantFeature {

    static getTriggerKeywords() {
        return [
            'salut', 'hello', 'coucou', 'hi'
        ];
    }

    static getDescription() {
        return null;
    }

    handle(message, context) {
        super.handle(message, context);
        let answer = 'Bonjour ' + SlackService.getDataStore().getUserById(this.context.userId).name + ', que puis-je pour vous ?\nPour savoir ce que je peux faire pour vous, dites "aide" ou "help"';
        this.send(answer);
    }

}

module.exports = HelloWorld;
