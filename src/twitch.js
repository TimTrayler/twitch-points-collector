
function showChatMessage(message)
{
    const msg = document.createElement("div");

    msg.innerHTML = `<span color="red"><b>Twitch Channel Points Collector</b></span>: ${message}`;

    document.getElementsByClassName("chat-scrollable-area__message-container")[0].append(msg);
}

setInterval(() => {
    const bonusElement = document.getElementsByClassName("claimable-bonus__icon")[0];

    if(!bonusElement) return;

    bonusElement.click();
    showChatMessage(`<span color="red">Collected a Channel Point Chest</span>`);
    console.log("Collected a Channel Point Chest");
    
}, 1000);