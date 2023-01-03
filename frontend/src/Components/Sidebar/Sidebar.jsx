import './SideBar.css'

const Sidebar = (props) => {
  
  console.log(props.collections)

  return ( 
    <div className="Sidebar">
      <div className="Sidebar-header">
        <h2>COLLECTIONS</h2>
      </div>
      <div className="sidebar">
        {props.collections.map(collection => (
          <div className="sidebar-item" key={collection.id}>
            <span>{collection.title}</span>
          </div>
        ))}
        {/* <ul> */}
          {/* 
          1. Generate these options from the "props.collections" variable
          2. Make each on a <button></button> 
          3. Make the button, when clicked, update the selectedCollectionId on the App.js file (hint: pass down the setSelectedCollectionId to this component through props)
          */}
          {/* <h1>FLUTTER</h1>
          <h1>CSS</h1>
          <h1>PANDAS</h1>
        </ul> */}
      </div>
    </div>
   );
}
 
export default Sidebar;