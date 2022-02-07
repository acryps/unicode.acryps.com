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
                    font-family: pt;
                    margin: 0.5em;
                }

                ui-logo {
                    color: #0f05a2;
                    font-weight: bold;
                }

                ui-symbol {
                    display: inline-block;
                    margin: 0.5em;
                    background: #eee;
                }

                @font-face {
                    font-family: pt;
                    font-weight: normal;
                    src: url('https://acryps.com/fonts/pt/regular');
                }
    
                @font-face {
                    font-family: pt;
                    font-weight: bold;
                    src: url('https://acryps.com/fonts/pt/bold');
                }
            </style>
        </head>

        <body>
            <ui-title>
                <ui-logo>acryps</ui-logo> unicode symbols
            </ui-title>

            <ui-symbols>
                ${[...symbols.split(''), '¨̮'].map(s => `<ui-symbol>${s}</ui-symbol> `).join("")}
            </ui-symbols>
        </body>
    </html>
    `.trim());
});

app.listen(process.env.PORT || 1235, () => {
    console.log(`unicode started on ${process.env.PORT}`);
});