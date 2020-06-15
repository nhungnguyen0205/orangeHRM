package definitions;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import java.util.ArrayList;
import java.util.List;

import static support.TestContext.getDriver;

public class MyLeave {
    public boolean clickable(String xpath) {
        boolean result = false;
        List<WebElement> list = getDriver().findElements(By.xpath(xpath));
        for (WebElement i : list) {
            String text = i.getTagName();
            if (text.equals("a")) {
                result = true;
                break;
            }
        }
        return result;
    }

    @Then("Date, Name, and Status can be clickable")
    public void dateNameAndStatusCanBeClickable() {
        String text = getDriver().findElement(By.xpath("//tr[1]/td[1]")).getText();
        if (text.equals("No Records Found")) {
            System.out.println("Please add at least 1 leave request");
        } else {
            Assert.assertTrue(clickable("//tr[1]/td[1]/child::node()"));
            Assert.assertTrue(clickable("//tr[1]/td[2]/child::node()"));
            Assert.assertTrue(clickable("//tr[1]/td[6]/child::node()"));
        }
    }

    @When("I click on data on the {string} row at column {string}")
    public void iClickOnOnTheRowAtColumn(String row, String column) {
        getDriver().findElement(By.xpath("//tr[" + row + "]/td[" + column + "]/a")).click();
    }


    @Then("At column {string} of row {string},ESS user can only see {string} and {string} in Actions dropdown list")
    public void atColumnOfRowESSUserCanOnlySeeAndInActionsDropdownList(String column, String row, String selectActionValue, String cancelValue) {
        ArrayList<String> exp = new ArrayList<String>();
        exp.add(selectActionValue);
        exp.add(cancelValue);
        ArrayList<String> act = new ArrayList<String>();
        Select dropdown = new Select(getDriver().findElement(By.xpath("//tr[" + row + "]/td[" + column + "]/*[@class='select_action quotaSelect']")));
        List<WebElement> options = dropdown.getOptions();
        for (WebElement option : options) {
            act.add(option.getText());
        }
//
//        for(int i =0;i<exp.size();i++){
//            System.out.println("EXP: " +i+" "+ exp.get(i));
//        }
//
//        for(int i =0;i<act.size();i++){
//            System.out.println("ACT: " +i+" "+ act.get(i));
//        }
//        System.out.println(act.equals(exp));
        Assert.assertTrue(act.equals(exp));

    }
    @When("At column {int}, I select {string} at row which contains {string}")
    public void atColumnISelectAtRowWhichContains(int column, String status, String date) {
        column = column -1 ;
        Select sel = new Select(getDriver().findElement(By.xpath("//*[contains(text(),'"+date+"')]/../following-sibling::td["+column+"]/select")));
        sel.selectByVisibleText(status);
    }
    @Then("At column {int}, status of row which contains {string} is changed to {string}")
    public void atColumnStatusOfRowWhichContainsIsChangedTo(int column, String date, String status) {
        column = column -1 ;
         String exp = "Cancelled";
         String actual = getDriver().findElement(By.xpath("//*[contains(text(),'"+date+"')]/../following-sibling::td["+column+"]")).getText();
         Assert.assertTrue(actual.contains(exp));
    }
}


