let selectedFood = ''
let selectedFoodType = []
let foodOrderOption = 0
let finalFood = 0

const foodOptions = () => {
  let foodOptionName = ''
  let foodOptionNumber = 1
  selectedFoodType.forEach(food => {
    foodOptionName += `${foodOptionNumber}- ${food.name}\n`
    foodOptionNumber++
  })

  do {
    foodOrderOption = parseInt(prompt(`Las opciones para ${selectedFood.type} son:\n${foodOptionName}`))
    finalFood = selectedFoodType.find(food => food.opNum === foodOrderOption)

    if (!selectedFoodType.some(food => food.opNum == foodOrderOption)) {
      alert(`debe ingresar una de las opciones disponibles en este momento. SOLO NÚMEROS`)
    }
  } while (!selectedFoodType.some(food => food.opNum == foodOrderOption));
 
  return finalFood
}

const foodOrder = () => {
  let foodId = 0;

  while (!selectedFood) {
    foodId = parseInt(prompt(`Ingrese el nro. (Ej: 1) del tipo de comida que desea para ver más opciones:
    1- Medialuna
    2- Cookie
    3- Tostadas
    4- No deseo comida
    `))
    selectedFood = foodType.find(food => food.id === foodId)
    if (foodId > 4) {
      alert(`debe ingresar una de las opciones disponibles en este momento. SOLO NÚMEROS`)
    }
  }
  return selectedFood
}

selectedFood = foodOrder()



if (selectedFood.id == 1) {
  selectedFoodType = croissantOptions
} else if (selectedFood.id == 2) {
  selectedFoodType = cookieOptions
} else if (selectedFood.id == 3) {
  selectedFoodType = toastOptions
} else if (selectedFood.id == 4) {
  alert('No desea comida')
} else {
  alert(`Alguno de los datos ingresados es incorrecto`);
}


if (selectedFood.id <= 3) {
  finalFood = foodOptions()
  alert(`Perfecto. Hemos agregado su ${finalFood.name} a su pedido.`)
}



