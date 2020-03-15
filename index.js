const puppeteer = require("puppeteer");

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(
        "https://www.nike.com/th/launch/t/air-max-1-huarache-dna-ch1-pack/",
        { waitUntil: "networkidle2" }
    );
    const date = Date.now();
    const [button] = await page.$x(
        "//button[contains(text(), 'EU 42')]"
    );
    await button.click();
    const [button2] = await page.$x(
        "//button[contains(text(), 'เพิ่มในตะกร้า')]"
    );
    await button2.click();
    const date2 = Date.now();
    console.log("time: " + (date2 - date) + "ms");
    await page.waitForFunction(
        'document.querySelector("body").innerText.includes("เพิ่มลงในตะกร้าแล้ว")',
      );
    await page.screenshot({path: 'checkout.png'});
    browser.close();
})();





























