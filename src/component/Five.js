import { useState } from "react"

const Five = ()=>{
  const sampleGroups = [
    {id:1,title:'Football',details:{messageCount: 30,public:true}},
    {id:2,title:'Family',details:{messageCount:110,public:false}}]
    const [titleFilter,setTitleFilter]= useState("family");
    const familyTitle =()=>{
      const filteredGroups = sampleGroups.filter((sample) =>
        sample.title.toLowerCase().includes(titleFilter.toLowerCase())
      );
   
    }
    //const findFamilyGroup = () => {
     // const familyGroup = sampleGroups.find(group => group.title === 'Family');
     // return familyGroup;
    };
  
   // const familyGroup = findFamilyGroup();   
   //{familyGroup ? (
     //   <div>
       // <p>ID: {familyGroup.id}</p>
        //<p>Title: {familyGroup.title}</p>
        //<p>Message Count: {familyGroup.details.messageCount}</p>
      //</div>
   // ) : (
    ////  <p>No group found with the title "Family"</p>
   /// )}

    return (
    <div>
      {filteredGroups.length > 0 ? (
        filteredGroups.map((group) => (
          <div key={group.id}>
            <p>{group.id}</p>
            <p>{group.title}</p>
            <p>{`Message count: ${group.details.messageCount}`}</p>
          </div>
        ))
      ) : (
        <p>No group found with the title "{titleFilter}"</p>
      )}
      </div>
    )

}
export default Five;