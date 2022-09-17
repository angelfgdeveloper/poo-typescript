import axios from 'axios';

(async () => {  // Funcion anonima auto ejecutable

  function delay(time: number) {
    // Promesa donde resuelve o no
    // Promise<boolean> => tipar para que la promesa sepa que va devolver
    const promise = new Promise<boolean>((resolve, reject) => {

      setTimeout(() => {
        resolve(true);
      }, time);

    });

    return promise;
  }

  function getProducts() {
    const promise = axios.get('https://api.escuelajs.co/api/v1/products');
    return promise;
  }

  // Retorna la data ya establecida
  async function getProductsAsync() {
    const rta = await axios.get('https://api.escuelajs.co/api/v1/products');
    return rta.data;
  }

  console.log('---'.repeat(10)); // Repete el string n veces
  const rta = await delay(3000); // await => resuelve la promesa que llega al valor real
  console.log(rta);

  // axios
  console.log('---'.repeat(10)); // Repete el string n veces
  const products = await getProducts();
  //console.log(products.data);

  // axios => async - await
  console.log('---'.repeat(10)); // Repete el string n veces
  const productsAsync = await getProductsAsync();
  console.log(productsAsync);

})();
