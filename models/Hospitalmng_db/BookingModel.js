import BookingModelGenerated from "./generated/BookingModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = BookingModelGenerated.init();
  
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
      return await BookingModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...BookingModelGenerated,
  ...customModel
};
