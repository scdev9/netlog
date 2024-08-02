![banner](https://scdev9.github.io/peotvgo/netlog2.jpg)

<p align="center">


![Js](https://img.shields.io/badge/Used-JavaScript-yellow?style=for-the-badge&logo=javascript&logoColor=yellow)
![Version](https://img.shields.io/badge/Version-1.0.0-green?style=for-the-badge&logo=version&logoColor=white)
![SCDEV](https://img.shields.io/badge/Developer-SCDEV-orange?style=for-the-badge&logo=developer&logoColor=white)
![HTML](https://img.shields.io/badge/used-HTML-red?style=for-the-badge&logo=blade&logoColor=white)
![CSS](https://img.shields.io/badge/used-CSS-blue?style=for-the-badge&logo=blade&logoColor=white)




</p>

# Net Log

Net Log is a Chrome extension that monitors and logs all HTTP and network packets sent by the web browser. This extension can be useful for debugging web applications, monitoring network traffic, and educational purposes.

## Features

- Logs all HTTP requests and responses.
- Captures request methods, URLs, types, and request bodies.
- Captures response status codes and headers.
- Displays logs in the extension.

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/scdev9/netlog.git
    cd netlog
    ```

2. **Open Chrome and go to the Extensions page:**
    - Type `chrome://extensions/` in the address bar.

3. **Enable Developer Mode:**
    - Toggle the switch in the top right corner.

4. **Load the extension:**
    - Click the "Load unpacked" button and select the directory where you cloned this repository.

## Usage

1. **Open the extension:**
    - Click on the Net Log icon in the Chrome toolbar.

2. **Check the console for logs:**
    - Open the extension.
    - Network requests and responses will be logged in the extension.

## File Structure

- `manifest.json` - Defines the extension's permissions, background script, and popup configuration.
- `background.js` - Contains the logic to capture and log network requests and responses.
- `popup.html` - (Optional) A simple HTML file for the extension's popup.
- `images/` - Directory containing the extension's icons.

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

This extension uses the Chrome WebExtension APIs to monitor network traffic.

---

**Disclaimer:** This extension is intended for educational and debugging purposes. Be mindful of privacy and security implications when logging or handling network requests.

