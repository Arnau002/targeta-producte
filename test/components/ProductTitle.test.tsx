import React from 'react';
import renderer from 'react-test-renderer';

import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from '../data/products';

describe('Test <ProducTitle />', () => { 
    
    test('Es mostra correctament amb títol personalitzat', () => {         
        const wrapper = renderer.create(
            <ProductTitle title='Custom Product' />
        )

        expect( wrapper.toJSON() ).toMatchSnapshot();
    });

    test('Mostra el component amb el nom del producte', () => { 
        const wrapper = renderer.create(
            <ProductCard product={ product1 }>
                {
                    () => (
                        <ProductTitle />
                    )
                }
            </ProductCard>
            
        )

        expect( wrapper.toJSON() ).toMatchSnapshot();
    });
 });