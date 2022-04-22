# DO-Product-Card

Paquet de proves de desplegament a NPM

### Arnau Colomer

## Exemple
```
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from 'targeta-producte';
```

```
<ProductCard 
            product={ product }
            initialValues={{
                count: 4,
                maxCount: 10
            }}     
        >  
          {
            ({ reset, isMaxCountReached, count, maxCount, increaseBy }) => (
              <>
                  <ProductImage />
                  <ProductTitle />
                  <ProductButtons />                  
              </>
            )
          }      
        </ProductCard>
```