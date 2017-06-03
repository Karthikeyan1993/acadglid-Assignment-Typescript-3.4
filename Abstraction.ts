/**
 * Created by USER on 03/06/2017.
 */
/**
 * Abstract class declarations,create instance for Department with use of derived class.
 */
abstract class Department {
    constructor(public name: string) {
    }

    printName(): void {
        console.log('Department name is ' + this.name);
    }

    abstract printMeeting(): void;
}
/**
 * Inheriting Department properties and Methods
 */
class AccountingDepartment extends Department {
    constructor() {
        super('Account');
    }

    printMeeting() {
        console.log('Your meeting is scheduled on Monday');
    }

    printReports() {
        console.log('Printing Account Department Weekly Reports');
    }
}
/**
 * Inheriting Department properties and Methods
 */
class salesDepartment extends Department {
    constructor() {
        super('Sales');
    }

    printMeeting() {
        console.log('Your meeting is scheduled on Friday');
    }

    printReports() {
        console.log('Printing Sales Department Weekly Reports');
    }
}

let _department: Department;
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