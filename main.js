const allPackages = [
    {heavy: true, priority: false, fragile: false, to: 'Harrington', trackingNumber: '1324kjs', image: 'assets/package1.webp'}, 
    {heavy: false, priority: true, fragile: true, to: 'Mark', trackingNumber: '1325sdk', image: 'assets/package2.jpeg'}, 
    {heavy: true, priority: false, fragile: true, to: 'Mick', trackingNumber: 'jffd147', image: 'assets/package3.jpeg'}, 
    {heavy: false, priority: false, fragile: false, to: 'Jake', trackingNumber: 'acdc145', image: 'assets/package4.jpeg'}, 
    {heavy: true, priority: true, fragile: true, to: 'Brittany', image: 'assets/package5.png'}, 
    {heavy: true, priority: true, fragile: false, to: 'Jeremy', trackingNumber: 'GigaChad', image: 'assets/package7.jpeg'}]

let tog = {
    heavy: false,
    priority: false,
    fragile: false
}

function changeTog(attribute) {
    tog[attribute] = !(tog[attribute])
    filterByTog(attribute)
}

function filterByTog(attribute) {

    arr = []
    
    renderedPackages = renderedPackages.filter(p => p[tog.heavy])
    renderedPackages = renderedPackages.filter(p => p[tog.priority])
    renderedPackages = renderedPackages.filter(p => p[tog.fragile])
    renderedPackages = arr
    draw()
}

renderedPackages = []

function pageLoad() {
    renderedPackages = JSON.parse(JSON.stringify(allPackages))
    draw();
}

function draw() {
    let template = ""
    for (let i = 0; i < renderedPackages.length; i++) {
        const package = renderedPackages[i];
        template += `
       <div class="col-4 p-3">
            <div class=" text-center">
                <img class="object-fit rounded-top" src="${package.image}" alt="">
                <div class="bg-warning rounded-bottom">${package.to}'s Package</div>
            </div>
        </div>
        `
    }
    document.getElementById("packages").innerHTML = template;
}

function searchTracking() {
    window.event.preventDefault()
    const inputTracking = document.getElementById("tracking-number").value;
   
    let found = allPackages.find(p => p.trackingNumber === inputTracking);
    if(typeof found != 'undefined') {
        drawSingle(found)
    } else
    alert(`No package with tracking number '${inputTracking}' was found.`)
}

function drawSingle(single) {
    template = `
    <div class="col-4 p-3">
        <div class=" text-center">
            <img class="object-fit rounded-top" src="${single.image}" alt="">
            <div class="bg-warning">${single.to}'s Package</div>
            <div class="bg-warning rounded-bottom">Tracking Number: ${single.trackingNumber}</div>
        </div>
    </div>
    `
    document.getElementById("packages").innerHTML = template;
}

pageLoad()