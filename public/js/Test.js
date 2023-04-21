
const Test = {
  func1 : function() {
    console.log("func1");

  },
  getList : function() {
    //      console.log("func1");
    const data = [
        {id:1, name: "name1"},
        {id:2, name: "name2"},
        {id:3, name: "name3"},
    ];
    return data;
  },   
}
console.log("#public/Test");
//export default Test;
