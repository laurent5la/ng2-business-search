<<<<<<< HEAD
System.register(['angular2/core', './business.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, business_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (business_service_1_1) {
                business_service_1 = business_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_businessService) {
                    this._businessService = _businessService;
                    this.title = 'Business Search';
                }
                AppComponent.prototype.getBusinesses = function (name, address, state) {
                    var _this = this;
                    this._businessService.getBusinesses(name, address, state).subscribe(function (res) { return _this.businesses = res.response.results; });
                    //console.log(this._businessService.getBusinesses().subscribe(res=>this.businesses=res));
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <div class = \"container\">\n    <div>\n      <div style=\"padding: 15px;\">\n        <form class=\"form-inline\" role=\"form\" id=\"business_search_form\">\n            <label for=\"business_name\">Business Name:</label>\n            <input type=\"text\" #businessName ([ngModel])=\"businessName\" (change)=\"getBusinesses(businessName.value,address.value,state.value)\" id=\"businessName\" \n                ngControl=\"businessName\" #name=\"ngForm\" ngClass=\"form-control\" required> \n                <!-- <div [hidden]=\"name.valid\" class=\"alert alert-danger\">\n                  Business Name is required\n                </div> -->\n            <label for=\"address\">Business Address:</label><input type=\"text\" #address ([ngModel])=\"address\" (change)=\"getBusinesses(businessName.value,address.value,state.value)\" id=\"address\" ngControl=\"address\" ngClass=\"form-control\" required>\n            <label for=\"state\">State:</label><input type=\"text\" #state ([ngModel])=\"state\" (change)=\"getBusinesses(businessName.value,address.value,state.value)\" id=\"state\" ngControl=\"state\" ngClass=\"form-control\" required>  \n                   \n</form>\n      \n        <br>\n        <div class = \"table-responsive\" align=\"center\">\n          <table class = \"table table-striped table-hover\">\n            <tr>\n              <th class=\"name\"><a (click)=\"sort_by('Name')\">Name <i class=\"fa fa-sort\"></i></a></th>\n              <th class=\"address\"><a (click)=\"sort_by('Address')\">Address <i class=\"fa fa-sort\"></i></a></th>\n              <th class=\"city\"><a (click)=\"sort_by('City')\">City <i class=\"fa fa-sort\"></i></a></th>\n              <th class=\"state\"><a (click)=\"sort_by('State')\">State <i class=\"fa fa-sort\"></i></a></th>\n            </tr>\n            <tr *ngFor=\"#business of businesses\">\n              <td>{{ business.name }}</td>\n              <td>{{ business.address }}</td>\n              <td>{{ business.city }}</td>\n              <td>{{ business.state }}</td> \n            </tr>\n            <!-- <tr ng-repeat=\"x in responseData | orderBy:sortingOrder:reverse\">\n              <td>{{ x.name }}</td>\n              <td>{{ x.address }}</td>\n              <td>{{ x.city }}</td>\n              <td>{{ x.state }}</td> \n            </tr>-->\n          </table>\n        </div>\n      </div>\n     </div>\n    </div>\n\n    <!-- <h1>{{title}}</h1>\n    <h2>My Addresses</h2>\n    <ul class=\"businesses\">\n      <li *ngFor=\"#business of businesses\"\n        [class.selected]=\"business === selectedHero\"\n        (click)=\"onSelect(business)\">\n        <span class=\"badge\">{{business.id}}</span> {{business.name}}\n      </li>\n    </ul>\n    <my-business-detail [business]=\"selectedHero\"></my-business-detail> -->\n  ",
                        styles: [""],
                        providers: [business_service_1.BusinessService]
                    }), 
                    __metadata('design:paramtypes', [business_service_1.BusinessService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map
=======
(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: '<h1>DandB Angular 2 Business Search Test Version 4 Jan 22,2016</h1>'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));
>>>>>>> fd5a3c4882550a526727fff7cca120c29d4808f8
