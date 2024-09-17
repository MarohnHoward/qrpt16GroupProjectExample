import { MarsPage } from "./marsPage";
const page = new MarsPage(); 

test('clicks on youtube and takes a screenshot', async () => {
    await page.navigate(); 
    await page.scrollToElement(page.youtube); 
    await page.driver.sleep(1000); 
    await page.click(page.youtube); 
    await page.tabSwitch(); 
    await page.driver.quit(); 
})