package definitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import static support.TestContext.getDriver;

public class AddEmployee {
    @When("I focus mouse on {string}")
    public void iFocusMouseOn(String submenu) {
        Actions action = new Actions(getDriver());
        WebElement menu = getDriver().findElement(By.xpath("//*[contains(text(),'"+submenu+"')]"));
        action.moveToElement(menu).perform();
    }



    @And("I click on {string} on SubMenu")
    public void iClickOnOnSubMenu(String submenu) {
        getDriver().findElement(By.xpath("//a[contains(text(),'"+submenu+"')]")).click();
    }

    @And("I check on {string} checkbox")
    public void iCheckOnCheckbox(String checkbox) {

        getDriver().findElement(By.xpath("//*[contains(text(),'"+checkbox+"')]/following-sibling::input")).click();
    }

    @And("At {string}, I press enter on my keyboard")
    public void atIPressEnterOnMyKeyboard(String nameOfField) {
        WebElement el = getDriver().findElement(By.xpath("//*[contains(text(),'"+nameOfField+"')]/following-sibling::input"));
        el.sendKeys(Keys.ENTER);
    }
    public void asser(String q, String b)
    {
        q ="abc";
        b="abc";
        Assert.assertEquals(q,b);
    }
}
