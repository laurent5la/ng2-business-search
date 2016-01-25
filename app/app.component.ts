import {Component, OnInit} from 'angular2/core';
import {BusinessService} from './business.service';

@Component({
  selector: 'my-app',
  template:`\n\
    <div class = "container">
    <div>
      <div style="padding: 15px;">
        <form class="form-inline" role="form" id="business_search_form">
            <label for="business_name">Business Name:</label>\n\
            <input type="text" #businessName ([ngModel])="businessName" (change)="getBusinesses(businessName.value,address.value,state.value)" id="businessName" \n\
                ngControl="businessName" #name="ngForm" ngClass="form-control" required> \n\
                <!-- <div [hidden]="name.valid" class="alert alert-danger">
                  Business Name is required
                </div> -->
            <label for="address">Business Address:</label><input type="text" #address ([ngModel])="address" (change)="getBusinesses(businessName.value,address.value,state.value)" id="address" ngControl="address" ngClass="form-control" required>
            <label for="state">State:</label><input type="text" #state ([ngModel])="state" (change)="getBusinesses(businessName.value,address.value,state.value)" id="state" ngControl="state" ngClass="form-control" required>  
                   \n\
</form>\n\
      
        <br>
        <div class = "table-responsive" align="center">
          <table class = "table table-striped table-hover">
            <tr>
              <th class="name"><a (click)="sort_by('Name')">Name <i class="fa fa-sort"></i></a></th>
              <th class="address"><a (click)="sort_by('Address')">Address <i class="fa fa-sort"></i></a></th>
              <th class="city"><a (click)="sort_by('City')">City <i class="fa fa-sort"></i></a></th>
              <th class="state"><a (click)="sort_by('State')">State <i class="fa fa-sort"></i></a></th>
            </tr>\n\
            <tr *ngFor="#business of businesses">
              <td>{{ business.name }}</td>
              <td>{{ business.address }}</td>
              <td>{{ business.city }}</td>
              <td>{{ business.state }}</td> 
            </tr>
            <!-- <tr ng-repeat="x in responseData | orderBy:sortingOrder:reverse">
              <td>{{ x.name }}</td>
              <td>{{ x.address }}</td>
              <td>{{ x.city }}</td>
              <td>{{ x.state }}</td> 
            </tr>-->
          </table>
        </div>
      </div>
     </div>
    </div>

    <!-- <h1>{{title}}</h1>
    <h2>My Addresses</h2>
    <ul class="businesses">
      <li *ngFor="#business of businesses"
        [class.selected]="business === selectedHero"
        (click)="onSelect(business)">
        <span class="badge">{{business.id}}</span> {{business.name}}
      </li>
    </ul>
    <my-business-detail [business]="selectedHero"></my-business-detail> -->
  `,
  styles:[``],
  providers: [BusinessService]
})

export class AppComponent {
  public title = 'Business Search';
  businesses: Array<any>;
  constructor(public _businessService: BusinessService) { }
  getBusinesses(name,address,state) {
      this._businessService.getBusinesses(name,address,state).subscribe(res => this.businesses = res.response.results);
      //console.log(this._businessService.getBusinesses().subscribe(res=>this.businesses=res));
  }
//  ngOnInit() {
//    this.getBusinesses(name,address,state);
//  }
  //onSelect(business: Business) { this.selectedHero = business; }
}
