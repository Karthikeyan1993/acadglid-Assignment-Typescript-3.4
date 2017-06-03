var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by USER on 03/06/2017.
 */
/**
 * Abstract class declarations,create instance for Department with use of derived class.
 */
var Department = (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log('Department name is ' + this.name);
    };
    return Department;
}());
/**
 * Inheriting Department properties and Methods
 */
var AccountingDepartment = (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, 'Account') || this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log('Your meeting is scheduled on Monday');
    };
    AccountingDepartment.prototype.printReports = function () {
        console.log('Printing Account Department Weekly Reports');
    };
    return AccountingDepartment;
}(Department));
/**
 * Inheriting Department properties and Methods
 */
var salesDepartment = (function (_super) {
    __extends(salesDepartment, _super);
    function salesDepartment() {
        return _super.call(this, 'Sales') || this;
    }
    salesDepartment.prototype.printMeeting = function () {
        console.log('Your meeting is scheduled on Friday');
    };
    salesDepartment.prototype.printReports = function () {
        console.log('Printing Sales Department Weekly Reports');
    };
    return salesDepartment;
}(Department));
var _department;
/**
 *
 * @type {AccountingDepartment}
 * @private
 */
_department = new AccountingDepartment();
_department.printName();
_department.printMeeting();
/**
 *
 * @type {salesDepartment}
 * @private
 */
_department = new salesDepartment();
_department.printName();
_department.printMeeting();
