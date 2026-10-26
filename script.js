
const overlay = document.querySelector('#overlay')
const mapNodes = document.querySelectorAll('.node.checkpoint')

const closeBtn = document.querySelector('.close-btn')

const questTitle = document.querySelector('#quest-info-title')
const questDesc = document.querySelector('#quest-info-desc')
const questSmart = document.querySelector('#quest-info-smart')
const questWhy = document.querySelector('#quest-info-why')

// console.log('quest-info:')
// console.log(questTitle.innerText)
// console.log(questDesc.innerText)
// console.log(questSmart.innerText)
// console.log(questWhy.innerText)
// console.log('\n')

// EVENT LISTENERS
closeBtn.addEventListener('click', () => {
    overlay.style.display = 'none'
})

mapNodes.forEach(node => {
    node.addEventListener('click', (e) => {
        // console.log(e.currentTarget.id)
        let nodeID = e.currentTarget.id
        showQuestData(nodeID)

        overlay.style.display = 'flex'
    })
})
// END - EVENT LISTENERS

// DATA
const questData = {
    "y1-n1": {
        title: "Explore the uni and see what can i do",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, minima debitis recusandae eius eaque illum? Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
        smart: ["something", "something", "something", "something", "something"],
        why: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ullam at, dolore dignissimos enim, veritatis maxime quibusdam blanditiis doloremque commodi tempora et. Accusantium et, eius consequatur delectus sunt necessitatibus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi."
    },
    "y1-n2": {
        title: "Learn something new and exciting",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, minima debitis recusandae eius eaque illum? Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
        smart: ["something", "something", "something", "something", "something"],
        why: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ullam at, dolore dignissimos enim, veritatis maxime quibusdam blanditiis doloremque commodi tempora et. Accusantium et, eius consequatur delectus sunt necessitatibus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi."
    },
    "y1-n3": {
        title: "Learn something new and exciting",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, minima debitis recusandae eius eaque illum? Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
        smart: ["something", "something", "something", "something", "something"],
        why: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ullam at, dolore dignissimos enim, veritatis maxime quibusdam blanditiis doloremque commodi tempora et. Accusantium et, eius consequatur delectus sunt necessitatibus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi."
    },
    "y1-n4": {
        title: "Learn something new and exciting",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, minima debitis recusandae eius eaque illum? Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
        smart: ["something", "something", "something", "something", "something"],
        why: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ullam at, dolore dignissimos enim, veritatis maxime quibusdam blanditiis doloremque commodi tempora et. Accusantium et, eius consequatur delectus sunt necessitatibus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi."
    },

    "y2-n1": {
        title: "Explore the uni and see what can i do",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, minima debitis recusandae eius eaque illum? Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
        smart: ["something", "something", "something", "something", "something"],
        why: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ullam at, dolore dignissimos enim, veritatis maxime quibusdam blanditiis doloremque commodi tempora et. Accusantium et, eius consequatur delectus sunt necessitatibus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi."
    },
    "y2-n2": {
        title: "Learn something new and exciting",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, minima debitis recusandae eius eaque illum? Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
        smart: ["something", "something", "something", "something", "something"],
        why: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ullam at, dolore dignissimos enim, veritatis maxime quibusdam blanditiis doloremque commodi tempora et. Accusantium et, eius consequatur delectus sunt necessitatibus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi."
    },
    "y2-n3": {
        title: "Learn something new and exciting",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, minima debitis recusandae eius eaque illum? Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
        smart: ["something", "something", "something", "something", "something"],
        why: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ullam at, dolore dignissimos enim, veritatis maxime quibusdam blanditiis doloremque commodi tempora et. Accusantium et, eius consequatur delectus sunt necessitatibus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi."
    },
    "y2-n4": {
        title: "Learn something new and exciting",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, minima debitis recusandae eius eaque illum? Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
        smart: ["something", "something", "something", "something", "something"],
        why: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ullam at, dolore dignissimos enim, veritatis maxime quibusdam blanditiis doloremque commodi tempora et. Accusantium et, eius consequatur delectus sunt necessitatibus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi."
    },

    "y3-n1": {
        title: "Explore the uni and see what can i do",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, minima debitis recusandae eius eaque illum? Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
        smart: ["something", "something", "something", "something", "something"],
        why: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ullam at, dolore dignissimos enim, veritatis maxime quibusdam blanditiis doloremque commodi tempora et. Accusantium et, eius consequatur delectus sunt necessitatibus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi."
    },
    "y3-n2": {
        title: "Learn something new and exciting",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, minima debitis recusandae eius eaque illum? Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
        smart: ["something", "something", "something", "something", "something"],
        why: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ullam at, dolore dignissimos enim, veritatis maxime quibusdam blanditiis doloremque commodi tempora et. Accusantium et, eius consequatur delectus sunt necessitatibus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi."
    },
    "y3-n3": {
        title: "Learn something new and exciting",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, minima debitis recusandae eius eaque illum? Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
        smart: ["something", "something", "something", "something", "something"],
        why: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ullam at, dolore dignissimos enim, veritatis maxime quibusdam blanditiis doloremque commodi tempora et. Accusantium et, eius consequatur delectus sunt necessitatibus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi."
    },
    "y3-n4": {
        title: "Learn something new and exciting",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, minima debitis recusandae eius eaque illum? Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
        smart: ["something", "something", "something", "something", "something"],
        why: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ullam at, dolore dignissimos enim, veritatis maxime quibusdam blanditiis doloremque commodi tempora et. Accusantium et, eius consequatur delectus sunt necessitatibus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi."
    },

    "y4-n1": {
        title: "Explore the uni and see what can i do",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, minima debitis recusandae eius eaque illum? Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
        smart: ["something", "something", "something", "something", "something"],
        why: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ullam at, dolore dignissimos enim, veritatis maxime quibusdam blanditiis doloremque commodi tempora et. Accusantium et, eius consequatur delectus sunt necessitatibus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi."
    },
    "y4-n2": {
        title: "Learn something new and exciting",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, minima debitis recusandae eius eaque illum? Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
        smart: ["something", "something", "something", "something", "something"],
        why: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ullam at, dolore dignissimos enim, veritatis maxime quibusdam blanditiis doloremque commodi tempora et. Accusantium et, eius consequatur delectus sunt necessitatibus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi."
    },
    "y4-n3": {
        title: "Learn something new and exciting",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, minima debitis recusandae eius eaque illum? Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
        smart: ["something", "something", "something", "something", "something"],
        why: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ullam at, dolore dignissimos enim, veritatis maxime quibusdam blanditiis doloremque commodi tempora et. Accusantium et, eius consequatur delectus sunt necessitatibus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi."
    },
    "y4-n4": {
        title: "Learn something new and exciting",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, minima debitis recusandae eius eaque illum? Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
        smart: ["something", "something", "something", "something", "something"],
        why: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ullam at, dolore dignissimos enim, veritatis maxime quibusdam blanditiis doloremque commodi tempora et. Accusantium et, eius consequatur delectus sunt necessitatibus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi."
    },
}
// END - DATA


// SHOW DATA
function showQuestData (id) {
    let data = questData[id]

    // console.log(data)

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