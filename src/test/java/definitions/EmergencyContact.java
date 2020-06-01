package definitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.openqa.selenium.By;

import static support.TestContext.getDriver;

public class EmergencyContact {
    MyInfo info = new MyInfo();
    EssLogin login = new EssLogin();
    ContactDetails contact = new ContactDetails();
//    @Then("I can add {int} records in {string} page")
//    public void iCanAddRecordsInPage(int numberOfTime, String page) {
//        for(int i =1; i<=numberOfTime;i++){
//            login.iClickOnButton("Add");
//            contact.iTypeInField("Mia"+ i,"Name");
//            contact.iTypeInField("Spouse","Relationship");
//            contact.iTypeInField("1234557","Home Telephone");
//            login.iClickOnButton("Save");
//            login.MessageWillBeAppeared("Successfully Saved");
//        }
//    }

    @And("I check on {string} record")
    public void iCheckOnRecord(String text) {
        getDriver().findElement(By.xpath("//*[contains(text(),'"+text+"')]/../..//input[@type='checkbox']")).click();
    }

//    @And("I check on {int} records that I have just created")
//    public void iCheckOnRecordsThatIHaveJustCreated(int record) {
//        for (int i =1; i<=record;i++){
//
//        }
//    }

    @Then("I can add {int} records with name {string} in {string} page")
    public void iCanAddRecordsWithNameInPage(int time, String name, String page) {
        for(int i =1; i<=time;i++){
            login.iClickOnButton("Add");
            contact.iTypeInField(name + i,"Name");
            contact.iTypeInField("Spouse","Relationship");
            contact.iTypeInField("1234557","Home Telephone");
            login.iClickOnButton("Save");
            login.MessageWillBeAppeared("Successfully Saved");
        }
    }

    @And("I check on {int} records with name {string} that I have just created")
    public void iCheckOnRecordsWithNameThatIHaveJustCreated(int numberOfTime, String name) {
        for (int i =1; i<=numberOfTime;i++){
                iCheckOnRecord(name + i);
        }
    }
}
