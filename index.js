// The main script for the extension
// The following are examples of some basic extension functionality

//You'll likely need to import extension_settings, getContext, and loadExtensionSettings from extensions.js
import { extension_settings, getContext, loadExtensionSettings } from "../../../extensions.js";

//You'll likely need to import some other functions from the main script
import { saveSettingsDebounced } from "../../../../script.js";

// The main script for the extension focused on enhancing blockquotes

// Import necessary utilities from the extension framework
import { getContext } from "../../../extensions.js";

/**
 * Adds a copy button to each blockquote element.
 */
function addCopyButtonToBlockquotes() {
  const blockquotes = document.querySelectorAll('blockquote');
  blockquotes.forEach(blockquote => {
	const button = document.createElement('button');
	button.textContent = 'Copy';
	button.className = 'copy-button';
	button.onclick = () => copyBlockquoteContent(blockquote);
	blockquote.insertBefore(button, blockquote.firstChild);
  });
}

/**
 * Copies the content of the given blockquote to the clipboard.
 * @param {Element} blockquote The blockquote element.
 */
function copyBlockquoteContent(blockquote) {
  const text = blockquote.innerText;
  navigator.clipboard.writeText(text).then(() => {
	console.log('Blockquote content copied to clipboard.');
  }).catch(err => {
	console.error('Failed to copy blockquote content: ', err);
  });
}

// Initialize the extension by adding copy buttons to all blockquotes
function init() {
  addCopyButtonToBlockquotes();
}

init();
