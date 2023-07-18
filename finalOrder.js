// DESCUENTO

const discountFinalOrder = () => {
  let discountQuestion = confirm(`¿Desea responder una pregunta para obtener un descuento del 10%?`)

  if (discountQuestion = true) {
    let discountQuestionRight = prompt(`Ingrese el APELLIDO del mejor jugador de fútbol del mundo:\n(Solo tiene un intento)`)
    if (discountQuestionRight == 'Messi' || discountQuestionRight == 'MESSI' || discountQuestionRight == 'messi') {
    const codeGenerator = (length) => {
      const characters = 'LIONELANDRESMESSI0123456789'
      let code = ''

      for (let i=0; i < length; i++) {
        const index = Math.floor(Math.random() * characters.length)
        code += characters.charAt(index)
      }

      return code
    }

    const codeLength = 6
    const randomCode = codeGenerator(codeLength)
    let insertCode = ''

    if (insertCode != randomCode) {
      do {
        insertCode = prompt(`Respuesta correcta! - Su código para el descuento del 10% es el siguiente:\n${randomCode}`)
        alert(`Código ingresado incorrecto. Respete mayúsculas.`)
      } while (insertCode != randomCode);
    } else {
      insertCode = prompt(`Respuesta correcta! - Su código para el descuento del 10% es el siguiente:\n${randomCode}`)
    }
   
    finalTotalPrice = finalTotalPrice * 0.90
    alert(`Pedido final:\n${finalFood.name}\n${finalDrink.name}\nTOTAL: $${finalTotalPrice}.-`)
    return

    } else {
      alert(`Lo sentimos, la respuesta es incorrecta.\nPedido final:\n${finalFood.name}\n${finalDrink.name}\nTOTAL: $${finalTotalPrice}.-`)
      return
    }
  } else {
    alert(`Pedido final:\n${finalFood.name}\n${finalDrink.name}\nTOTAL: $${finalTotalPrice}.-`)
    return 
  }
}

discountFinalOrder()


