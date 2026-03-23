const {test, expect,request}=require("@playwright/test");
const {APIutils} = require("./utils/APIutils");

const LoginPayload={userEmail: "vishwa.joshi@bacancy.us", userPassword: "Abc@1234"};
const OrderPayload={orders: [{country: "India", productOrderedId: "6960eac0c941646b7a8b3e68"}]}
const FakePayloadOrders= { data: [], message: "No Orders" };
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


  await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",async route=>
  {
   const response= await  page.request.fetch(route.request());
   let body = JSON.stringify(FakePayloadOrders);  //javascirpt obj to jon obj conversion
   route.fulfill(
    {
        response,
        body, //we are explicitly sending fake response to browser, so that we can verify the test case for no orders scenario, if we send real response then it will always have order details and test case will fail
    }
   )
    //intercepting the response = api response->{playwirght sends fake response} send to browser -> render data on frontend
  }
  )
  await page.locator("button[routerlink*='myorders']").click();
  //await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*");
  console.log(await page.locator(".mt-4").textContent());
}
 
);