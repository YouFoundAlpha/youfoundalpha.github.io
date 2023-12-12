(async function main() {
    const url = "https://api.lanyard.rest/v1/users/661121998830960651";
    const rest = await fetch(url);
    const json = await rest.json();
    const status = json.data.discord_status;
    const pfp = document.getElementById('pfp');
    const borderOverlay = document.createElement('div'); // Create a div for the border

    let borderColor = "";
    let blurAmount = "5px"; // Adjust the blur amount here

    if (status === "online") {
        borderColor = "rgb(0, 255, 0)";
    } else if (status === "idle") {
        borderColor = "rgb(255, 255, 0)";
    } else if (status === "dnd") {
        borderColor = "rgb(255, 0, 0)";
    } else if (status === "offline" || status === "invisible") {
        borderColor = "rgb(255, 0, 255)";
    }

    // Apply styles to the border overlay
    borderOverlay.style.position = 'absolute';
    borderOverlay.style.top = '0';
    borderOverlay.style.left = '0';
    borderOverlay.style.width = '100%';
    borderOverlay.style.height = '100%';
    borderOverlay.style.border = `5px solid ${borderColor}`;
    borderOverlay.style.filter = `blur(${blurAmount})`;

    // Append the border overlay to the profile picture container
    pfp.appendChild(borderOverlay);
})();
