const messages = ["Giovanni", "Marina", "Yesica", "Diego", "laura", "Carolina", "paulina"];
const randomMsg = () => {  //Funcion que muestra de forma aleatoria un nombre del string
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(message);
};

module.exports = {randomMsg};  //Exporta como un módulo la funcion randomMsg




