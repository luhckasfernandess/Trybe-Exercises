/*
 A função getPlanet abaixo imprime o planeta Marte de forma síncrona.
 Modifique getPlanet , de forma que Marte seja impresso assincronamente, depois de 4 segundos.
 */

const getPlanet = () => {
    const mars = {
      name: "Mars",
      distanceFromSun: {
        value: 227900000,
        measurementUnit: "kilometers",
      },
    };
    console.log("Returned planet: ", mars);
  };
  
  setTimeout(() => console.log('1 second'), 1000);
  setTimeout(() => console.log('2 seconds'), 2000);
  setTimeout(() => console.log('3 seconds'), 3000);
  
  setTimeout(() => getPlanet(), 4000); // imprime Marte depois de 4 segundos