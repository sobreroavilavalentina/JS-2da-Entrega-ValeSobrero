let selectedFood = ''
let selectedFoodType = []
let foodOrderOption = 0
let finalFood = 0

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
    if (foodId > 4 && foodId < 1) {
      alert(`debe ingresar una de las opciones disponibles en este momento. SOLO NÚMEROS`)
    }
  }
  return selectedFood
}

selectedFood = foodOrder()

let finalTotalPrice = 0

if (selectedFood.id == 1) {
  selectedFoodType = croissantOptions
} else if (selectedFood.id == 2) {
  selectedFoodType = cookieOptions
} else if (selectedFood.id == 3) {
  selectedFoodType = toastOptions
} else if (selectedFood.id == 4) {
  finalTotalPrice = 0 + finalDrink.price
  alert(`No desea comida.Subtotal: $${finalTotalPrice}\n${finalDrink.name} $${finalDrink.price}`)
} else {
  alert(`Alguno de los datos ingresados es incorrecto`)
}


if (selectedFood.id <= 3) {
  const foodOptions = () => {
    let foodOptionName = ''
    let foodOptionNumber = 1
    selectedFoodType.forEach(food => {
      foodOptionName += `${foodOptionNumber}- ${food.name}: $${food.price}\n`
      foodOptionNumber++
    })
  
    do {
      foodOrderOption = parseInt(prompt(`Las opciones para ${selectedFood.type} son:\n${foodOptionName}`))
      finalFood = selectedFoodType.find(food => food.opNum === foodOrderOption)
  
      if (!selectedFoodType.some(food => food.opNum == foodOrderOption)) {
        alert(`debe ingresar una de las opciones disponibles en este momento. SOLO NÚMEROS`)
      }
    } while (!selectedFoodType.some(food => food.opNum == foodOrderOption))
   
    return finalFood
  }
  finalFood = foodOptions()

}

finalTotalPrice = finalFood.price + finalDrink.price

if (selectedFood.id <= 3) {
  alert(`Perfecto. Hemos agregado su ${finalFood.name} a su pedido.\nSubtotal:$${finalTotalPrice}\n${finalDrink.name} $${finalDrink.price}\n${finalFood.name} $${finalFood.price}`)
}


