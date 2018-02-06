import React from 'react';
const EditPage = (props) => {
console.log(props);
 return(
   <div>
   This is from my edit expense Component with id {props.match.params.id}
   </div>
 );
};
  export  default EditPage; 