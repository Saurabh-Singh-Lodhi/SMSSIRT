import ResultModelGenerated from "./generated/ResultModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = ResultModelGenerated.init();
  
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
      return await ResultModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...ResultModelGenerated,
  ...customModel
};
