import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crudui';
  favList:any = [];
  newItem: any = {};
  editItem: any = {}
  editId: any;

  constructor(private apiSrvc : ApiService){}

  getAllFavs(){
    this.apiSrvc.getFavs().subscribe(res => {      
      this.favList = res;      
      console.log(this.favList);      
    })
  }

  deleteFav(id){
    this.apiSrvc.deleteFav(id).subscribe(res => {
      console.log(res);
      this.getAllFavs();
    })
  }

  createFav(){   
    this.apiSrvc.createFav(this.newItem).subscribe(res => {
      console.log(res);
      this.getAllFavs();
      this.newItem = {};
    })
  }

  editFav(item){
    this.editId = item.id;
    this.editItem = Object.assign(item);
  }
  
  updateFav(){   
    this.apiSrvc.updateFav(this.editItem).subscribe(res => {
      console.log(res);
      this.getAllFavs();
      this.editItem = {};
      this.editId = null;
    })
  }

  ngOnInit() {
    this.getAllFavs();    
  }
}




