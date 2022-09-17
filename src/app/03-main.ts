import { ProductHttpService } from './services/product-http.service';

(async() => {
  const productService = ProductHttpService.getIntance();
  const productService1 = ProductHttpService.getIntance();
  console.log(productService === productService1);

  try {
    console.log('---'.repeat(10));
    console.log('getAll');
    const products = await  productService.getAll();
    console.log(products.length);
    console.log(products.map(item => item.price));

    console.log('---'.repeat(10));
    console.log('update');
    const productId = products[0].id;
    console.log(products[0]);
    await productService.update(productId, {
      price: 10000,
      title: 'New title 2',
      description: 'New description'
    });

    console.log('---'.repeat(10));
    console.log('finOne');
    const product = await productService.findOne(productId);
    console.log(product);
  } catch (error) {
    console.error(error); // manejar el error
  }

})();
