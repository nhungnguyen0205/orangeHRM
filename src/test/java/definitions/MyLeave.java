package definitions;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

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
    public void iClickOnOnTheRowAtColumn( String row, String column) {
        getDriver().findElement(By.xpath("//tr["+row+"]/td["+column+"]/a")).click();
    }


    @Then("At column {string} of row {string},ESS user can only see {string} and {string} in Actions dropdown list")
    public void atColumnOfRowESSUserCanOnlySeeAndInActionsDropdownList(String column, String row, String selectActionValue, String cancelValue) {
        String[] exp = {selectActionValue,cancelValue};
        Select dropdown = new Select(getDriver().findElement(By.xpath("//tr["+row+"]/td["+column+"]/*[@class='select_action quotaSelect']")));
        List<WebElement> options = dropdown.getOptions();
        for (WebElement option: options) {
            for(int i =0;i<exp.length;i++){
                if(exp[i].equals(option.getText())) {
                    Assert.assertEquals(exp[i], option.getText());
                }else {
                    assert false;
                }
            }

        }
    }
}
