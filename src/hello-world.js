const AssistantFeature = require('virtual-assistant').AssistantFeature,
    SlackService = require('virtual-assistant').SlackService;


class HelloWorld extends AssistantFeature {

    static getScope() {
        // Optionnal, default value is AssistantFeature.scopes.LOCAL
        // return here the scope of this feature.
        // Availables scopes are available in AssistantFeature.scopes
        // Default value is AssistantFeature.scopes.LOCAL
        return AssistantFeature.scopes.LOCAL;
    }

    static getTriggerKeywords() {
        // Return here the keywords triggering your feature
        return [
            'salut', 'hello', 'coucou', 'hi'
        ];
    }

    static getDescription() {
        // return here the description of your feature.
        // This description will be used for the help text of the bot
        return null;
    }

    static getTTL() {
        // Optionnal, default value is 0
        // In seconds
        // Setting this to > 0 will keep the feature state for the given duration
        // Set to 0 to disable the persistence of this feature
        return 0;
    }

    preHandle(message, context) {
        return super.preHandle(message, context);
        // you can do something here, maybe doing some checks, refreshing a cache, or something else
        // return true to forward the handling to the handle method
        // return false to stop here
    }

    handle(message, context) {
        let answer = 'Bonjour ' + SlackService.getDataStore().getUserById(this.context.userId).name + ', que puis-je pour vous ?\nPour savoir ce que je peux faire pour vous, dites "aide" ou "help"';
        this.send(answer);
    }


}

module.exports = HelloWorld;
