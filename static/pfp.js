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

    // Apply styles to create a bordered effect without affecting the image
    pfp.style.position = 'relative';
    pfp.style.overflow = 'hidden';
    pfp.style.border = 'none'; // Remove any existing border
    pfp.style.padding = '0'; // Remove any padding that might interfere

    const borderDiv = document.createElement('div');
    borderDiv.style.position = 'absolute';
    borderDiv.style.top = '0';
    borderDiv.style.left = '0';
    borderDiv.style.width = '100%';
    borderDiv.style.height = '100%';
    borderDiv.style.boxSizing = 'border-box';
    borderDiv.style.border = `5px solid ${borderColor}`;
    borderDiv.style.filter = `blur(${blurAmount})`;
    borderDiv.style.pointerEvents = 'none'; // Ensure clicks pass through the border

    // Create a wrapper div for the image to exclude it from the blur effect
    const imgWrapper = document.createElement('div');
    imgWrapper.style.position = 'relative';
    imgWrapper.style.zIndex = '1'; // Ensure the image stays above the border
    imgWrapper.appendChild(pfp.querySelector('img')); // Append the image element

    // Append the elements
    pfp.appendChild(borderDiv);
    pfp.appendChild(imgWrapper);
})();
