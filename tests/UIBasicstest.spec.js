 const {test, expect}=require("@playwright/test");

 test("playwright test 1",async ({browser})=>
 {
   const context= await browser.newContext(); 
   const page= await context.newPage();
   page.goto("https://gemini.google.com/app")
   await expect(page).toHaveTitle("Google Gemini");
   await console.log (await page.title());
 }
);


test("playwright test 2",async ({page})=>
 {
   await page.goto("https://www.google.com");
   await expect(page).toHaveTitle("Google");
   await page.locator('textarea[name="q"]').fill("ahemdabad");
   
 }
);

test.only("demo website tests",async ({page})=>
{
  await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  await expect(page).toHaveTitle("Let's Shop");

  await page.locator("#userEmail").fill("vishwa.joshi@bacancy.us");
  await page.locator("[type='password']").fill("Abc@1234");
  await page.locator("#login").click();
  console.log(await page.locator(".card-body b").nth(0).textContent());
}
);