
import {CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';
import {Http, Headers, Response} from 'angular2/http';
import {Injectable} from 'angular2/core';
import 'rxjs/Rx';
@Injectable()
export class BusinessService {
    public constructor( public http: Http) {
    }
    
    getBusinesses(name,address,state) {
    var data_array = [];
    var address_url = "http://localhost:8888/address_api.php";
    data_array.push({"business_name": name, "address": address, "state": state});
    var data = JSON.stringify(data_array);
//    return this.http.get('/app/address.json')
//    .map( (responseData: Response) => {
//       // console.log(responseData.json());
//        return (responseData.json());
//    });
   
    return this.http.post(address_url, data)
    .map( (responseData: Response) => {
       // console.log(responseData.json());
        return (responseData.json());
    });
    
  }
   // if(typeof($scope.businessName)!=='undefined' && typeof($scope.address)!=='undefined' && typeof($scope.state)!=='undefined'){
      //if($scope.businessName.length > 3 && $scope.address.length > 3 && $scope.state.length > 1){
    
 
//        $http({method: "POST", url:address_url, data, headers : {
//                  'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
//              }}).then(function(response) {
//            $scope.responseData = response.data.response.results;
//            if ($scope.sortingOrder !== '') {
//              $scope.responseData = $filter('orderBy')($scope.responseData, $scope.sortingOrder, $scope.reverse);
//            }
//          }, function(response) {
//            $scope.responseData = response.data || "Request failed";
//        });
      //}
    //}
    
  
//  
// export class BusinessService {
//  getBusinesses() {
//    return Promise.resolve(BUSINESSES);
//  }
  // See the "Take it slow" appendix
//  getHeroesSlowly() {
//    return new Promise<Business[]>(resolve =>
//      setTimeout(()=>resolve(BUSINESSES), 2000) // 2 seconds
//    );
//  }
}