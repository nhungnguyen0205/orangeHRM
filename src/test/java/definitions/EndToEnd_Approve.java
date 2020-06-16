package definitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.Select;

import static support.TestContext.getDriver;

public class EndToEnd_Approve {
    @And("I click on {string} link on the top right corner.")
    public void iClickOnLinkOnTheTopRightCorner(String nameofUser) {
        getDriver().findElement(By.linkText(nameofUser)).click();
    }

    @And("I click on {string} link to Logout")
    public void iClickOnLink(String link) {
       getDriver().findElement(By.xpath("//*[contains(text(),'"+link+"')]")).click();

    }

    @When("At Pending Leave Request, I click on name {string} with date {string}")
    public void atPendingLeaveRequestIClickOnNameWithDate(String userName, String date) {
        getDriver().findElement(By.xpath("//*[contains(text(),'"+userName+"') and contains(text(),'"+date+"')]")).click();
    }

    @And("I click on {string} at Dashboard")
    public void iClickOnAtDashboard(String myLeave) {
        getDriver().findElement(By.xpath("//span[text()='"+myLeave+"']")).click();
    }

    @When("At column {int}, I select {string}")
    public void atColumnISelect(int column, String status) {
        Select sel = new Select(getDriver().findElement(By.xpath("//tr//td["+column+"]/select")));
        sel.selectByVisibleText(status);
    }

    @Then("At column {int}, status of row is changed to {string}")
    public void atColumnStatusOfRowIsChangedTo(int column, String status) {
        Assert.assertEquals(status, getDriver().findElement(By.xpath("//tr//td["+column+"]")).getText());
    }
}
