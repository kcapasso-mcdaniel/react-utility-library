// function to safely parse json
const safelyParseJSON = (str) => {
   try {
      JSON.parse(str);
   } catch (err) {
      return str;
   }
   return JSON.parse(str);
};

// function to check if value is an object
const isObject = (value) => {
   // return true or false on the following conditions
   return (
      //    if value is an object
      typeof value === "object" &&
      // if the value is not null
      value !== null &&
      //   if the value is not an array
      Array.isArray(value) === false
   );
};

// function to convert data type
const convertDataType = (str) => {
   // compare these conditions and compare returns in one line
   if (str === "null") return null;
   if (str === "undefined") return undefined;
   if (str === "true") return true;
   if (str === "false") return false;
   // compare the string number to the number and return the string of that number
   // eslint-disable-next-line
   if (str == Number(str)) return Number(str);
   // use variables to store functions rather than calling function multiple times
   const parsedJSON = safelyParseJSON(str);
   if (Array.isArray(parsedJSON)) return parsedJSON;
   if (isObject(parsedJSON)) return parsedJSON;
   return str;
};

export { isObject, convertDataType, safelyParseJSON };
