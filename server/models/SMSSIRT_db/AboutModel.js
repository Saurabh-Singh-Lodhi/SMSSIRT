import AboutModelGenerated from "./generated/AboutModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = AboutModelGenerated.init();
  
      schema.add({
        extraCustomField: Object
      });
    },
     
   */


  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await AboutModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...AboutModelGenerated,
  ...customModel
};
