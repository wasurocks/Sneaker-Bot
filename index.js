const puppeteer = require("puppeteer");

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(
        "https://www.nike.com/th/launch/t/air-max-720-ispa-metallic-silver/",
        { waitUntil: "networkidle2" }
    );
    const date = Date.now();
    const [button] = await page.$x(
        "/html/body/div[2]/div/div/div[1]/div/div[3]/div[2]/div/section[1]/div[2]/aside/div/div[2]/div/div[2]/ul/li[1]/button"
    );
    if (button) {
        await button.click();
        console.log("size selected");
        const [button2] = await page.$x(
            "/html/body/div[2]/div/div/div[1]/div/div[3]/div[2]/div/section[1]/div[2]/aside/div/div[2]/div/div[2]/div/button"
        );
        if (button2) {
            await button2.click();
            console.log("added to checkout");
            const date2 = Date.now();
            console.log("time: " + (date2 - date));
        }
    }
})();
