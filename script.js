let dReaction = {
    "category": "Reaction",
    "score": 80,
    "icon": "icon-reaction.svg"
  }

let elementReaction = document.getElementById("reaction");

let reaction = `
<img src="${dReaction.icon}" alt="Icon" class="imgreaction">
<p class="preaction">${dReaction.category}</p>
<p class="rNumber">${dReaction.score} <span> / 100</span></p>
`

elementReaction.innerHTML = reaction;

let dMemory = {
    "category": "Memory",
    "score": 92,
    "icon": "icon-memory.svg"
  }

let elementMemory = document.getElementById("memory")

let memory = `
<img src="${dMemory.icon}" alt="Icon" class="imgreaction">
<p class="pmemory">${dMemory.category}</p>
<p class="mNumber">${dMemory.score} <span> / 100</span></p>
`

elementMemory.innerHTML = memory

let dVerbal =  {
    "category": "Verbal",
    "score": 61,
    "icon": "icon-verbal.svg"
  }

let elementVerbal = document.getElementById("verbal")

let verbal = `
<img src="${dVerbal.icon}" alt="Icon" class="imgreaction">
<p class="pverbal">${dVerbal.category}</p>
<p class="veNumber">${dVerbal.score} <span> / 100</span></p>
`

elementVerbal.innerHTML = verbal

let dVisual = {
    "category": "Visual",
    "score": 72,
    "icon": "icon-visual.svg"
}

let elementVisual = document.getElementById("visual");

let visual = `
<img src="${dVisual.icon}" alt="Icon" class="imgreaction">
<p class="pvisual">${dVisual.category}</p>
<p class="viNumber">${dVisual.score} <span> / 100</span></p>
`;

elementVisual.innerHTML = visual;

let media = (dReaction.score + dMemory.score + dVerbal.score + dVisual.score) / 4;

let mediaInt = Math.floor(media)

let elementMedia = document.getElementById("media")

elementMedia.innerHTML = mediaInt

let text = ""

if (mediaInt < 50) {
    text = "Ok"
} else if (mediaInt >= 50 && mediaInt < 80) {
    text = "Great"
} else {
    text = "Exelent"
}

let elementText = document.getElementById("pText")

elementText.innerHTML = text