
const Crud = {
  /**
   * 
   * @param
   *
   * @return
   */  
  getList : async function(obj)
  {
    try {   
console.log("#getList");    
//console.log(obj);    
      const response = await fetch(obj.url+ "/todos/index");
      const json = await response.json();
      return json;
    } catch (e) {
      console.error(e);
    }
  },
  /**
   * 
   * @param
   *
   * @return
   */    
  search : async function(obj)
  {
    try {   
//console.log("#search");    
      const searchKey = document.querySelector('#searchKey');
      const item = { search_key: searchKey.value}
      const body = JSON.stringify(item);		
      const res = await fetch(obj.url + "/todos/search", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},      
        body: body
      });
      const json = await res.json()
      if (res.status != 200) {
        throw new Error(await res.text());
      }
//console.log(json);
      return json;
    } catch (e) {
      console.error(e);
    }
  },

}

