// packages

const packages = [{
  priorityLevel: 'express',
  isFragile: false,
  weight: 2,
  to: 'Sir Harrington IV',
  trackingNumber: '1324kjs'
},
{
  priorityLevel: 'standard',
  isFragile: true,
  weight: .5,
  to: 'Master Mercutio',
  trackingNumber: '1325sdk'
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: .5,
  to: 'Mistress Ravenfeather',
  trackingNumber: 'jffd147'
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 4,
  to: 'B. Robert Brown',
  trackingNumber: 'acdc145'
},
{
  priorityLevel: 'express',
  isFragile: true,
  weight: 6,
  to: 'Chancellor Wallace',
  trackingNumber: '4b2l0z'
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 5,
  to: 'Sarah Sharm',
  trackingNumber: '8081baz'
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: 12,
  to: 'Tae Lien',
  trackingNumber: 'suz2367'
}]

function drawPackage(array) {
  let packElem = document.getElementById('packages')
  let packageLineup = ''

  array.forEach(pack => {
    packageLineup +=
      `
    
    
  <div class="row card my-1 py-3 mWidth text-center align-content-center">
    <div class="col-4">
    
      <br> ${pack.to} <br>
      ${pack.priorityLevel} <br>
      ${pack.isFragile} <br>
      ${pack.weight} <br>
      ${pack.trackingNumber} <br>
      
    
    </div>
    </div>
    
    
      `

    packElem.innerHTML = packageLineup

  });

}


function byP() {
  let packP = window.prompt('priority? (free, standard, or express')
  const pName = packages.filter(pack => pack.priorityLevel.toLowerCase() == packP.toLowerCase())

  drawPackage(pName)
}

function byName() {
  let fName = window.prompt('who are you looking for?')
  const sName = packages.find(pack => pack.toLowerCase() == fName.toLowerCase())

  window.alert(`Tracking number: ${sName.trackingNumber}   `)
  // drawPackage(sName)
}

function heavyAndFragile() {
  let bigCrash = 0
  const HF = packages.filter(pack => pack.weight >= 3 && pack.isFragile == true)
  drawPackage(HF)

}

drawPackage(packages)