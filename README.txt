Highlight Phrases Chrome Extension


Description

This is a Chrome extension that highlights specified phrases on web pages. Users can add phrases in a CSV file and upload it to the extension options page. The extension will read the file and highlight any instances of the phrases on web pages.


Installation

To install the extension:

1. Download or clone the repository.
2. Open Chrome and navigate to chrome://extensions/.
3. Turn on Developer mode.
4. Click on "Load unpacked" and select the folder where the extension files are located.
5. The extension should now be installed and ready to use.


Usage

1. Click on the extension icon in the Chrome toolbar to open the options page.
2. Click on the "Choose File" button and select a CSV file containing the phrases to highlight.
3. Click on the "Upload" button to upload the file.
4. The phrases should now be added to the extension and any instances of them will be highlighted on web pages.

Development

The extension consists of two main files:

manifest.json: This file contains the configuration information for the extension, including its name, description, version, permissions, and content scripts.

content.js: This file contains the script that is injected into web pages to highlight the specified phrases.
To make changes to the extension, you can modify these files and reload the extension on the chrome://extensions/ page.