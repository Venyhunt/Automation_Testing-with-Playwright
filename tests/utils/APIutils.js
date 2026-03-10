class APIutils
{
    constructor(ApiContext,LoginPayload)
    {
        this.ApiContext=ApiContext;
        this.LoginPayload=LoginPayload;
    }


   async getToken()
    {

        const LoginResponse=await this.ApiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
        {data:this.LoginPayload } )

    //expect(LoginResponse.ok()).toBeTruthy();  //checks for sucess codes like 200,201 etcc...
    const LoginResponseJson= await LoginResponse.json();
    const token=LoginResponseJson.token;
    console.log(token);
    return token;
    }


    async CreateOrder(OrderPayload)
    {
        let response={};
        response.token= await this.getToken();

         const orderResponse=await this.ApiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
              {data:OrderPayload,
                headers: { 'Authorization': response.token,
                           'Content-Type': 'application/json'
                 },
                })
                const orderResponseJson= await orderResponse.json();
                console.log(orderResponseJson);
                const orderid= orderResponseJson.orders[0];
                response.orderid=orderid;
                return response;
                
    }
}

module.exports={APIutils};