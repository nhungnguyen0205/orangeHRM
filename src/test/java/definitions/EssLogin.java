package definitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import static support.TestContext.getDriver;

public class EssLogin {
    @Given("I open {string} page")
    public void iOpenPage(String url) {
        getDriver().get(url);
    }

    @When("I type username {string}")
    public void iTypeUsername(String username) {
        getDriver().findElement(By.id("txtUsername")).sendKeys(username);
    }

    @And("I type pass {string}")
    public void iTypePass(String pass) {
        getDriver().findElement(By.id("txtPassword")).sendKeys(pass);
    }

    @And("I click on {string} button")
    public void iClickOnButton(String btn) {
        getDriver().findElement(By.xpath("//*[@value ='"+btn+"']")).click();
    }

    @Then("{string} page will be displayed")
    public void pageWillBeDisplayed(String title) {
        String actual = getDriver().findElement(By.xpath("//*[contains(text(),'"+title+"')]")).getText();
        Assert.assertEquals(title,actual);

    }

    @Then("message {string} will be appeared")
    public void MessageWillBeAppeared(String err) {
        Assert.assertTrue(getDriver().findElement(By.xpath("//*[contains(text(),'"+err+"')]")) != null);
    }
    @Then("error message {string} will be appeared")
    public void errorMessageWillBeAppeared(String err) {
        Assert.assertTrue(getDriver().findElement(By.xpath("//span[contains(text(),'"+err+"')]")).isDisplayed());
    }

    @Then("I wait some seconds")
    public void iWaitMinutes() throws InterruptedException {
        Thread.sleep(3000);
    }
}
