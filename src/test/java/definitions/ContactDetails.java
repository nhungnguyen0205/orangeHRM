package definitions;

import cucumber.api.java.en.And;
import io.cucumber.datatable.DataTable;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.Select;

import java.util.List;
import java.util.Map;

import static support.TestContext.getDriver;

public class ContactDetails {
    MyInfo info = new MyInfo();
    public void selectDataDropDown(String id, String inputText){
            Select sel = new Select(getDriver().findElement(By.id(id)));
            sel.selectByVisibleText(inputText);
    }
    @And("I type following valid data on the page")
    public void iTypeFollowingValidDataOnThePage(DataTable table) {
        List<Map<String, String>> list = table.asMaps(String.class,String.class);


        String[][] arr = {{"contact_street1",list.get(0).get("Address Street 1")},
                {"contact_street2",list.get(0).get("Address Street 2")},
                {"contact_city",list.get(0).get("City")},
                {"contact_province",list.get(0).get("State/Province")},
                {"contact_emp_zipcode",list.get(0).get("Zip/Postal Code")},
                {"contact_emp_hm_telephone",list.get(0).get("Home Telephone")},
                {"contact_emp_mobile",list.get(0).get("Mobile")},
                {"contact_emp_work_telephone",list.get(0).get("Work Telephone")},
                {"contact_emp_work_email",list.get(0).get("Work Email")},
                {"contact_emp_oth_email",list.get(0).get("Other Email")}
        };
        for (String[] i : arr) {
            info.inputData(i[0],i[1]);
        }
        selectDataDropDown("contact_country",list.get(0).get("Country"));
    }

    @And("I type {string} in {string} field")
    public void iTypeInField(String text, String fieldName) {
        getDriver().findElement(By.xpath("//*[contains(text(),'"+fieldName+"')]/following-sibling::input")).clear();
        getDriver().findElement(By.xpath("//*[contains(text(),'"+fieldName+"')]/following-sibling::input")).sendKeys(text);
    }

    @And("I select {string} in {string} field")
    public void iSelectInField(String text, String field) {
//        Select select =new Select( getDriver().findElement(By.id("contact_country")));
        Select select =new Select( getDriver().findElement(By.xpath("//*[contains(text(),'"+field+"')]/following-sibling::select")));
        select.selectByVisibleText(text);


    }
}
