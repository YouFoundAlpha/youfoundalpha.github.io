(async function main() {
    const url = "https://api.lanyard.rest/v1/users/661121998830960651"
    const ress = await fetch(url)
    const json = await ress.json();
    const status = json.data.discord_status
const tect = document.getElementById("status") 
if(status === "online"){
    document.getElementById('pfp').style.border = "5px solid rgb(0, 255, 0)"
} else if(status === "idle") {
    document.getElementById('pfp').style.border = "5px solid rgb(255, 255, 0)"
} else if(status === "dnd") {
    document.getElementById('pfp').style.border = "5px solid rgb(255, 0, 0)"
} else if(status === "offline") {
    document.getElementById('pfp').style.border = "5px solid rgb(255, 0, 255)"
} else if(status === "invisible") {
    document.getElementById('pfp').style.border = "5px solid rgb(255, 0, 255)"
}
})();