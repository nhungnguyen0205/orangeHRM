package definitions;

import cucumber.api.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static support.TestContext.getDriver;

public class Entitlement {
    @Then("At column {int}, leave types: {string},{string} and {string} will be displayed")
    public void atColumLeaveTypesAndWillBeDisplayed(int column, String leaveType1, String leaveType2, String leaveType3) {
        ArrayList<String> exp = new ArrayList<String>(Arrays.asList(leaveType1, leaveType2, leaveType3));
        ArrayList<String> act = new ArrayList<String>();
        List<WebElement> el = getDriver().findElements(By.xpath("//tr/td["+column+"][@class ='left']"));
        for (WebElement i:el) {
            act.add(i.getText());
        }
        Assert.assertTrue(act.equals(exp));
    }

    @Then("At column {int}, {string} will be displayed at {string}")
    public void atColumnWillBeDisplayedAt(int column, String dateValue, String from) {
        ArrayList<String> exp = new ArrayList<String>(Arrays.asList(dateValue));
        ArrayList<String> act = new ArrayList<String>();
        List<WebElement> el = getDriver().findElements(By.xpath("//tr/td["+column+"][@class ='left']"));
        act.add(el.get(0).getText());
        for(int i = 1; i<el.size();i++){
            if(!el.get(i).getText().equals(el.get(0).getText())){
                act.add(el.get(i).getText());
            }
        }
        Assert.assertTrue(act.equals(exp));
    }

    public void compare(String day, String vacationType, int column){
        System.out.println(getDriver().findElement(By.xpath("//*[contains(text(),'"+vacationType+"')]/../td["+column+"]")).getText());

        Assert.assertTrue(getDriver().findElement(By.xpath("//*[contains(text(),'"+vacationType+"')]/../td["+column+"]")).getText().contains(day));
    }
    @Then("At column {int}, {string} days for {string}, {string} days for {string}, and {string} days for {string}.")
    public void atColumnDaysForDaysForAndDaysFor(int column, String numberOfDay1, String vacationType1 , String numberOfDay2, String vacationType2, String numberOfDay3, String vacationType3) {
        compare(numberOfDay1,vacationType1,column);
        compare(numberOfDay2,vacationType2,column);
        compare(numberOfDay3,vacationType3,column);
    }
}
