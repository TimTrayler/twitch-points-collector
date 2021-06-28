
function showChatMessage(message)
{
    const msg = document.createElement("div");

    msg.classList.add("chat-line__message");
    msg.classList.add("tw-relative");
    msg.innerHTML = `<span style="color:red;font-weight:bold">Twitch Channel Points Collector</span>: ${message}`;

    document.getElementsByClassName("chat-scrollable-area__message-container")[0].append(msg);
}

setInterval(() => {
    const bonusElement = document.getElementsByClassName("claimable-bonus__icon")[0];

    if(!bonusElement) return;

    bonusElement.click();
    showChatMessage(`<span style="color:red">Collected a Channel Point Chest</span>`);
    console.log("Collected a Channel Point Chest");
    
}, 1000);