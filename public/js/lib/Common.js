
const Common = {
  /**
   * 
   * @param
   *
   * @return
   */    
  getServerConfig: function(json) {
    try{
      let ret = "";
      const configJson = document.querySelector('#server_config').value;
      const obj = JSON.parse(configJson);
      return obj;
    } catch (e) {
      console.error(e);
    }    
  }
}


