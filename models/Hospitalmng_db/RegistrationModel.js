import RegistrationModelGenerated from "./generated/RegistrationModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = RegistrationModelGenerated.init();
  
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
      return await RegistrationModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...RegistrationModelGenerated,
  ...customModel
};
