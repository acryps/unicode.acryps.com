const express = require("express");
const app = express();

const symbols = `✓✗←→↑↓↔↕⇆⇄⇅⇵⇈⇊⇇⇉№‹›²³⚠★✱◌⬟⬢⎔⬣⌃⎋⌫⌦▁▂▃▄▅▆▇█▉▊▋▌▍▎▏▐▕▔▀░▒▓▖▗▘▝▚▞▙▟▛▜╱╲╳┌─┬┐││││├─┼┤└─┴┘⎉⎊⌘❖⎇⌥☤⚕☫☬☭ᐜᐝᐞᐟᐠᐡᐢᐣᐤᐥᐦᐧᐨᐩᐪᑉᑊᑋᒃᒄᒡᒢᒻᒼᒽᒾᓐᓑᓒᓪᓫᔅᔆᔇᔈᔉᔊᔋᔥᔾᔿᕀᕁᕐᕑᕝᕪᕻᕯᕽᖅᖕᖖᖟᖦᖮᗮᘁᙆᙇᙚ`;

app.all("*", (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html>
        <head>
            <title>unicode ACRYPS</title>

            <style>
                body {
                    font: 40px -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
                    margin: 1em 0.5em;
                }

                ui-title {
                    display: block;
                    font-weight: bold;
                    margin: 0.5em;
                }

                ui-symbol {
                    display: inline-block;
                    margin: 0.5em;
                    background: #eee;
                }
            </style>
        </head>

        <body>
            <ui-title># unicode symbols</ui-title>
            <ui-symbols>
                ${symbols.split("").map(s => `<ui-symbol>${s}</ui-symbol> `).join("")}
            </ui-symbols>
        </body>
    </html>
    `.trim());
});

app.listen(process.env.PORT || 1235, () => {
    console.log(`unicode started on ${process.env.PORT}`);
});