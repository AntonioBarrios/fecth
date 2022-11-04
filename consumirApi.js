//Creo una lista desordenada para mostrar los resultados
const ul = documeny.createElement("ul");

//Creo la funcion asincrona y llamo los datos con fetch

async function cargarDatos(){
  const respuesta = await fetch ('https://jsonplaceholder.typicode.com/posts')
  const datos = await respuesta.json()

// Con la respuesta creo unos elementos de lista para mostrar los resultados

  datos.forEach(function (post){
  const li = document.createElement ("li");
  li.innerText = post.title;
  ul.append(li);
  });
}

cargaDatos();
