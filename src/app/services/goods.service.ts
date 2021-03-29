import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';


@Injectable({
  providedIn: 'root'
})
export class GoodsService {

  constructor(public fs: AngularFirestore, public storage: AngularFireStorage) { }

  getAllGoods() {
    return this.fs.collection('goods').snapshotChanges();
  }

  addNewGood(name: string, price: number, image: File) {

    return new Promise( (resolve, reject) => {
      let ref = this.storage.ref('goods/' + image.name);
    
    ref.put(image).then(() => {
      ref.getDownloadURL().subscribe(photourl => {
        this.fs.collection('goods').add({
          name,
          price,
          photourl
        }).then(()=> resolve())
      })
    })
      
    })
    
  }
}
