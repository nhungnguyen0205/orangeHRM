package definitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import javax.lang.model.element.Element;
import java.nio.channels.SelectableChannel;
import java.util.List;
import java.util.Map;

import static support.TestContext.getDriver;

public class MyInfo {
    @When("I click on {string} on the top menu")
    public void iClickOnOnTheTopMenu(String tab) {
        getDriver().findElement(By.xpath("//*[contains(text(),'" + tab + "')]")).click();
        System.out.println();
    }

    @And("I click on {string} on the left side")
    public void iClickOnOnTheLeftSide(String menu) {
        getDriver().findElement(By.xpath("//*[contains(text(),'" + menu + "')]")).click();
    }

    public void enableField(String xpath) {
        Assert.assertTrue(getDriver().findElement(By.xpath(xpath)).isEnabled());
    }

    @Then("{string}, {string}, {string} , {string}, {string},{string}, {string},{string} can be edited")
    public void canBeEdited(String first, String middle, String last, String otherId, String license, String gender, String marital, String national) {
        String[] xpath = {"//*[@title = '" + first + "']", "//*[@title = '" + middle + "']", "//*[@title = '" + last + "']", "//*[contains(text(),'" + otherId + "')]/../input", "//*[contains(text(),'" + license + "')]/../input", "//*[contains(text(),'" + gender + "')]/..//*[contains(text(),'Male')]", "//*[contains(text(),'" + gender + "')]/..//*[contains(text(),'Female')]", "//*[contains(text(),'" + marital + "')]/../select"};
        for (String i : xpath) {
            enableField(i);
        }
    }

    public void clearInput(String id) {
        getDriver().findElement(By.id(id)).clear();
    }

    public void inputData(String id, String textInput) {
        clearInput(id);
        getDriver().findElement(By.id(id)).sendKeys(textInput);
    }

    @And("I enter valid data on the page")
    public void iEnterValidDataOnThePage(DataTable table) {
        List<Map<String, String>> list = table.asMaps(String.class, String.class);

        String[][] arr = {{"personal_txtEmpFirstName",list.get(0).get("First Name")},
                {"personal_txtEmpMiddleName",list.get(0).get("Middle Name")},
                {"personal_txtEmpLastName",list.get(0).get("Last Name")},
                {"personal_txtOtherID",list.get(0).get("Other Id")},
                {"personal_txtLicExpDate",list.get(0).get("License Expiry Date")}
        };
        for (String[] i:arr) {
            inputData(i[0],i[1]);
        }

        String gender = list.get(0).get("Gender");
        getDriver().findElement(By.xpath("//*[contains(text(),'" + gender + "')]")).click();

        ContactDetails contact = new ContactDetails();
        contact.selectDataDropDown("personal_cmbMarital",list.get(0).get("Marital Status") );
        contact.selectDataDropDown("personal_cmbNation",list.get(0).get("Nationality") );
    }

    public void compareString(String id, String exp) {
        String actual = getDriver().findElement(By.id(id)).getAttribute("value");
        Assert.assertEquals(exp, actual);
    }

    public void compareDropDown(String xpath, String exp) {
        String actual = getDriver().findElement(By.xpath(xpath)).getText();
        Assert.assertEquals(exp, actual);
    }

    @Then("data saved successfully wit new data")
    public void dataSavedSuccessfullyWitNewData(DataTable table) {
        List<Map<String, String>> list = table.asMaps(String.class, String.class);

        compareString("personal_txtEmpFirstName", list.get(0).get("First Name"));
        compareString("personal_txtEmpMiddleName", list.get(0).get("Middle Name"));
        compareString("personal_txtEmpLastName", list.get(0).get("Last Name"));
        compareString("personal_txtOtherID", list.get(0).get("Other Id"));
        compareString("personal_txtLicExpDate", list.get(0).get("License Expiry Date"));
        compareDropDown("//*[@checked = 'checked']/following-sibling::label", list.get(0).get("Gender"));
        compareDropDown("//*[@id='personal_cmbMarital']/*[@selected = 'selected']", list.get(0).get("Marital Status"));
        compareDropDown("//*[@id='personal_cmbNation']/*[@selected = 'selected']", list.get(0).get("Nationality"));
    }
    public void compareDisable(String xpath1, String xpath2, String exp){
        String actual =null;
        String value = getDriver().findElement(By.xpath(xpath1)).getAttribute("disabled");
        if (value.equals("disabled")) {
            actual = getDriver().findElement(By.xpath(xpath2)).getText();
            Assert.assertEquals(exp, actual);
        }
    }
    public void disableFields(String text) {
        String actual = null;
        String xpath1 = null;
        String xpath2 = null;
        String value = null;
        if (text.contains("'")) {
            xpath1 = "//*[contains(text(),\"" + text + "\")]/following-sibling::input";
            xpath2 = "//*[contains(text(),\"" + text + "\")]";
            compareDisable(xpath1,xpath2,text);
            } else if (!text.contains("'")){
                xpath1 = "//*[contains(text(),'" + text + "')]/following-sibling::input";
                xpath2 = "//*[contains(text(),' " + text + "')]";
                compareDisable(xpath1,xpath2,text);
            }
        }

        @Then("{string},{string},{string} can not be edited.")
        public void canNotBeEdited (String empID, String dlNo, String dob) {
            disableFields(empID);
            disableFields(dlNo);
            disableFields(dob);
        }
}
