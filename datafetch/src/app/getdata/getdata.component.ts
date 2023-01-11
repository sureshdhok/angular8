import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-getdata',
  templateUrl: './getdata.component.html',
  styleUrls: ['./getdata.component.css']
})
export class GetdataComponent implements OnInit {

allRes:any[]=[];
getDate:any
finalData !:any[]

  constructor(private auth:AuthService) { }

  ngOnInit() {
  this.fetchData();
  }




  fetchData(){
    this.auth.getData().subscribe({
      next:(res:any) =>{
        {
          if (res) {
            this.allRes.push(res['Time Series (5min)'])
            for (const item of this.allRes) {
              for (const key in item) {
               this.getDate=key
                  
                }
                this.finalData=Object.values(item);
                console.log('item', this.finalData);
                
              }
            }
          }
        },
        error:(error)=>{
          throw error;
        },
      
    });

    
  }




}
