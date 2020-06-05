package definitions;

import cucumber.api.java.bs.A;
import cucumber.api.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.By;

import static support.TestContext.getDriver;

public class ApplyLeave {
    @Then("I can see {string}, {string}, {string} and {string} submenu")
    public void iCanSeeAndSubmenu(String lSub, String mLS, String eS, String rS) {
        Assert.assertEquals(lSub,getDriver().findElement(By.id("menu_leave_applyLeave")).getText());
        Assert.assertEquals(mLS,getDriver().findElement(By.id("menu_leave_viewMyLeaveList")).getText());
        Assert.assertEquals(eS,getDriver().findElement(By.id("menu_leave_Entitlements")).getText());
        Assert.assertEquals(rS,getDriver().findElement(By.id("menu_leave_Reports")).getText());
    }
    @Then("{string} will be added.")
    public void willBeAdded(String result) {
        Assert.assertTrue(getDriver().findElement(By.xpath("//*[contains(text(),'"+result+"')]")).isDisplayed());
    }

    @Then("new record will be added in {string} page.")
    public void newRecordWillBeAddedInPage(String page) {
        getDriver().findElement(By.xpath("//a[contains(text(),'"+page+"')]")).click();
    }

    public void compareTwoValues(String exp, String act){

         Assert.assertEquals(exp,act);

    }
    public String getValue(String xpath){
       return  getDriver().findElement(By.xpath(xpath)).getText();
    }
    public void viewRecord(String date){
        String status = null;
        getDriver().findElement(By.xpath("//*[contains(text(),'"+date+"')]")).findElement(By.xpath("//*[contains(text(),'"+status+"')]")).click();
    }
    @Then("new record will be added in {string} page with data:{string} in {string}, {string} in {string}, {string} in {string}, {string} in {string}, and {string} in {string}.")
    public void newRecordWillBeAddedInPageWithDataInInInInAndIn(String menu, String dateValue, String dateField, String leaveTypeValue, String leaveTypeField, String leaveBalanceValue, String leaveBalanceField, String numberOfDayValue, String numberOfDayField, String statusValue, String statusField) {
        getDriver().findElement(By.xpath("//a[contains(text(),'"+menu+"')]")).click();
        getDriver().findElement(By.xpath("//a[contains(text(),'Pending Approval')]/../..//*[contains(text(),'"+dateValue+"')]")).click();
       compareTwoValues(dateValue,getValue("//tr[@class='odd']/td[1]"));
        compareTwoValues(leaveTypeValue,getValue("//tr[@class='odd']/td[2]"));
        compareTwoValues(leaveBalanceValue,getValue("//tr[@class='odd']/td[3]"));
        compareTwoValues(numberOfDayValue,getValue("//tr[@class='odd']/td[4]"));
        compareTwoValues(statusValue,getValue("//tr[@class='odd']/td[5]"));
    }
}
