"use strict"

class HashTable{
    constructor(size){
        this.data = new Array(size);
    }

    hashMethod(key){
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }
 
    set(key,value){
        const address = this.hashMethod(key);
        //console.log(`***KEY=${key} *** ADDRESS= ${address}`);
        if (!this.data[address]){
            //Si no existe, se le asigna un nuevo arreglo pero vacío
            this.data[address] = [];
        }
        //se agrega un nuevo arreglo con el key/velue como parte del arreglo en 
        //esa posición para poder trabajar con 'las colisiones'
        this.data[address].push([key,value]);
        return this.data;
    }

    get(key){
        console.log(this.data.length);
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];
        if(currentBucket){
            //console.log("***SIZE: " + currentBucket.length);
            for (let index = 0; index < currentBucket.length; index++) {
                //Todos los ceros '0' en el arreglo es el 'key'
                if (currentBucket[index][0]===key){
                    //Todos los '1' en el arreglo es el 'value'
                    return currentBucket[index][1];
                }
            }
        }
        return undefined;
    }
}

const myHashTable = new HashTable(50);