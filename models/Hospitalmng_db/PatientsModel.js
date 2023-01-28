import PatientsModelGenerated from "./generated/PatientsModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = PatientsModelGenerated.init();
  
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
      return await PatientsModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...PatientsModelGenerated,
  ...customModel
};
