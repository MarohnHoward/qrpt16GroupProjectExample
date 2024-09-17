import { By } from "selenium-webdriver";
import { BasePage } from "./basePage";
const fs = require('fs')

export class MarsPage extends BasePage {
    youtube: By = By.xpath('(//a[@*])[261]'); 

    constructor() {
        super({url: 'https://www.nasa.gov/'}); 
    }; 

    async scrollToElement(elementBy: By) {
        const scrollThing = await this.getElement(elementBy); 
        await this.driver.actions()
        .move({origin: scrollThing})
        .perform()
    }; 

    async tabSwitch() {
        let myTabs = await this.driver.getAllWindowHandles(); 
        await this.driver.switchTo().window(myTabs[1]);
        await this.driver.sleep(1000); 
        fs.writeFile(`${__dirname}/youtube.png`, 
            await this.driver.takeScreenshot(), "base64",
            (e) => {
                if (e) console.error(e)
                else console.log('Look its youtube'); 
            }
        ); 
        await this.driver.close(); 
        await this.driver.switchTo().window(myTabs[0]); 
    }; 
}