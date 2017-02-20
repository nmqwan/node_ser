let express = require('express');
let app = express();
app.listen(3000,()=>console.log("Ser started"));

let handle=(request,response)=>{
  response.send("Hello");
};
class pTinh {
  constructor(pt,a,b) {
    this.pt=pt;
    this.a=a;
    this.b=b
  }
  show(res){
    if (this.pt=="cong") res.send(`${this.a} + ${this.b} = ${parseInt(this.a)+parseInt(this.b)} `);
    else if (this.pt=="tru") res.send(`${this.a} - ${this.b} = ${parseInt(this.a)-parseInt(this.b)}`);
    else if (this.pt=="nhan") res.send(`${this.a} x ${this.b} = ${parseInt(this.a)*parseInt(this.b)}`);
    else if (this.pt=="chia") res.send(`${this.a} / ${this.b} = ${parseInt(this.a)/parseInt(this.b)}`);

  }

}
// TODO: "/"==> localhost:3000
app.get("/",handle)

app.get("/admin",(req,res)=>{
  res.send("Hi Admin");
});

app.get("/show/:id/:name",(req,res)=>{
  let id = req.params.id;
  let name = req.params.name;
  res.send(`Hi id : ${id} ${name}`)
});

let tinh = (req,res)=>{
  let {a,c}= req.params;
  let b= req.params.b;
  let t = new pTinh(c,a,b)
  t.show(res);
}
app.get("/tinh/:a/:b/:c",tinh);

// TODO: để xuống cuối cùng
// TODO: ưu tiên các API trên cùng ,nếu có 2 API trùng sẽ chạy fist API
app.get("*",(req,res)=>{
  res.send("Ko ton tai")
});
