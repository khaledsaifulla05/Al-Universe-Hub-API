const hubApi = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/ai/tools')
    const data = await res.json();
    const allTools = data.data;
    displayTools(allTools.tools);
}

const displayTools = allTools => {

    const toolsContainer = document.getElementById('tools-container');

    allTools.forEach(tools => {
        console.log(tools)

        const toolsCard = document.createElement('div');
        toolsCard.classList = `card w-[400px] bg-gray-100 border-2 border-red-100 p-4`;
        toolsCard.innerHTML = `
        <figure><img src="${tools.image}"  /></figure>
        <div class="card-body">
        
        <h5 class = "font-semibold text-lg">Features<h5>
        <ul>1. ${tools.features[0]}</ul>
        <ul>2. ${tools.features[1]}</ul>
        <ul>3. ${tools.features[2]}</ul>
        
        <h2 class="card-title mt-4 text-2xl">${tools.name}</h2>
          <div class="card-actions items-center justify-between mt-4">
          <h3 class = "font-semibold text-xl">${tools.published_in}</h3>
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
        `;

        toolsContainer.appendChild(toolsCard)
    })
}
hubApi();