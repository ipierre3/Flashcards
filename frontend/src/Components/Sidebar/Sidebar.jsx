import './SideBar.css'

const Sidebar = (props) => {


  return ( 
    <div className="Sidebar">
      <div className="Sidebar-header">
        <h2>COLLECTIONS</h2>
      </div>
      <div className="Sidebar">
        {props.collections.map(collection => (
          <div className="Sidebar-item" key={collection.id}>
            <button className='Sidebar-button' onClick={() => {
              props.setSelectedCollectionId(collection.id)
              props.getCards(collection.id)
            }}>{collection.title}</button>
          </div>
        ))}
      </div>
    </div>
   );
}
 
export default Sidebar;


// 1. Generate these options from the "props.collections" variable
// 2. Make each on a <button></button> 
// 3. Make the button, when clicked, update the selectedCollectionId on the App.js file (hint: pass down the setSelectedCollectionId to this component through props)
