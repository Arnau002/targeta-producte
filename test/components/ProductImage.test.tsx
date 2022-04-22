import React from 'react';
import renderer from 'react-test-renderer';

import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/products';

describe('Tests <ProductImage />', () => { 
    test('Mostra el component amb la imatge personalitzada', () => { 
                
        const wrapper = renderer.create(
            <ProductImage img='https://test.png' />
        )

        expect( wrapper.toJSON() ).toMatchSnapshot();
    });
    

    test('Mostra el component amb la imatge del producte', () => { 
        const wrapper = renderer.create(
            <ProductCard product={ product2 }>
                {
                    () => (
                        <ProductImage />
                    )
                }
            </ProductCard>
            
        )

        expect( wrapper.toJSON() ).toMatchSnapshot();
    });
 });