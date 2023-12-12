(async function main() {
    const url = "https://api.lanyard.rest/v1/users/661121998830960651";
    const rest = await fetch(url);
    const json = await rest.json();
    const status = json.data.discord_status;
    const pfp = document.getElementById('pfp');

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

    pfp.style.border = `5px solid ${borderColor}`;
    pfp.style.filter = `blur(${blurAmount})`;
})();
