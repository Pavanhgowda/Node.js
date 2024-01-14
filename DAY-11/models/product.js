const products=[];
const { json } = require('body-parser');
const { error } = require('console');
const fs=require('fs');
const path=require('path');

const p=path.join(__dirname,'..','data','products.json');

const getProductsFromFile=(cb)=>{
        fs.readFile(p,(error,fileContent)=>{
            if(error)
            {
                cb([]);
            }
            cb([JSON.parse(fileContent)]);
        });
}

module.exports=class Product
{
    constructor(t)
    {
        this.title=t;
    }

    save()
    {
     const p=path.join(path.dirname(__dirname,'data','products.json'));
     fs.readFile(p,(error,fileContent)=>{
        getProductsFromFile(products=>{
            products.push(this);
            fs.writeFile(p,JSON.stringify(products),(error)=>{
            console.log(error);
        });
        })
        
     });
    }

    static fetchAll(cb)
    {
        getProductsFromFile(cb)
    }
};