const {test, expect,request}=require("@playwright/test");
const {APIutils} = require("./utils/APIutils");

const LoginPayload={userEmail: "vishwa.joshi@bacancy.us", userPassword: "Abc@1234"};
const OrderPayload={orders: [{country: "India", productOrderedId: "6960eac0c941646b7a8b3e68"}]}
let response;

test.beforeAll( async()=>
{
    const ApiContext = await request.newContext();
    const apiutils = new APIutils(ApiContext,LoginPayload);
    response = await apiutils.CreateOrder(OrderPayload);
      
}
);
//test.beforeEach();


test("ecom website place order test",async ({page})=>
{
   page.addInitScript(value =>
  {
    window.localStorage.setItem('token',value);
  },response.token );

  await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

  await page.locator("button[routerlink*='myorders']").click();
  await page.locator("tbody").waitFor();
 const rows= await page.locator("tbody tr");
 for(let i=0;i<await rows.count();++i)
 {
    const rowOrderid= await rows.nth(i).locator("th").textContent();
    if(response.orderid.includes(rowOrderid))
    {
      await rows.nth(i).locator("button").first().click();
      break;
    }
 }

  const orderIdDetails = await page.locator(".col-text").textContent();
  expect(response.orderid.includes(orderIdDetails)).toBeTruthy();
}
);