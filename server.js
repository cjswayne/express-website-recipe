const express = require('express');
const path = require('path');
const app = express();
const PORT = 3333;

app.use(express.static(path.join(__dirname, 'public')));


app.listen(PORT, () => {
    console.log('Server started on port', PORT);
    // Use dynamic import for the 'open' package
    import("open")
        .then((open) => {
            const readline = require("readline");

            // URL you want to open
            const url = `http://localhost:${PORT}/`;

            console.log("Press 'p' to open in browser");

            // Listen for keyboard input
            readline.emitKeypressEvents(process.stdin);
            process.stdin.setRawMode(true);
            process.stdin.on("keypress", (str, key) => {
                if (key.name === "p") {
                    // Open the URL in the default browser
                    open.default(url); // Note the use of 'open.default' due to the way ES modules are imported
                } else if (key.sequence === "\u0003") {
                    // This is CTRL+C
                    // Exit the program
                    process.exit();
                }
            });
        })
        .catch((err) => console.error("Failed to load the open module", err));
})

