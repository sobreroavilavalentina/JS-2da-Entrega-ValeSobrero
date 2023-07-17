alert('¡Bienvenido al Hotel Ummi!\nSERVICIO A LA HABITACIÓN\n')
alert('Has solicitado el servicio a la habitación de DESAYUNO.\nA continuación, contanos que preferís para desayunar y lo alcanzaremos a tu habitación en un instante!')

const drinkOrder = () => {
  let drinkId = 0
  let selectedDrink = ''

  while (!selectedDrink) {
    drinkId = parseInt(prompt(`Ingrese el nro. (Ej: 1) del tipo de bebida que desea tomar para ver más opciones:
    1- Café 
    2- Té
    3- Gaseosa
    4- Agua c/s gas - Agua saborizada
    5- No deseo bebida
    `))
    if (drinkId > 5) {
      alert(`ingrese una opción válida!`)
    }

    selectedDrink = drinkType.find(drink => drink.id === drinkId)
  }
  return selectedDrink
}

selectedDrink = drinkOrder()
let selectedDrinkType = 0
let finalDrink = 0

if ( selectedDrink.id >= 1 && selectedDrink.id < 5) {

  const drinkOptions = (drinkId) => {
    const filterDrinkTypeOp = drinkTypeOp.filter(drink => drink.id == drinkId)
    filterDrinkTypeOp.map(drinkName => drinkName.name).join('\n')
    //generar número para que salgan enumeradas las opciones de los distintos tipos de bebida
    let drinkOptionName = ''
    let drinkOptionNumber = 1
    filterDrinkTypeOp.forEach(drink => {
      drinkOptionName += `${drinkOptionNumber}- ${drink.name}\n`
      drinkOptionNumber ++
    })

    do{
      selectedDrinkType = parseInt(prompt(`Las opciones para la selección: ${selectedDrink.type} son\n${drinkOptionName}`))
      finalDrink = drinkTypeOp.find(drink => drink.id === drinkId && drink.opNum === selectedDrinkType)
      if (!filterDrinkTypeOp.some(drink => drink.opNum === selectedDrinkType)) {
        alert(`debe ingresar una de las opciones disponibles en este momento. SOLO NÚMEROS`)
      } else {
        alert(`Perfecto. Hemos agregado su ${finalDrink.name} a su pedido.`)
        break;
      }
    } while (!filterDrinkTypeOp.some(drink => drink.opNum === selectedDrinkType))
    
    return finalDrink
  }  
    selectedDrinkType = drinkOptions(selectedDrink.id)
} else if (selectedDrink.id === 5){
  alert(`entendido, no desea bebida`)
} else {
  alert(`ingrese una opción válida!`)
}

// const finalDrinkOrder = new Final (finalDrink.name)
// console.log(finalDrinkOrder);
