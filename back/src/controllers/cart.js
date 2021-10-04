const jwt = require('jsonwebtoken')

export async function addCart(req, res) {
    const {
        id,
        userId
    } = req.body;
    const authorization = req.get('authorization');
    let token = null;
    if (authorization && authorization.toLowerCase().startsWith('bearer')) {
        token = authorization.substring(7);
        console.log(token)
    }
    const decodeToken = jwt.verify(token, 'secret')

    if (!token || !decodeToken.id) {
        return res.status(401).json({ error: 'token invalido' })
    }
}

import Cart from '../models/Cart.js';
import Product from '../models/Product.js';

export async function addToCart(req, res) {
    const { id_client,id_product } = req.params;
  
    try {
        let cart = await Cart.findByPk(id_client)
        let product = await Product.findByPk(id_product)
          await cart.addProduct(product)  
            
            return res.json({
                message: 'Product added successfully',
                data: product
            })
        

    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Something goes Wrong',
            data: {}

        })

    }
}
export async function getCarts(req, res) {
    try{
    let carts = await Cart.findAll()
    return res.status(200).send(carts)
    }catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Something goes Wrong',
            data: {}

        })

    }
}