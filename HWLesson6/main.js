// const cleanerListEl = document.querySelector(".js-cleaners-list");
// function displayCleaner(cleaner) {
//     const cleanerEl = document.createElement("p");
//     cleanerEl.innerHTML= `<h2>${cleaner.name}</h2>
//         <p>Rating: ${cleaner.rating}</p>
//         <p>Capacität: ${cleaner.optional.liter} L</p>
//         <p>Faber: ${cleaner.optional.color}</p>
//         <p>Quelle: ${cleaner.optional.electricSource}</p>
//         <p>Technologie: ${cleaner.optional.technology}</p>
//         `;
//     cleanerListEl.appendChild(cleanerEl);
// }
const cleanerListEl = document.getElementById("bosch");
const cleanerListEl1 = document.getElementById("rowenta");
const cleanerListEl2 = document.getElementById("dyson");
const cleanerListEl3 = document.getElementById("aeg");

cleanerListEl.innerHTML = `<h3>${BoschCln.name}</h3>
         <p>Rating: ${BoschCln.rating}</p>
         <p>Capacität: ${BoschCln.optional.liter} L</p>
         <p>Faber: ${BoschCln.optional.color}</p>
         <p>Quelle: ${BoschCln.optional.electricSource}</p>
         <p>Technologie: ${BoschCln.optional.technology}</p>
         `;

cleanerListEl1.innerHTML = `<h3>${RowentaCln.name}</h3>
        <p>Rating: ${RowentaCln.rating}</p>
        <p>Capacität: ${RowentaCln.optional.liter} L</p>
        <p>Faber: ${RowentaCln.optional.color}</p>
        <p>Quelle: ${RowentaCln.optional.electricSource}</p>
        <p>Technologie: ${RowentaCln.optional.technology}</p>
        `;

cleanerListEl2.innerHTML = `<h3>${DysonCln.name}</h3>
        <p>Rating: ${DysonCln.rating}</p>
        <p>Capacität: ${DysonCln.optional.liter} L</p>
        <p>Faber: ${DysonCln.optional.color}</p>
        <p>Quelle: ${DysonCln.optional.electricSource}</p>
        <p>Technologie: ${DysonCln.optional.technology}</p>
        `;

cleanerListEl3.innerHTML = `<h3>${AegCln.name}</h3>
        <p>Rating: ${AegCln.rating}</p>
        <p>Capacität: ${AegCln.optional.liter} L</p>
        <p>Faber: ${AegCln.optional.color}</p>
        <p>Quelle: ${AegCln.optional.electricSource}</p>
        <p>Technologie: ${AegCln.optional.technology}</p>
        `;