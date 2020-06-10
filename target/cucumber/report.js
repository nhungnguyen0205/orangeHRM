$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/ApplyLeave.feature");
formatter.feature({
  "name": "Apply Leave",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@leave"
    }
  ]
});
formatter.scenario({
  "name": "Verify that ESS can see \"Apply\", \"My Leave\", \"Entitlements\" and \"Reports\" submenu",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@leave"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open \"https://opensource-demo.orangehrmlive.com/index.php/auth/login\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "EssLogin.iOpenPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type username \"fiona\"",
  "keyword": "When "
});
formatter.match({
  "location": "EssLogin.iTypeUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type pass \"12345678\"",
  "keyword": "And "
});
formatter.match({
  "location": "EssLogin.iTypePass(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"LOGIN\" button",
  "keyword": "And "
});
formatter.match({
  "location": "EssLogin.iClickOnButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I wait some seconds",
  "keyword": "Then "
});
formatter.match({
  "location": "EssLogin.iWaitMinutes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I focus mouse on \"Leave\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddEmployee.iFocusMouseOn(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I can see \"Apply\", \"My Leave\", \"Entitlements\" and \"Reports\" submenu",
  "keyword": "Then "
});
formatter.match({
  "location": "ApplyLeave.iCanSeeAndSubmenu(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify that ESS can apply leave Full Day with valid data",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I open \"https://opensource-demo.orangehrmlive.com/index.php/auth/login\" page",
  "keyword": "Given "
});
formatter.step({
  "name": "I type username \"fiona\"",
  "keyword": "When "
});
formatter.step({
  "name": "I type pass \"12345678\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click on \"LOGIN\" button",
  "keyword": "And "
});
formatter.step({
  "name": "I wait some seconds",
  "keyword": "Then "
});
formatter.step({
  "name": "I focus mouse on \"Leave\"",
  "keyword": "When "
});
formatter.step({
  "name": "I click on \"Apply\" on SubMenu",
  "keyword": "And "
});
formatter.step({
  "name": "I wait some seconds",
  "keyword": "And "
});
formatter.step({
  "name": "I select \u003cleaveTypeValue\u003e in \"Leave Type\" field",
  "keyword": "And "
});
formatter.step({
  "name": "I type \u003cstartDate\u003e in \"From Date\" field",
  "keyword": "And "
});
formatter.step({
  "name": "I type \u003cendDate\u003e in \"To Date\" field",
  "keyword": "And "
});
formatter.step({
  "name": "At \"To Date\", I press enter on my keyboard",
  "keyword": "And "
});
formatter.step({
  "name": "I select \u003cdurationValue\u003e in \"Duration\" field",
  "keyword": "And "
});
formatter.step({
  "name": "I click on \"Apply\" button",
  "keyword": "And "
});
formatter.step({
  "name": "I wait some seconds",
  "keyword": "And "
});
formatter.step({
  "name": "I click on \"My Leave\" on SubMenu",
  "keyword": "And "
});
formatter.step({
  "name": "I wait some seconds",
  "keyword": "Then "
});
formatter.step({
  "name": "new record will be added in \"My Leave\" page with data:\"2020-06-25\" in \"Date\", \"Vacation US\" in \"Leave Type\", \"11.00\" in \"Leave Balance\", \"8.00\" in \"Number of Hours\", and \"Pending Approval\" in \"Status\".",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "leaveTypeValue",
        "startDate",
        "endDate",
        "durationValue"
      ]
    },
    {
      "cells": [
        "\"Vacation US\"",
        "\"2020-06-25\"",
        "\"2020-06-25\"",
        "\"Full Day\""
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify that ESS can apply leave Full Day with valid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@leave"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open \"https://opensource-demo.orangehrmlive.com/index.php/auth/login\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "EssLogin.iOpenPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type username \"fiona\"",
  "keyword": "When "
});
formatter.match({
  "location": "EssLogin.iTypeUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type pass \"12345678\"",
  "keyword": "And "
});
formatter.match({
  "location": "EssLogin.iTypePass(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"LOGIN\" button",
  "keyword": "And "
});
formatter.match({
  "location": "EssLogin.iClickOnButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I wait some seconds",
  "keyword": "Then "
});
formatter.match({
  "location": "EssLogin.iWaitMinutes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I focus mouse on \"Leave\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddEmployee.iFocusMouseOn(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"Apply\" on SubMenu",
  "keyword": "And "
});
formatter.match({
  "location": "AddEmployee.iClickOnOnSubMenu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I wait some seconds",
  "keyword": "And "
});
formatter.match({
  "location": "EssLogin.iWaitMinutes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select \"Vacation US\" in \"Leave Type\" field",
  "keyword": "And "
});
formatter.match({
  "location": "ContactDetails.iSelectInField(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type \"2020-06-25\" in \"From Date\" field",
  "keyword": "And "
});
formatter.match({
  "location": "ContactDetails.iTypeInField(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type \"2020-06-25\" in \"To Date\" field",
  "keyword": "And "
});
formatter.match({
  "location": "ContactDetails.iTypeInField(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "At \"To Date\", I press enter on my keyboard",
  "keyword": "And "
});
formatter.match({
  "location": "AddEmployee.atIPressEnterOnMyKeyboard(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select \"Full Day\" in \"Duration\" field",
  "keyword": "And "
});
formatter.match({
  "location": "ContactDetails.iSelectInField(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"Apply\" button",
  "keyword": "And "
});
formatter.match({
  "location": "EssLogin.iClickOnButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I wait some seconds",
  "keyword": "And "
});
formatter.match({
  "location": "EssLogin.iWaitMinutes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"My Leave\" on SubMenu",
  "keyword": "And "
});
formatter.match({
  "location": "AddEmployee.iClickOnOnSubMenu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I wait some seconds",
  "keyword": "Then "
});
formatter.match({
  "location": "EssLogin.iWaitMinutes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "new record will be added in \"My Leave\" page with data:\"2020-06-25\" in \"Date\", \"Vacation US\" in \"Leave Type\", \"11.00\" in \"Leave Balance\", \"8.00\" in \"Number of Hours\", and \"Pending Approval\" in \"Status\".",
  "keyword": "Then "
});
formatter.match({
  "location": "ApplyLeave.newRecordWillBeAddedInPageWithDataInInInInAndIn(String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify that ESS can apply leave Haft Day with valid data",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I open \"https://opensource-demo.orangehrmlive.com/index.php/auth/login\" page",
  "keyword": "Given "
});
formatter.step({
  "name": "I type username \"fiona\"",
  "keyword": "When "
});
formatter.step({
  "name": "I type pass \"12345678\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click on \"LOGIN\" button",
  "keyword": "And "
});
formatter.step({
  "name": "I wait some seconds",
  "keyword": "Then "
});
formatter.step({
  "name": "I focus mouse on \"Leave\"",
  "keyword": "When "
});
formatter.step({
  "name": "I click on \"Apply\" on SubMenu",
  "keyword": "And "
});
formatter.step({
  "name": "I wait some seconds",
  "keyword": "And "
});
formatter.step({
  "name": "I select \u003cleaveTypeValue\u003e in \"Leave Type\" field",
  "keyword": "And "
});
formatter.step({
  "name": "I type \u003cstartDate\u003e in \"From Date\" field",
  "keyword": "And "
});
formatter.step({
  "name": "I type \u003cendDate\u003e in \"To Date\" field",
  "keyword": "And "
});
formatter.step({
  "name": "At \"To Date\", I press enter on my keyboard",
  "keyword": "And "
});
formatter.step({
  "name": "I select \u003cdurationValue\u003e in \"Duration\" field",
  "keyword": "And "
});
formatter.step({
  "name": "I click on \"Apply\" button",
  "keyword": "And "
});
formatter.step({
  "name": "I wait some seconds",
  "keyword": "And "
});
formatter.step({
  "name": "I click on \"My Leave\" on SubMenu",
  "keyword": "And "
});
formatter.step({
  "name": "I wait some seconds",
  "keyword": "Then "
});
formatter.step({
  "name": "new record will be added in \"My Leave\" page with data:\"2020-06-22 (09:00 - 13:00) Half Day\" in \"Date\", \"Paternity US\" in \"Leave Type\", \"3.50\" in \"Leave Balance\", \"4.00\" in \"Number of Hours\", and \"Pending Approval\" in \"Status\".",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "leaveTypeValue",
        "startDate",
        "endDate",
        "durationValue"
      ]
    },
    {
      "cells": [
        "\"Paternity US\"",
        "\"2020-06-22\"",
        "\"2020-06-22\"",
        "\"Half Day\""
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify that ESS can apply leave Haft Day with valid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@leave"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open \"https://opensource-demo.orangehrmlive.com/index.php/auth/login\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "EssLogin.iOpenPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type username \"fiona\"",
  "keyword": "When "
});
formatter.match({
  "location": "EssLogin.iTypeUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type pass \"12345678\"",
  "keyword": "And "
});
formatter.match({
  "location": "EssLogin.iTypePass(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"LOGIN\" button",
  "keyword": "And "
});
formatter.match({
  "location": "EssLogin.iClickOnButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I wait some seconds",
  "keyword": "Then "
});
formatter.match({
  "location": "EssLogin.iWaitMinutes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I focus mouse on \"Leave\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddEmployee.iFocusMouseOn(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"Apply\" on SubMenu",
  "keyword": "And "
});
formatter.match({
  "location": "AddEmployee.iClickOnOnSubMenu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I wait some seconds",
  "keyword": "And "
});
formatter.match({
  "location": "EssLogin.iWaitMinutes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select \"Paternity US\" in \"Leave Type\" field",
  "keyword": "And "
});
formatter.match({
  "location": "ContactDetails.iSelectInField(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type \"2020-06-22\" in \"From Date\" field",
  "keyword": "And "
});
formatter.match({
  "location": "ContactDetails.iTypeInField(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type \"2020-06-22\" in \"To Date\" field",
  "keyword": "And "
});
formatter.match({
  "location": "ContactDetails.iTypeInField(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "At \"To Date\", I press enter on my keyboard",
  "keyword": "And "
});
formatter.match({
  "location": "AddEmployee.atIPressEnterOnMyKeyboard(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select \"Half Day\" in \"Duration\" field",
  "keyword": "And "
});
formatter.match({
  "location": "ContactDetails.iSelectInField(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"Apply\" button",
  "keyword": "And "
});
formatter.match({
  "location": "EssLogin.iClickOnButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I wait some seconds",
  "keyword": "And "
});
formatter.match({
  "location": "EssLogin.iWaitMinutes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"My Leave\" on SubMenu",
  "keyword": "And "
});
formatter.match({
  "location": "AddEmployee.iClickOnOnSubMenu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I wait some seconds",
  "keyword": "Then "
});
formatter.match({
  "location": "EssLogin.iWaitMinutes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "new record will be added in \"My Leave\" page with data:\"2020-06-22 (09:00 - 13:00) Half Day\" in \"Date\", \"Paternity US\" in \"Leave Type\", \"3.50\" in \"Leave Balance\", \"4.00\" in \"Number of Hours\", and \"Pending Approval\" in \"Status\".",
  "keyword": "Then "
});
formatter.match({
  "location": "ApplyLeave.newRecordWillBeAddedInPageWithDataInInInInAndIn(String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that ESS can apply leave specify time with valid data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@leave"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open \"https://opensource-demo.orangehrmlive.com/index.php/auth/login\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "EssLogin.iOpenPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type username \"fiona\"",
  "keyword": "When "
});
formatter.match({
  "location": "EssLogin.iTypeUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type pass \"12345678\"",
  "keyword": "And "
});
formatter.match({
  "location": "EssLogin.iTypePass(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"LOGIN\" button",
  "keyword": "And "
});
formatter.match({
  "location": "EssLogin.iClickOnButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I wait some seconds",
  "keyword": "Then "
});
formatter.match({
  "location": "EssLogin.iWaitMinutes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I focus mouse on \"Leave\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddEmployee.iFocusMouseOn(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"Apply\" on SubMenu",
  "keyword": "And "
});
formatter.match({
  "location": "AddEmployee.iClickOnOnSubMenu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I wait some seconds",
  "keyword": "And "
});
formatter.match({
  "location": "EssLogin.iWaitMinutes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select \"Maternity US\" in \"Leave Type\" field",
  "keyword": "And "
});
formatter.match({
  "location": "ContactDetails.iSelectInField(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type \"2020-06-29\" in \"From Date\" field",
  "keyword": "And "
});
formatter.match({
  "location": "ContactDetails.iTypeInField(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type \"2020-06-29\" in \"To Date\" field",
  "keyword": "And "
});
formatter.match({
  "location": "ContactDetails.iTypeInField(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "At \"To Date\", I press enter on my keyboard",
  "keyword": "And "
});
formatter.match({
  "location": "AddEmployee.atIPressEnterOnMyKeyboard(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select \"Specify Time\" in \"Duration\" field",
  "keyword": "And "
});
formatter.match({
  "location": "ContactDetails.iSelectInField(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select \"09:00\" in \"From\" field",
  "keyword": "And "
});
formatter.match({
  "location": "ContactDetails.iSelectInField(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select \"11:30\" in \"To\" field",
  "keyword": "And "
});
formatter.match({
  "location": "ContactDetails.iSelectInField(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"Apply\" button",
  "keyword": "And "
});
formatter.match({
  "location": "EssLogin.iClickOnButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I wait some seconds",
  "keyword": "And "
});
formatter.match({
  "location": "EssLogin.iWaitMinutes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"My Leave\" on SubMenu",
  "keyword": "And "
});
formatter.match({
  "location": "AddEmployee.iClickOnOnSubMenu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "new record will be added in \"My Leave\" page with data:\"2020-06-29 (09:00 - 11:30)\" in \"Date\", \"Maternity US\" in \"Leave Type\", \"4.69\" in \"Leave Balance\", \"2.50\" in \"Number of Hours\", and \"Pending Approval\" in \"Status\".",
  "keyword": "Then "
});
formatter.match({
  "location": "ApplyLeave.newRecordWillBeAddedInPageWithDataInInInInAndIn(String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify that ESS user can not apply leave with invalid data",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I open \"https://opensource-demo.orangehrmlive.com/index.php/auth/login\" page",
  "keyword": "Given "
});
formatter.step({
  "name": "I type username \"fiona\"",
  "keyword": "When "
});
formatter.step({
  "name": "I type pass \"12345678\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click on \"LOGIN\" button",
  "keyword": "And "
});
formatter.step({
  "name": "I wait some seconds",
  "keyword": "Then "
});
formatter.step({
  "name": "I focus mouse on \"Leave\"",
  "keyword": "When "
});
formatter.step({
  "name": "I click on \"Apply\" on SubMenu",
  "keyword": "And "
});
formatter.step({
  "name": "I wait some seconds",
  "keyword": "And "
});
formatter.step({
  "name": "I select \u003cleaveType\u003e in \"Leave Type\" field",
  "keyword": "And "
});
formatter.step({
  "name": "I type \u003cstartDate\u003e in \"From Date\" field",
  "keyword": "And "
});
formatter.step({
  "name": "I type \u003cendDate\u003e in \"To Date\" field",
  "keyword": "And "
});
formatter.step({
  "name": "At \"To Date\", I press enter on my keyboard",
  "keyword": "And "
});
formatter.step({
  "name": "I wait some seconds",
  "keyword": "And "
});
formatter.step({
  "name": "I click on \"Apply\" button",
  "keyword": "And "
});
formatter.step({
  "name": "message \u003cerr\u003e will be appeared",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "leaveType",
        "startDate",
        "endDate",
        "err"
      ]
    },
    {
      "cells": [
        "\"--Select--\"",
        "\"2020-06-25\"",
        "\"2020-06-25\"",
        "\"Required\""
      ]
    },
    {
      "cells": [
        "\"Vacation US\"",
        "\" \"",
        "\"2020-06-25\"",
        "\"Should be a valid date in yyyy-mm-dd format\""
      ]
    },
    {
      "cells": [
        "\"Vacation US\"",
        "\"2020-06-25\"",
        "\"22255\"",
        "\"Should be a valid date in yyyy-mm-dd format\""
      ]
    },
    {
      "cells": [
        "\"Vacation US\"",
        "\"2020-06-25\"",
        "\"2020-06-24\"",
        "\"To date should be after from date\""
      ]
    },
    {
      "cells": [
        "\"Vacation US\"",
        "\"2020-06-25\"",
        "\"2020-06-25\"",
        "\"Failed to Submit\""
      ]
    },
    {
      "cells": [
        "\"Vacation US\"",
        "\"2020-07-01\"",
        "\"2020-07-31\"",
        "\"Leave Balance Exceeded\""
      ]
    },
    {
      "cells": [
        "\"Maternity US\"",
        "\"2020-06-25\"",
        "\"2020-06-25\"",
        "\"Failed to Submit\""
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify that ESS user can not apply leave with invalid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@leave"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open \"https://opensource-demo.orangehrmlive.com/index.php/auth/login\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "EssLogin.iOpenPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type username \"fiona\"",
  "keyword": "When "
});
formatter.match({
  "location": "EssLogin.iTypeUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type pass \"12345678\"",
  "keyword": "And "
});
formatter.match({
  "location": "EssLogin.iTypePass(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"LOGIN\" button",
  "keyword": "And "
});
formatter.match({
  "location": "EssLogin.iClickOnButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I wait some seconds",
  "keyword": "Then "
});
formatter.match({
  "location": "EssLogin.iWaitMinutes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I focus mouse on \"Leave\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddEmployee.iFocusMouseOn(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"Apply\" on SubMenu",
  "keyword": "And "
});
formatter.match({
  "location": "AddEmployee.iClickOnOnSubMenu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I wait some seconds",
  "keyword": "And "
});
formatter.match({
  "location": "EssLogin.iWaitMinutes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select \"--Select--\" in \"Leave Type\" field",
  "keyword": "And "
});
formatter.match({
  "location": "ContactDetails.iSelectInField(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type \"2020-06-25\" in \"From Date\" field",
  "keyword": "And "
});
formatter.match({
  "location": "ContactDetails.iTypeInField(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type \"2020-06-25\" in \"To Date\" field",
  "keyword": "And "
});
formatter.match({
  "location": "ContactDetails.iTypeInField(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "At \"To Date\", I press enter on my keyboard",
  "keyword": "And "
});
formatter.match({
  "location": "AddEmployee.atIPressEnterOnMyKeyboard(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I wait some seconds",
  "keyword": "And "
});
formatter.match({
  "location": "EssLogin.iWaitMinutes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"Apply\" button",
  "keyword": "And "
});
formatter.match({
  "location": "EssLogin.iClickOnButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "message \"Required\" will be appeared",
  "keyword": "Then "
});
formatter.match({
  "location": "EssLogin.MessageWillBeAppeared(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that ESS user can not apply leave with invalid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@leave"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open \"https://opensource-demo.orangehrmlive.com/index.php/auth/login\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "EssLogin.iOpenPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type username \"fiona\"",
  "keyword": "When "
});
formatter.match({
  "location": "EssLogin.iTypeUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type pass \"12345678\"",
  "keyword": "And "
});
formatter.match({
  "location": "EssLogin.iTypePass(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"LOGIN\" button",
  "keyword": "And "
});
formatter.match({
  "location": "EssLogin.iClickOnButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I wait some seconds",
  "keyword": "Then "
});
formatter.match({
  "location": "EssLogin.iWaitMinutes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I focus mouse on \"Leave\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddEmployee.iFocusMouseOn(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"Apply\" on SubMenu",
  "keyword": "And "
});
formatter.match({
  "location": "AddEmployee.iClickOnOnSubMenu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I wait some seconds",
  "keyword": "And "
});
formatter.match({
  "location": "EssLogin.iWaitMinutes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select \"Vacation US\" in \"Leave Type\" field",
  "keyword": "And "
});
formatter.match({
  "location": "ContactDetails.iSelectInField(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type \" \" in \"From Date\" field",
  "keyword": "And "
});
formatter.match({
  "location": "ContactDetails.iTypeInField(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type \"2020-06-25\" in \"To Date\" field",
  "keyword": "And "
});
formatter.match({
  "location": "ContactDetails.iTypeInField(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "At \"To Date\", I press enter on my keyboard",
  "keyword": "And "
});
formatter.match({
  "location": "AddEmployee.atIPressEnterOnMyKeyboard(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I wait some seconds",
  "keyword": "And "
});
formatter.match({
  "location": "EssLogin.iWaitMinutes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"Apply\" button",
  "keyword": "And "
});
formatter.match({
  "location": "EssLogin.iClickOnButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "message \"Should be a valid date in yyyy-mm-dd format\" will be appeared",
  "keyword": "Then "
});
formatter.match({
  "location": "EssLogin.MessageWillBeAppeared(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that ESS user can not apply leave with invalid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@leave"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open \"https://opensource-demo.orangehrmlive.com/index.php/auth/login\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "EssLogin.iOpenPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type username \"fiona\"",
  "keyword": "When "
});
formatter.match({
  "location": "EssLogin.iTypeUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type pass \"12345678\"",
  "keyword": "And "
});
formatter.match({
  "location": "EssLogin.iTypePass(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"LOGIN\" button",
  "keyword": "And "
});
formatter.match({
  "location": "EssLogin.iClickOnButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I wait some seconds",
  "keyword": "Then "
});
formatter.match({
  "location": "EssLogin.iWaitMinutes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I focus mouse on \"Leave\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddEmployee.iFocusMouseOn(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"Apply\" on SubMenu",
  "keyword": "And "
});
formatter.match({
  "location": "AddEmployee.iClickOnOnSubMenu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I wait some seconds",
  "keyword": "And "
});
formatter.match({
  "location": "EssLogin.iWaitMinutes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select \"Vacation US\" in \"Leave Type\" field",
  "keyword": "And "
});
formatter.match({
  "location": "ContactDetails.iSelectInField(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type \"2020-06-25\" in \"From Date\" field",
  "keyword": "And "
});
formatter.match({
  "location": "ContactDetails.iTypeInField(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type \"22255\" in \"To Date\" field",
  "keyword": "And "
});
formatter.match({
  "location": "ContactDetails.iTypeInField(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "At \"To Date\", I press enter on my keyboard",
  "keyword": "And "
});
formatter.match({
  "location": "AddEmployee.atIPressEnterOnMyKeyboard(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I wait some seconds",
  "keyword": "And "
});
formatter.match({
  "location": "EssLogin.iWaitMinutes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"Apply\" button",
  "keyword": "And "
});
formatter.match({
  "location": "EssLogin.iClickOnButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "message \"Should be a valid date in yyyy-mm-dd format\" will be appeared",
  "keyword": "Then "
});
formatter.match({
  "location": "EssLogin.MessageWillBeAppeared(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that ESS user can not apply leave with invalid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@leave"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open \"https://opensource-demo.orangehrmlive.com/index.php/auth/login\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "EssLogin.iOpenPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type username \"fiona\"",
  "keyword": "When "
});
formatter.match({
  "location": "EssLogin.iTypeUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type pass \"12345678\"",
  "keyword": "And "
});
formatter.match({
  "location": "EssLogin.iTypePass(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"LOGIN\" button",
  "keyword": "And "
});
formatter.match({
  "location": "EssLogin.iClickOnButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I wait some seconds",
  "keyword": "Then "
});
formatter.match({
  "location": "EssLogin.iWaitMinutes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I focus mouse on \"Leave\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddEmployee.iFocusMouseOn(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"Apply\" on SubMenu",
  "keyword": "And "
});
formatter.match({
  "location": "AddEmployee.iClickOnOnSubMenu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I wait some seconds",
  "keyword": "And "
});
formatter.match({
  "location": "EssLogin.iWaitMinutes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select \"Vacation US\" in \"Leave Type\" field",
  "keyword": "And "
});
formatter.match({
  "location": "ContactDetails.iSelectInField(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type \"2020-06-25\" in \"From Date\" field",
  "keyword": "And "
});
formatter.match({
  "location": "ContactDetails.iTypeInField(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type \"2020-06-24\" in \"To Date\" field",
  "keyword": "And "
});
formatter.match({
  "location": "ContactDetails.iTypeInField(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "At \"To Date\", I press enter on my keyboard",
  "keyword": "And "
});
formatter.match({
  "location": "AddEmployee.atIPressEnterOnMyKeyboard(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I wait some seconds",
  "keyword": "And "
});
formatter.match({
  "location": "EssLogin.iWaitMinutes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"Apply\" button",
  "keyword": "And "
});
formatter.match({
  "location": "EssLogin.iClickOnButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "message \"To date should be after from date\" will be appeared",
  "keyword": "Then "
});
formatter.match({
  "location": "EssLogin.MessageWillBeAppeared(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that ESS user can not apply leave with invalid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@leave"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open \"https://opensource-demo.orangehrmlive.com/index.php/auth/login\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "EssLogin.iOpenPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type username \"fiona\"",
  "keyword": "When "
});
formatter.match({
  "location": "EssLogin.iTypeUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type pass \"12345678\"",
  "keyword": "And "
});
formatter.match({
  "location": "EssLogin.iTypePass(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"LOGIN\" button",
  "keyword": "And "
});
formatter.match({
  "location": "EssLogin.iClickOnButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I wait some seconds",
  "keyword": "Then "
});
formatter.match({
  "location": "EssLogin.iWaitMinutes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I focus mouse on \"Leave\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddEmployee.iFocusMouseOn(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"Apply\" on SubMenu",
  "keyword": "And "
});
formatter.match({
  "location": "AddEmployee.iClickOnOnSubMenu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I wait some seconds",
  "keyword": "And "
});
formatter.match({
  "location": "EssLogin.iWaitMinutes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select \"Vacation US\" in \"Leave Type\" field",
  "keyword": "And "
});
formatter.match({
  "location": "ContactDetails.iSelectInField(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type \"2020-06-25\" in \"From Date\" field",
  "keyword": "And "
});
formatter.match({
  "location": "ContactDetails.iTypeInField(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type \"2020-06-25\" in \"To Date\" field",
  "keyword": "And "
});
formatter.match({
  "location": "ContactDetails.iTypeInField(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "At \"To Date\", I press enter on my keyboard",
  "keyword": "And "
});
formatter.match({
  "location": "AddEmployee.atIPressEnterOnMyKeyboard(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I wait some seconds",
  "keyword": "And "
});
formatter.match({
  "location": "EssLogin.iWaitMinutes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"Apply\" button",
  "keyword": "And "
});
formatter.match({
  "location": "EssLogin.iClickOnButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "message \"Failed to Submit\" will be appeared",
  "keyword": "Then "
});
formatter.match({
  "location": "EssLogin.MessageWillBeAppeared(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that ESS user can not apply leave with invalid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@leave"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open \"https://opensource-demo.orangehrmlive.com/index.php/auth/login\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "EssLogin.iOpenPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type username \"fiona\"",
  "keyword": "When "
});
formatter.match({
  "location": "EssLogin.iTypeUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type pass \"12345678\"",
  "keyword": "And "
});
formatter.match({
  "location": "EssLogin.iTypePass(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"LOGIN\" button",
  "keyword": "And "
});
formatter.match({
  "location": "EssLogin.iClickOnButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I wait some seconds",
  "keyword": "Then "
});
formatter.match({
  "location": "EssLogin.iWaitMinutes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I focus mouse on \"Leave\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddEmployee.iFocusMouseOn(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"Apply\" on SubMenu",
  "keyword": "And "
});
formatter.match({
  "location": "AddEmployee.iClickOnOnSubMenu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I wait some seconds",
  "keyword": "And "
});
formatter.match({
  "location": "EssLogin.iWaitMinutes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select \"Vacation US\" in \"Leave Type\" field",
  "keyword": "And "
});
formatter.match({
  "location": "ContactDetails.iSelectInField(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type \"2020-07-01\" in \"From Date\" field",
  "keyword": "And "
});
formatter.match({
  "location": "ContactDetails.iTypeInField(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type \"2020-07-31\" in \"To Date\" field",
  "keyword": "And "
});
formatter.match({
  "location": "ContactDetails.iTypeInField(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "At \"To Date\", I press enter on my keyboard",
  "keyword": "And "
});
formatter.match({
  "location": "AddEmployee.atIPressEnterOnMyKeyboard(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I wait some seconds",
  "keyword": "And "
});
formatter.match({
  "location": "EssLogin.iWaitMinutes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"Apply\" button",
  "keyword": "And "
});
formatter.match({
  "location": "EssLogin.iClickOnButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "message \"Leave Balance Exceeded\" will be appeared",
  "keyword": "Then "
});
formatter.match({
  "location": "EssLogin.MessageWillBeAppeared(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that ESS user can not apply leave with invalid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@leave"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open \"https://opensource-demo.orangehrmlive.com/index.php/auth/login\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "EssLogin.iOpenPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type username \"fiona\"",
  "keyword": "When "
});
formatter.match({
  "location": "EssLogin.iTypeUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type pass \"12345678\"",
  "keyword": "And "
});
formatter.match({
  "location": "EssLogin.iTypePass(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"LOGIN\" button",
  "keyword": "And "
});
formatter.match({
  "location": "EssLogin.iClickOnButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I wait some seconds",
  "keyword": "Then "
});
formatter.match({
  "location": "EssLogin.iWaitMinutes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I focus mouse on \"Leave\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddEmployee.iFocusMouseOn(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"Apply\" on SubMenu",
  "keyword": "And "
});
formatter.match({
  "location": "AddEmployee.iClickOnOnSubMenu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I wait some seconds",
  "keyword": "And "
});
formatter.match({
  "location": "EssLogin.iWaitMinutes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select \"Maternity US\" in \"Leave Type\" field",
  "keyword": "And "
});
formatter.match({
  "location": "ContactDetails.iSelectInField(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type \"2020-06-25\" in \"From Date\" field",
  "keyword": "And "
});
formatter.match({
  "location": "ContactDetails.iTypeInField(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type \"2020-06-25\" in \"To Date\" field",
  "keyword": "And "
});
formatter.match({
  "location": "ContactDetails.iTypeInField(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "At \"To Date\", I press enter on my keyboard",
  "keyword": "And "
});
formatter.match({
  "location": "AddEmployee.atIPressEnterOnMyKeyboard(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I wait some seconds",
  "keyword": "And "
});
formatter.match({
  "location": "EssLogin.iWaitMinutes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"Apply\" button",
  "keyword": "And "
});
formatter.match({
  "location": "EssLogin.iClickOnButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "message \"Failed to Submit\" will be appeared",
  "keyword": "Then "
});
formatter.match({
  "location": "EssLogin.MessageWillBeAppeared(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/MyLeave.feature");
formatter.feature({
  "name": "My Leave",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@leave"
    }
  ]
});
formatter.scenario({
  "name": "Verify that My Leave page will be displayed when ESS user click on My Leave on menu",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@leave"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open \"https://opensource-demo.orangehrmlive.com/index.php/auth/login\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "EssLogin.iOpenPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type username \"fiona\"",
  "keyword": "When "
});
formatter.match({
  "location": "EssLogin.iTypeUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type pass \"12345678\"",
  "keyword": "And "
});
formatter.match({
  "location": "EssLogin.iTypePass(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"LOGIN\" button",
  "keyword": "And "
});
formatter.match({
  "location": "EssLogin.iClickOnButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I wait some seconds",
  "keyword": "Then "
});
formatter.match({
  "location": "EssLogin.iWaitMinutes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I focus mouse on \"Leave\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddEmployee.iFocusMouseOn(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"My Leave\" on SubMenu",
  "keyword": "And "
});
formatter.match({
  "location": "AddEmployee.iClickOnOnSubMenu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"My Leave List\" page will be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "EssLogin.pageWillBeDisplayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that Date and  Status can be clickable",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@leave"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open \"https://opensource-demo.orangehrmlive.com/index.php/auth/login\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "EssLogin.iOpenPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type username \"fiona\"",
  "keyword": "When "
});
formatter.match({
  "location": "EssLogin.iTypeUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type pass \"12345678\"",
  "keyword": "And "
});
formatter.match({
  "location": "EssLogin.iTypePass(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"LOGIN\" button",
  "keyword": "And "
});
formatter.match({
  "location": "EssLogin.iClickOnButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I wait some seconds",
  "keyword": "Then "
});
formatter.match({
  "location": "EssLogin.iWaitMinutes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I focus mouse on \"Leave\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddEmployee.iFocusMouseOn(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"My Leave\" on SubMenu",
  "keyword": "And "
});
formatter.match({
  "location": "AddEmployee.iClickOnOnSubMenu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I wait some seconds",
  "keyword": "Then "
});
formatter.match({
  "location": "EssLogin.iWaitMinutes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Date, Name, and Status can be clickable",
  "keyword": "Then "
});
formatter.match({
  "location": "MyLeave.dateNameAndStatusCanBeClickable()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that PIM record will be displayed when ESS click on \"Employee Name\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@leave"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open \"https://opensource-demo.orangehrmlive.com/index.php/auth/login\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "EssLogin.iOpenPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type username \"fiona\"",
  "keyword": "When "
});
formatter.match({
  "location": "EssLogin.iTypeUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type pass \"12345678\"",
  "keyword": "And "
});
formatter.match({
  "location": "EssLogin.iTypePass(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"LOGIN\" button",
  "keyword": "And "
});
formatter.match({
  "location": "EssLogin.iClickOnButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I wait some seconds",
  "keyword": "Then "
});
formatter.match({
  "location": "EssLogin.iWaitMinutes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I focus mouse on \"Leave\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddEmployee.iFocusMouseOn(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"My Leave\" on SubMenu",
  "keyword": "And "
});
formatter.match({
  "location": "AddEmployee.iClickOnOnSubMenu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I wait some seconds",
  "keyword": "Then "
});
formatter.match({
  "location": "EssLogin.iWaitMinutes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"Employee Name\"",
  "keyword": "When "
});
formatter.match({
  "location": "MyLeave.iClickOn(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//td[1]/tr[1]/*[1]\"}\n  (Session info: chrome\u003d83.0.4103.97)\n  (Driver info: chromedriver\u003d2.37.544337 (8c0344a12e552148c185f7d5117db1f28d6c9e85),platform\u003dMac OS X 10.15.5 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Phams-MBP\u0027, ip: \u0027fe80:0:0:0:5f:980e:395a:cb7a%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.5\u0027, java.version: \u002711.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.37.544337 (8c0344a12e5521..., userDataDir: /var/folders/x9/xr_2yfpn18z...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 83.0.4103.97, webStorageEnabled: true}\nSession ID: 7f155629daefcc8e75ee238a33d8e43c\n*** Element info: {Using\u003dxpath, value\u003d//td[1]/tr[1]/*[1]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat definitions.MyLeave.iClickOn(MyLeave.java:41)\n\tat ✽.I click on \"Employee Name\"(file:src/test/resources/features/MyLeave.feature:31)\n",
  "status": "failed"
});
formatter.step({
  "name": "\"Personal Details\" page will be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "EssLogin.pageWillBeDisplayed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
});