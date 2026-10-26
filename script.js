
const overlay = document.querySelector('#overlay')
const mapNodes = document.querySelectorAll('.node.checkpoint')

const closeBtn = document.querySelector('.close-btn')

const questTitle = document.querySelector('#quest-info-title')
const questDesc = document.querySelector('#quest-info-desc')
const questSmart = document.querySelector('#quest-info-smart')
const questWhy = document.querySelector('#quest-info-why')

console.log('quest-info:')
console.log(questTitle.innerText)
console.log(questDesc.innerText)
console.log(questSmart.innerText)
console.log(questWhy.innerText)
console.log('\n')

// EVENT LISTENERS
closeBtn.addEventListener('click', () => {
    overlay.style.display = 'none'
})

mapNodes.forEach(node => {
    node.addEventListener('click', (e) => {
        console.log(e.currentTarget.id)
        let nodeID = e.currentTarget.id
        showQuestData(nodeID)

        overlay.style.display = 'flex'
    })
})
// END - EVENT LISTENERS

// DATA
const questData = {
    "y1-n1": {
        title: "Explore",
        desc: "lorem imsum dolor sit amet",
        smart: ["s", "m", "a", "r", "t"],
        why: "lorem ipsum dolor sit amet"
    },
    "y1-n2": {
        title: "Learn",
        desc: "lorem imsum dolor sit amet",
        smart: ["s", "m", "a", "r", "t"],
        why: "lorem ipsum dolor sit amet"
    },
}
// END - DATA


// SHOW DATA
function showQuestData (id) {
    let data = questData[id]

    console.log(data)

    questTitle.innerText = data.title
    questDesc.innerText = data.desc
    questWhy.innerText = data.why

    questSmart.innerHTML = `
        <span class="bold">S :</span> ${data["smart"][0]}
        <br>
        <span class="bold">M :</span> ${data["smart"][1]}
        <br>
        <span class="bold">A :</span> ${data["smart"][2]}
        <br>
        <span class="bold">R :</span> ${data["smart"][3]}
        <br>
        <span class="bold">T :</span> ${data["smart"][4]}
        <br>
    `
}
// END - SHOW DATA