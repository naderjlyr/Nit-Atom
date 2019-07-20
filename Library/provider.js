'use babel';

// data source is an array of objects
import suggestions from '../Data/data';

class myProvider {
	constructor() {
		// offer suggestions only when editing nit file type.
		this.selector = '.source.nit';
	}

	getSuggestions(options) {
		const { prefix } = options;

		// look for suggestions after at least 2 characters have been typed.
		if (prefix.length >= 2) {
			return this.findMatchingSuggestions(prefix);
		}
	}

	findMatchingSuggestions(prefix) {
		// filter list of suggestions to those matching the prefix, case insensitive
		let prefixLower = prefix.toLowerCase();
		let matchingSuggestions = suggestions.filter((suggestion) => {
			let textLower = suggestion.text.toLowerCase();
			return textLower.startsWith(prefixLower);
		});

		// run each matching suggestion through inflateSuggestion() and return
		return matchingSuggestions.map(this.inflateSuggestion);
	}

	// clones a suggestion object to a new object with some shared additions
	// cloning also fixes an issue where selecting a suggestion won't insert it
	inflateSuggestion(suggestion) {
		return {
			text: suggestion.text,
			description: suggestion.description,
			descriptionMoreURL: suggestion.descriptionMoreURL,
			type: 'value',
			rightLabel: 'Keyword'
		};
	}
}
export default new myProvider();
