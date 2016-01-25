System.register(['angular2/http', 'angular2/core', 'rxjs/Rx'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var http_1, core_1;
    var BusinessService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {}],
        execute: function() {
            BusinessService = (function () {
                function BusinessService(http) {
                    this.http = http;
                }
                BusinessService.prototype.getBusinesses = function (name, address, state) {
                    var data_array = [];
                    var address_url = "http://localhost:8888/address_api.php";
                    data_array.push({ "business_name": name, "address": address, "state": state });
                    var data = JSON.stringify(data_array);
                    //    return this.http.get('/app/address.json')
                    //    .map( (responseData: Response) => {
                    //       // console.log(responseData.json());
                    //        return (responseData.json());
                    //    });
                    return this.http.post(address_url, data)
                        .map(function (responseData) {
                        // console.log(responseData.json());
                        return (responseData.json());
                    });
                };
                BusinessService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], BusinessService);
                return BusinessService;
            })();
            exports_1("BusinessService", BusinessService);
        }
    }
});
//# sourceMappingURL=business.service.js.map