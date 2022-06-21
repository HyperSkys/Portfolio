let before = document.getElementById("before");
const liner = document.getElementById("liner");
const command = document.getElementById("typer");
const textarea = document.getElementById("texter");
const terminal = document.getElementById("terminal");
let git = 0;
let pw = false;
let pwd = false;
const commands = [];

setTimeout(function() {
    loopLines(banner, "", 80);
    textarea.focus();
}, 100);

window.addEventListener("keyup", enterKey);

for (let i = 0; i < 5; i++) {
    console.log(
        "%c⚠️ Hold Up ⚠️",
        "color: #1f3a6e; font-weight: bold; font-size: 24px;"
    );
    console.log(
        "%cDo not paste anything in here if someone told you to, you most likely will be hacked.",
        "color: #b2b8c2; font-size: 16px;"
    );
}

console.log(
    "%c⚠️ Scary Hacker Alert ⚠️",
    "color: #ab2222; font-weight: bold; font-size: 24px;"
);
console.log("%cAdmin Password: '" + password + "' - You probably expected the password to be here.", "color: grey");

textarea.value = "";
command.innerHTML = textarea.value;

function enterKey(e) {
    if (e.keyCode === 181) {
        document.location.reload(true);
    }
    if (pw) {
        let et = "*";
        let w = textarea.value.length;
        command.innerHTML = et.repeat(w);
        if (textarea.value === password) {
            pwd = true;
        }
        if (pwd && e.keyCode === 13) {
            loopLines(admin, "color2 margin", 120);
            command.innerHTML = "";
            textarea.value = "";
            pwd = false;
            pw = false;
            liner.classList.remove("password");
        } else if (e.keyCode === 13) {
            addLine("Wrong password", "error", 0);
            command.innerHTML = "";
            textarea.value = "";
            pw = false;
            liner.classList.remove("password");
        }
    } else {
        if (e.keyCode === 13) {
            commands.push(command.innerHTML);
            git = commands.length;
            addLine("guest@hyperskys.dev:~$ " + command.innerHTML, "no-animation", 0);
            commander(command.innerHTML.toLowerCase());
            command.innerHTML = "";
            textarea.value = "";
        }
        if (e.keyCode === 38 && git !== 0) {
            git -= 1;
            textarea.value = commands[git];
            command.innerHTML = textarea.value;
        }
        if (e.keyCode === 40 && git !== commands.length) {
            git += 1;
            if (commands[git] === undefined) {
                textarea.value = "";
            } else {
                textarea.value = commands[git];
            }
            command.innerHTML = textarea.value;
        }
    }
}

function commander(cmd) {
    switch (cmd.toLowerCase()) {
        case "help":
            loopLines(help, "color2 margin", 80);
            break;
        case "about":
            loopLines(about, "color2 margin", 80);
            break;
        case "obamaslastname":
            addLine("Imagine not having permission, couldn't be me.", "error", 100);
            setTimeout(function() {
                window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
            }, 1000);
            break;
        case "topple":
            addLine("Hey, iusemeteor how are you?")
            setTimeout(function() {
                window.open('https://www.pornhub.com/view_video.php?viewkey=ph62251209de802');
            }, 1000);
            break;
        case "social":
            loopLines(social, "color2 margin", 80);
            break;
        case "admin":
            liner.classList.add("password");
            pw = true;
            break;
        case "projects":
            loopLines(projects, "color2 margin", 80);
            break;
        case "password":
            addLine("<span class=\"error\">You\'re going to have to try harder than that.</span>", "error", 100);
            break;
        case "history":
            addLine("<br>", "", 0);
            addLine("These are the commands you have ran: ", "inherit", 0)
            loopLines(commands, "color2", 80);
            addLine("<br>", "command", 80 * commands.length + 50);
            break;
        case "clear":
            setTimeout(function() {
                terminal.innerHTML = '<a id="before"></a>';
                before = document.getElementById("before");
            }, 1);
            loopLines(banner, "", 80)
            break;
        case "youtube":
            addLine("Opening my Youtube Webpage.", "color2", 80);
            newTab(youtube);
            break;
        case "twitter":
            addLine("Opening my Twitter Webpage.", "color2", 80);
            newTab(twitter);
            break;
        case "github":
            addLine("Opening my Github Webpage.", "color2", 80);
            newTab(github);
            break;
        case "auth:
            addLine("The origin of this Portfolio is https://www.hyperskys.dev/ any other website is a STOLEN copy.", "color2", 80)
            break;
        case "onlyfans":
            addLine("You actually thought I had an onlyfans, weird.", "error", 80);
            setTimeout(function() {
                window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
            }, 1000);
                break;
        case "version":
            loopLines(version, "color2 margin", 80);
                break;
        default:
            addLine("<span class=\"inherit\">Command not found. For a list of commands, type <span class=\"command\">'help'</span>.</span>", "error", 100);
            break;
    }
}

function newTab(link) {
    setTimeout(function() {
        window.open(link, "_blank");
    }, 500);
}

function addLine(text, style, time) {
    let t = "";
    for (let i = 0; i < text.length; i++) {
        if (text.charAt(i) === " " && text.charAt(i + 1) === " ") {
            t += "&nbsp;&nbsp;";
            i++;
        } else {
            t += text.charAt(i);
        }
    }
    setTimeout(function() {
        const next = document.createElement("p");
        next.innerHTML = t;
        next.className = style;

        before.parentNode.insertBefore(next, before);

        window.scrollTo(0, document.body.offsetHeight);
    }, time);
}

function loopLines(name, style, time) {
    name.forEach(function(item, index) {
        addLine(item, style, index * time);
    });
}
