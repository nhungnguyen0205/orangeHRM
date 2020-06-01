package definitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;

import static support.TestContext.getDriver;

public class Photograph {
    @And("I click on Photo on the top left corner")
    public void iClickOnPhotoOnTheTopLeftCorner() {
        getDriver().findElement(By.id("empPic")).click();
    }
    @And("I select photo {string}")
    public void iSelectPhoto(String namePhoto) {
        getDriver().findElement(By.id("photofile")).sendKeys("/Users/nhungnguyen/IdeaProjects/orangeHRM/src/test/resources/images/"+ namePhoto+"");
    }

    @Then("popup {string} will be appeared")
    public void popupWillBeAppeared(String popUpName) {
        Assert.assertTrue( getDriver().findElement(By.xpath("//*[contains(text(),'"+popUpName+"')]")).isDisplayed());
    }
    @When("on popup, I click on {string} button")
    public void onPopupIClickOnButton(String btn) {
        getDriver().switchTo().activeElement().findElement(By.xpath("//*[@id = 'btnYes']")).click();
    }
}
